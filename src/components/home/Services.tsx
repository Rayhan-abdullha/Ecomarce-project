import { BiLaptop, BiMessage, BiSupport } from "react-icons/bi"
import { GrBusinessService } from "react-icons/gr"

function Services() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-7 pt-[50px] md:pt-[65px]">
            <div className="flex gap-3 items-center bg-white rounded-sm p-4 cursor-pointer shadow-sm">
                <div className="logo w-[50px] h-[50px] bg-[#ef4a23] rounded-full flex justify-center items-center">
                    <BiLaptop className="w-[50%] h-[50%] text-white mt-1" />
                </div>
                <div>
                    <span className="text-[17px] font-medium mb-1">Laptop Finder</span>
                    <p className="text-[14px]">Find Your Laptop Easily</p>
                </div>
            </div>
            <div className="flex gap-3 items-center bg-white rounded-sm p-4 cursor-pointer shadow-sm">
                <div className="logo w-[50px] h-[50px] bg-[#ef4a23] rounded-full flex justify-center items-center">
                    <BiMessage className="w-[50%] h-[50%] mt-1 text-white" />
                </div>
                <div>
                    <span className="text-[17px] font-medium mb-1">Rise a Complain</span>
                    <p className="text-[14px]">Share Your Exprience</p>
                </div>
            </div>
            <div className="flex gap-3 items-center bg-white rounded-sm p-4 cursor-pointer shadow-sm">
                <div className="logo w-[50px] h-[50px] bg-[#ef4a23] rounded-full flex justify-center items-center">
                    <BiSupport className="w-[50%] h-[50%] mt-1 text-white" />
                </div>
                <div>
                    <span className="text-[17px] font-medium mb-1">Online Support</span>
                    <p className="text-[14px]">Get Online Support</p>
                </div>
            </div>
            <div className="flex gap-3 items-center bg-white rounded-sm p-4 cursor-pointer shadow-sm">
                <div className="logo w-[50px] h-[50px] bg-[#ef4a23] rounded-full flex justify-center items-center">
                    <GrBusinessService className="w-[50%] h-[50%] mt-1 text-white" />
                </div>
                <div>
                    <span className="text-[17px] font-medium mb-1">Serviceing Center</span>
                    <p className="text-[14px]">Repair Your Device</p>
                </div>
            </div>
        </div>
    )
}

export default Services