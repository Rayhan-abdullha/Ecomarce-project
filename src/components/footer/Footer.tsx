import { BsTelephone } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { SiYoutubemusic } from "react-icons/si";
import { AiFillTwitterCircle } from "react-icons/ai";
import { LiaCopyrightSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="bg-[#081621] pt-12 pb-5">
            <div className="max-w-[1290px] mx-auto px-4 text-center lg:text-start">
                <div className="flex flex-col lg:flex-row gap-6">
                    <div className="lg:w-1/4 mx-auto">
                        <h3 className="text-[12px] lg:text-[14px] font-medium uppercase tracking-[4px] text-white mb-10 ">Support</h3>
                        <a href="#" className="flex items-center border border-[#666666] pl-5 w-[300px] lg:w-[250px] py-2 rounded-full hover:border hover:border-[#ef4a23]">
                            <div className="flex gap-2 items-center">
                                <div className="text-white text-xl">
                                    <BsTelephone />
                                </div>
                                <div className="mx-4 text-left border-l pl-5 border-[#666666]">
                                    <small className="text-[#666]">10AM - 7PM</small> <br />
                                    <span className="text-[#ef4a23] text-lg font-bold">
                                        16793
                                    </span>
                                </div>
                            </div>
                        </a>
                        <a href="#" className="flex items-center border border-[#666666] hover:border hover:border-[#ef4a23] pl-5 py-1 w-[300px] lg:w-[250px] h-[75px] rounded-full my-4">
                            <div className="flex gap-2 items-center">
                                <div className="text-white text-xl">
                                    <FaLocationDot />
                                </div>
                                <div className="mx-4 text-left border-l border-[#666666] pl-5">
                                    <small className="text-[#666]">Store Locator</small> <br />
                                    <span className="text-[#ef4a23] text-lg font-bold ">
                                        Find Our Stores
                                    </span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="lg:w-1/2">
                        <h3 className="text-[12px] lg:text-[14px] font-medium uppercase tracking-[4px] text-white mb-10 ">About us</h3>
                        <ul className="flex flex-wrap gap-6 justify-center lg:justify-start list-disc lg:list-none list-inside text-[#666] lg:flex-none lg:grid lg:grid-cols-2 xl:grid-cols-3 lg:gap-3">
                            <li className="leading-3 lg:leading-[25px]"><Link className="text-[#666] text-[14px] hover:underline hover:text-[#ef4a23]" to="#">EMI Terms</Link></li>
                            <li className="leading-3 lg:leading-[25px]"><Link className="text-[#666] text-[14px] hover:underline hover:text-[#ef4a23]" to="#">Privacy Policy</Link></li>
                            <li className="leading-3 lg:leading-[25px]"><Link className="text-[#666] text-[14px] hover:underline hover:text-[#ef4a23]" to="#">Star Point Policy</Link></li>
                            <li className="leading-3 lg:leading-[25px]"><Link className="text-[#666] text-[14px] hover:underline hover:text-[#ef4a23]" to="#">Brands</Link></li>
                            <li className="leading-3 lg:leading-[25px]"><Link className="text-[#666] text-[14px] hover:underline hover:text-[#ef4a23]" to="#">About Us</Link></li>
                            <li className="leading-3 lg:leading-[25px]"><Link className="text-[#666] text-[14px] hover:underline hover:text-[#ef4a23]" to="#">Terms and Conditions</Link></li>
                            <li className="leading-3 lg:leading-[25px]"><Link className="text-[#666] text-[14px] hover:underline hover:text-[#ef4a23]" to="#">Online Policy</Link></li>
                            <li className="leading-3 lg:leading-[25px]"><Link className="text-[#666] text-[14px] hover:underline hover:text-[#ef4a23]" to="#">Refund and Return Policy</Link></li>
                            <li className="leading-3 lg:leading-[25px]"><Link className="text-[#666] text-[14px] hover:underline hover:text-[#ef4a23]" to="#">Contact Us</Link></li>
                            <li className="leading-3 lg:leading-[25px]"><Link className="text-[#666] text-[14px] hover:underline hover:text-[#ef4a23]" to="#">Brands</Link></li>
                        </ul>
                    </div>
                    <div className="lg:1/4">
                        <h3 className="text-[11px] lg:text-[14px] font-medium uppercase tracking-[4px] mb-10 text-white">Stay Connected</h3>
                        <h3 className="text-[16px] text-white my-4 font-semibold">Star Tech Ltd</h3>
                        <p className="text-[#666] text-[14px] my-3">
                            Head Office: 28 Kazi Nazrul Islam <br />
                            Ave,Navana Zohura Square, Dhaka 1000
                        </p>
                        <p className="text-[14px]">
                            <span className="text-[#666] font-semibold mb-2 block">Email:</span>
                            <span className="text-[#ef4a23] font-[400]">webteam@startechbd.com</span>
                        </p>
                    </div>
                </div>
                <div className="flex justify-between items-center my-4 py-5 border-b border-t border-[#666]">
                    <div>
                        <small className="text-[#666666]">
                            Experience Star Tech App on your mobile
                        </small>
                    </div>
                    <div className="flex text-white gap-2 text-2xl">
                        <a href="#" className="hover:text-[#ef4a23]"><FaFacebook /></a>
                        <a href="#" className="hover:text-[#ef4a23]"><SiYoutubemusic /></a>
                        <a href="#" className="hover:text-[#ef4a23]"><AiFillTwitterCircle /></a>
                    </div>
                </div>
                <div className="flex justify-between my-4">
                    <div className="flex gap-2 text-white">
                        <LiaCopyrightSolid />
                        <small className="mb-4 text-[#666]">
                            Star Tech ltd | All Rights Reserved
                        </small>
                    </div>
                    <small className="text-[#666]">Powered By</small>
                </div>
            </div>
        </div>
    );
};

export default Footer;
