import { useEffect, useState } from 'react';
import navlist from '../db/navlist.json'
import NavList from './NavList'
const Navbar = () => {
    const [innerWidth, setinnerWidth] = useState<number>(768)
    const [showNav, setShowNav] = useState<boolean>(false)

    function handleNav() {
        setShowNav(prev => !prev)
    }

    useEffect(() => {
        function handleResize() {
            setinnerWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);
    return (
        <>

            <div className={`overlay ${showNav && innerWidth <= 768 ? 'block' : 'hidden'}`}></div>
            <div className="bg-white py-[10px] border-b border-gray-200">
                <div className='container mx-auto px-3 flex'>
                    <svg onClick={handleNav} className="md:hidden feather feather-menu cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                    <nav className={`h-full fixed md:static top-0 left-0 bg-white md:bg-inherit w-[50%] z-[999] translate-x-[-100%] md:translate-x-0 ${showNav && 'translate-x-[0] transition-transform'}`}>
                        <ul className={`flex gap-4 flex-col md:flex-row p-5 md:p-0`}>

                            <div className={`close bg-white flex justify-end ${showNav && innerWidth <= 768 ? 'block' : 'hidden'}`}>
                                <svg onClick={() => setShowNav(false)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x hover:transform hover:scale-125 cursor-pointer m-4"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </div>

                            {
                                navlist.map((item) => (
                                    <NavList key={item.id} item={item.cat} />
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