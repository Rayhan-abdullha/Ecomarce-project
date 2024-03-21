import Breadcrumb from "./Bradcrumb"

const AfterHeader = () => {
    return (
        <div className="bg-white py-2">
            <div className="container mx-auto px-3">
                <Breadcrumb />
                <ul className="flex">
                    <li className="border border-gray-300 py-1 px-3 rounded-full text-[11px] cursor-pointer hover:bg-[#3749bb] hover:text-white">AMD</li>
                </ul>
            </div>
        </div>
    )
}

export default AfterHeader