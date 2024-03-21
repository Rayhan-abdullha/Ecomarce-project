type PropsType = { item: string }
const NavList = ({ item }: PropsType) => {
    return (
        <li className="capitalize text-[13px] font-[500] hover:text-[#3749bb] cursor-pointer">
            {item}
        </li>
    )
}

export default NavList