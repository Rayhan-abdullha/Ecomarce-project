import { useEffect, useState } from 'react';
import NavList from './NavList'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
const Navbar = () => {
    const [innerWidth, setinnerWidth] = useState<number>(1024)
    const [showNav, setShowNav] = useState<boolean>(false)

    const cat = useSelector((state: RootState) => state.categoriesList.catItems)
    function handleNav() {
        setShowNav(prev => !prev)
    }

    useEffect(() => {
        if (innerWidth >= 1024) {
            setShowNav(false)
        }
        function handleResize() {
            setinnerWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [innerWidth]);
    return (
        <>
            <div className={`overlay ${showNav && innerWidth <= 1024 ? 'block' : 'hidden'}`}></div>
            <svg onClick={handleNav} className="lg:hidden z-[999] fixed top-[15px] left-5 text-white feather feather-menu cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            <div className={`bg-white py-3 border-b border-gray-200 shadow-sm relative lg:sticky ${(showNav && innerWidth <= 1024) ? 'block' : 'hidden'} lg:block`}>
                <div className='max-w-[1290px] mx-auto px-4 flex'>
                    <nav className={`h-full fixed lg:static top-0 left-0 bg-white lg:bg-inherit w-[100%] sm:w-[50%] z-[9999] translate-x-[-100%] lg:translate-x-0 ${showNav && 'translate-x-[0] transition-transform'}`}>
                        <ul className={`flex gap-10 sm:gap-5 flex-col lg:flex-row p-5 lg:p-0`}>
                            <div className={`close bg-white flex justify-end ${showNav && innerWidth <= 1024 ? 'block' : 'hidden'}`}>
                                <svg onClick={() => setShowNav(false)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x hover:transform hover:scale-125 cursor-pointer m-4"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </div>

                            {
                                cat.map((item) => (
                                    <NavList key={item.id} item={item.cat} setHideNav={setShowNav} />
                                ))
                            }
                        </ul>
                    </nav>

                </div>
            </div>
        </>
    )
}

export default Navbar