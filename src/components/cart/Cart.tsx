import { IoCloseOutline } from "react-icons/io5";
import { RxUpdate } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useScrollToTop } from "../../lib/scrollTop";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Product } from "../../interface/products";
import { removeItem } from "../../redux/features/cart/cartSlice";
import emptyCart from '../../assets/empty-cart.svg'
interface AccTypes {
    [key: string]: { item: Product; count: number } 
}
const Cart = () => {
    const [cartPd, setCartPd] = useState<{ item: Product; count: number }[]>([]);
    const cartList = useSelector((state: RootState) => state.cart.cartList);
    const cartProducts = useSelector((state: RootState) => state.products.products);
    const dispatch = useDispatch()
    function handleCartRemove(id: string) {
        dispatch(removeItem(id))
    }
    useEffect(() => {
        if (cartList.length) {
            const groupedItems = cartList.reduce((acc: AccTypes, id) => {
                if (acc[id as string]) {
                    acc[id as string].count++;
                } else {
                    acc[id as string] = { item: cartProducts.find(item => item.id === id)!, count: 1 };
                }
                return acc;
            }, {});

            const res = Object.values(groupedItems).map(({ item, count }) => ({ item, count }));
            setCartPd(res);
        }
    }, [cartList, cartProducts]);

   // Calculate subtotal and total
   const subtotal = cartPd.reduce((acc, { item, count }) => acc + item.price.current * count, 0);
    const total = subtotal;
    
    useScrollToTop()
    return (
        <div className="max-w-[1290px] mx-auto px-4">
            {
                cartList.length ? <div className="bg-white p-4 shadow-md rounded-md">
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
                            {
                                cartPd.map((item: {item: Product, count: number}) => (
                                    <tbody key={item.item.id} className="mt-5 border-b border-gray-200 pb-4">
                                        <tr >
                                            <td className="py-4 px-4 hidden lg:table-cell">
                                                <a href="https://www.startech.com.bd/xpert-star-bluetooth-calling-smart-watch">
                                                    <img src={item.item.images[0].url}
                                                        className="w-[50px]"
                                                        alt="Xpert Star Bluetooth Calling Smart Watch"
                                                        title="Xpert Star Bluetooth Calling Smart Watch" />
                                                </a>
                                            </td>
                                            <td className="py-4 px-4">
                                                <Link to={`/categories/${item.item.category.name}/${item.item.id}`} className="hover:underline block hover:text-[#ef4a23]">
                                                {item.item.name}
                                                </Link>
                                                <small>Reward Points: 220</small>
                                            </td>
                                            <td className="py-4 px-4 hidden lg:table-cell">
                                                {item.item.model.name}
                                            </td>
                                            <td className="py-4 px-4">
                                                <div className="flex items-center gap-3 w-[130px]">
                                                    <input readOnly type="text" className="px-3 py-2 w-[80px] outline-0 border border-gray-300 round"
                                                        value={item.count} />
                                                    <button className="text-[#666]">
                                                        <RxUpdate className="text-[18px]" />
                                                    </button>
                                                    <button onClick={() => handleCartRemove(item.item.id)} className="text-[#666] hover:text-[#ef4a23] hover:scale-[1.2] transition-all duration-300">
                                                        <IoCloseOutline className="text-[22px]" />
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="py-4 px-4 hidden lg:table-cell">{item.item.price.current}<span className="font-extrabold text-[13px]">৳</span></td>
                                            <td className="py-4 px-4">{item.item.price.current * item.count}<span className="font-extrabold text-[13px]">৳</span></td>
                                        </tr>
                                    </tbody>
                                ))
                        }
                    </table>
                    <table className="float-right mt-10 w-[250px]">
                    <tbody>
                        <tr className="w-full flex justify-between border-b border-gray-200 pb-3">
                            <td className="text-[18px]"><strong className="font-medium">Sub-Total:</strong></td>
                            <td className="text-[#ef4a23] wor text-[20px] font-semibold">{subtotal}<span className="font-extrabold text-[17px]">৳</span></td>
                        </tr>
                        <tr className="w-full flex justify-between mt-3 border-b border-gray-200 pb-3">
                            <td className="text-[18px] text-end"><strong className="font-medium">Total:</strong></td>
                            <td className="text-[#ef4a23] text-[20px] font-semibold">{total}<span className="font-extrabold text-[17px]">৳</span></td>
                        </tr>
                    </tbody>
                    </table>
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
                </div> : <div className="w-[300px] mx-auto py-16">
                    <img className="w-full"  src={emptyCart} alt="ops notfound" />
                </div>        
            }
        </div>
    )
}
export default Cart;