import { BiLayerPlus } from "react-icons/bi"

const ProductCompare = () => {
    return (
        <div className="fixed bottom-[90px] right-5 cursor-pointer hidden lg:block">
            <div className="bg-[#081621] border border-[#666666] w-[60px] h-[60px] rounded-md flex justify-center items-center hover:bg-[#3749BB]">
                <BiLayerPlus className="text-white w-[40%] h-[40%]" />
            </div>
            <div className="absolute top-[-5px] right-[-5px] bg-red-500 w-5 h-5 rounded-ful flex justify-center items-center rounded-full">
                <p className="text-white">0</p>
            </div>
        </div>
    )
}
export default ProductCompare