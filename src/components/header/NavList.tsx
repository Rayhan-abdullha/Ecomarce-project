import { Link } from "react-router-dom"

type PropsType = {
    item: string
    setHideNav: React.Dispatch<React.SetStateAction<boolean>>
}
const NavList = ({ item, setHideNav }: PropsType) => {
    return (
        <li className="text-center sm:text-start" onClick={() => setHideNav(false)}>
            <Link to={`/categories/${item}`} className="uppercase lg:capitalize text-[14px] cursor-pointer font-bold hover:text-[#ef4a23]">{item}</Link>
        </li>
    )
}

export default NavList