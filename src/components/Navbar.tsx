import navlist from '../db/navlist.json'
import NavList from './NavList'
const Navbar = () => {
    return (
        <div className="bg-white py-[10px] border-b border-gray-200">
            <nav className='container mx-auto px-3'>
                <ul className='flex gap-4'>
                    {
                        navlist.map((item) => (
                            <NavList key={item.id} item={item.cat} />
                        ))
                    }
                </ul>
            </nav>
        </div>
    )
}

export default Navbar