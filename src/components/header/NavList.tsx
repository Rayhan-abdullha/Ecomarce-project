import { Link } from "react-router-dom"

type PropsType = { item: string }
const NavList = ({ item }: PropsType) => {
    return (
        <li>
            <Link to={`/categories/${item}`} className="capitalize text-[14px] cursor-pointer font-bold hover:text-[#ef4a23]">{item}</Link>
        </li>
    )
}

export default NavList