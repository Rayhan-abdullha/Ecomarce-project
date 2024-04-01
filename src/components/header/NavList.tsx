import { Link } from "react-router-dom"

type PropsType = { item: string }
const NavList = ({ item }: PropsType) => {
    return (
        <li className="text-center sm:text-start">
            <Link to={`/categories/${item}`} className="uppercase lg:capitalize text-[14px] cursor-pointer font-bold hover:text-[#ef4a23]">{item}</Link>
        </li>
    )
}

export default NavList