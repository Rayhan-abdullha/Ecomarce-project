import { IoCloseOutline } from "react-icons/io5";
import { RxUpdate } from "react-icons/rx";
import { Link } from "react-router-dom";

const Cart = () => {
return (
<div className="max-w-[1290px] mx-auto px-4">
    <div className="bg-white p-4 shadow-md rounded-md">
        <h1 className="text-2xl font-medium mb-5">Shopping Cart</h1>
        <div className="overflow-x-auto">
            <table className="w-full">
                <thead>
                    <tr>
                        <th
                            className="py-3 px-4 font-medium text-gray-600 text-sm bg-gray-100 text-left hidden lg:table-cell">
                            Image</th>
                        <th className="py-3 px-4 font-medium text-gray-600 text-sm bg-gray-100 text-left">Product Name
                        </th>
                        <th
                            className="py-3 px-4 font-medium text-gray-600 text-sm bg-gray-100 text-left hidden lg:table-cell">
                            Model</th>
                        <th className="py-3 px-4 font-medium text-gray-600 text-sm bg-gray-100 text-left">Quantity</th>
                        <th
                            className="py-3 px-4 font-medium text-gray-600 text-sm bg-gray-100 text-left hidden lg:table-cell">
                            Unit Price</th>
                        <th className="py-3 px-4 font-medium text-gray-600 text-sm bg-gray-100 text-left">Total</th>
                    </tr>
                </thead>
                <tbody className="mt-5 border-b border-gray-200 pb-4">
                    <tr >
                        <td className="py-4 px-4 hidden lg:table-cell">
                            <a href="https://www.startech.com.bd/xpert-star-bluetooth-calling-smart-watch">
                                <img src="https://www.startech.com.bd/image/cache/catalog/smart-watch/xpert/star/star-02-47x47.webp"
                                    alt="Xpert Star Bluetooth Calling Smart Watch"
                                    title="Xpert Star Bluetooth Calling Smart Watch" />
                            </a>
                        </td>
                        <td className="py-4 px-4">
                            <Link to="/" className="hover:underline block">
                            Xpert Star Bluetooth Calling Smart Watch
                            </Link>
                            <small>Reward Points: 220</small>
                        </td>
                        <td className="py-4 px-4 hidden lg:table-cell">
                            Star
                        </td>
                        <td className="py-4 px-4">
                            <div className="flex items-center gap-3 w-[130px]">
                                <input type="text" className="px-3 py-2 w-[80px] outline-0 border border-gray-300 round"
                                    value={1} />
                                <button className="text-[#666]">
                                    <RxUpdate className="text-[18px]" />
                                </button>
                                <button className="text-[#666]">
                                    <IoCloseOutline className="text-[22px]" />
                                </button>
                            </div>
                        </td>
                        <td className="py-4 px-4 hidden lg:table-cell">2,290৳</td>
                        <td className="py-4 px-4">2,290৳</td>
                    </tr>
                </tbody>
            </table>

                <tbody className="float-right mt-10 w-[250px]">
                    <tr className="w-full flex justify-between border-b border-gray-200 pb-3">
                        <td className="text-[18px]"><strong className="font-medium">Sub-Total:</strong></td>
                        <td className="text-[#ef4a23] wor text-[20px] font-semibold">2,290<span className="font-extrabold text-[17px]">৳</span></td>
                    </tr>
                    <tr className="w-full flex justify-between mt-3 border-b border-gray-200 pb-3">
                        <td className="text-[18px] text-end"><strong className="font-medium">Total:</strong></td>
                        <td className="text-[#ef4a23] text-[20px] font-semibold">2,290<span className="font-extrabold text-[17px]">৳</span></td>
                    </tr>
                </tbody>
        </div>

        <div className="mt-12">
            <h2 className="text-[18px] md:text-[20px] font-semibold">What would you like to do next?</h2>
            <p className="mt-2 text-[14px] md:text-[16px]">Choose if you have a discount code or reward points you want
                to use or would like to estimate your delivery cost.</p>
            <div className="mt-4 p-5 bg-[#f5f7f9] flex gap-10 flex-col md:flex-row">
                <div className="flex items-center w-full md:w-1/2">
                    <input type="text" name="coupon" placeholder="Promo / Coupon Code"
                        className=" w-full border border-gray-300 outline-0 px-3 py-2 mr-2 rounded-md" />
                    <button
                        className="min-w-[140px] hover:bg-[#3749bb] hover:text-white font-medium border border-[#3749bb] py-2 px-4 rounded-md text-[#3749bb] transition-colors duration-300">Apply
                        Coupon</button>
                </div>
                <div className="flex items-center w-full md:w-1/2">
                    <input type="text" name="coupon" placeholder="Promo / Coupon Code"
                        className="w-full border border-gray-300 outline-0 px-3 py-2 mr-2 rounded-md" />
                    <button
                        className="min-w-[144px] hover:bg-[#3749bb] hover:text-white font-medium border-2 border-[#3749bb] py-2 px-4 rounded-md text-[#3749bb] transition-colors duration-300">Apply
                        Voucher</button>
                </div>
            </div>
            <div className="flex flex-col gap-5 sm:flex-row sm:justify-between my-10">
                <button
                    className="min-w-[140px] bg-[#3749bb] text-white font-medium border border-[#3749bb] py-2 px-4 rounded-md">Continue
                    Shopping</button>
                <button
                    className="min-w-[140px] bg-[#3749bb] text-white font-medium border border-[#3749bb] py-2 px-4 rounded-md">Confirm
                    Order</button>
            </div>
        </div>
    </div>
</div>
)
}

export default Cart;