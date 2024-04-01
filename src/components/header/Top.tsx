import { Link } from "react-router-dom";
import { FaBox } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import { MdAccountBox } from "react-icons/md";
import { BiSearch } from "react-icons/bi";

const TopHeader = () => {
    return (
        <div className="bg-slate-950 fixed top-0 left-0 right-0 lg:sticky z-[999]">
            <div className="max-w-[1290px] mx-auto px-4 flex justify-between items-center gap-4 py-[7px] lg:py-[14px]">
                <a href="/" className="logo w-[100%] lg:w-[10%] xl:w-[15%]">
                    <img
                        className="w-[90px] lg:w-[120px] mx-auto"
                        src="https://www.startech.com.bd/image/catalog/logo.png"
                        alt=""
                    />
                </a>
                <div className="block lg:hidden w-[40px] h-[30px] relative top-[5px] right-[40px] cursor-pointer">
                    <BiSearch className="text-white w-[80%] h-[80%]" />
                </div>
                <div className="hidden lg:block lg:w-[35%] xl:w-[40%]">
                    <input
                        type="text"
                        placeholder="Search"
                        className="px-2 py-2 w-full rounded-sm outline-none pl-5"
                    />
                </div>
                <div className="hidden lg:w-[55%] xl:w-[45%] text-white lg:flex lg:gap-4 p-2 justify-end items-center ">
                    <Link to="#">
                        <div className="flex items-center ">
                            <div className="text-orange-400 mx-2 text-2xl">
                                <FaBox />
                            </div>
                            <div className="ac-content">
                                <h5 className="text-[14px]">Offers</h5>
                                <p className="text-[12px] text-[#ffffff80]">Latest Offers</p>
                            </div>
                        </div>
                    </Link>
                    <Link to="#">
                        <div className="flex items-center ">
                            <div className="text-orange-400 mx-2 text-2xl">
                                <AiFillThunderbolt className="blink" />
                            </div>
                            <div className="ac-content">
                                <h5 className="text-[14px]">Happy Hour</h5>
                                <p className="text-[12px] text-[#ffffff80]">Special Deals</p>
                            </div>
                        </div>
                    </Link>

                    <Link to="#">
                        <span className="flex items-center ">
                            <div className="text-orange-400 mx-2 text-2xl">
                                <MdAccountBox />
                            </div>
                            <div className="ac-content">
                                <h5 className="text">PC Builder</h5>
                            </div>
                        </span>
                    </Link>
                    <div className="text-white rounded-md font-bold hover:bg-[blue]">
                        <Link className="btn-animation block px-4 rounded-md" to="#">PC Builder</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopHeader;
