import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Product } from "../../interface/products";
import { removeItem } from "../../redux/features/cart/cartSlice";
import { Link } from "react-router-dom";

interface PropsType {
    openDrawer: boolean;
    setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}

interface AccTypes {
    [key: string]: { item: Product; count: number } 
}
const CartDrawer = ({ openDrawer, setOpenDrawer }: PropsType) => {
    const [cartPd, setCartPd] = useState<{ item: Product; count: number }[]>([]);
    const cartList = useSelector((state: RootState) => state.cart.cartList);
    const cartProducts = useSelector((state: RootState) => state.products.products);
    const dispatch = useDispatch()

    // remeove cartlist
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

    return (
        <div className={`bg-white shadow-xl fixed top-0 right-[${openDrawer ? '0' : '-120%'}] bottom-0 z-[999] w-full sm:w-[400px] transition-all duration-300`}>
            <div className="flex items-center justify-between gap-5 bg-black text-white px-5 py-3">
                <h1 className="uppercase font-semibold">Your Cart</h1>
                <svg onClick={() => setOpenDrawer(false)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x hover:transform hover:scale-125 cursor-pointer"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </div>
            {cartList.length ? <>
            <div className="flex flex-col gap-5">
                {
                    cartPd.map(({ item, count }, index) => (
                        <div key={index} className="flex gap-2 justify-between items-center p-3 border-b border-[#d6d6d6]">
                            <img className="w-[50px]" src={item.images[0].url} alt={item.name} />
                            <div>
                                <Link to={`/categories/${item.category.name}/${item.id}`} className="text-[15px] hover:underline hover:text-[#ef4a23]">{item.name}</Link>
                                <div className="flex mt-3 items-center gap-2">
                                    <span className="amount font-bold text-[16px]">{item.price.current}<span className="text-[15px] font-extrabold leading-0">৳</span></span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x w-[15px] h-[15px] text-[#8f8f8f]"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                    <span className="font-medium w-[16px]">{count}</span>
                                    <span className="translate-x-[-5px]">{"="}</span>
                                    <span className="total font-bold text-[16px]">{item.price.current * count}<span className="text-[15px] font-extrabold">৳</span></span>
                                </div>
                            </div>
                            <div onClick={() => handleCartRemove(item.id)} className="cursor-pointer">
                                <MdDelete />
                            </div>
                        </div>
                    ))
                  }
            </div>
            <div className="cart-footer absolute bottom-0 left-0 right-0">
                <div className="flex bg-[rgba(55,73,187,.05)] p-5 items-center gap-2">
                    <input className="bg-white p-2 w-[75%] h-[36px] outline-0 placeholder-gray-500 text-[14px]" type="text" placeholder="Promo Code" />
                    <button className="p-3 bg-[#3749bb] w-[25%] h-[38px] rounded-md text-white leading-[0] font-medium" type="submit">Apply</button>
                </div>
                <div className="total flex items-center p-3 border-b border-[#dcdcdc] justify-end">
                    <div className="title text-[#666] mr-[100px]">Sub-Total</div>
                    <div className="amount font-bold text-[18px]">
                        {subtotal}<span className="text-[16px] font-extrabold">৳</span>
                    </div>
                </div>
                <div className="total flex items-center justify-end p-3">
                    <div className="title text-[#666] mr-[110px]">Total</div>
                    <div className="amount font-bold text-[18px]">
                        {total}<span className="text-[16px] font-extrabold">৳</span>
                    </div>
                </div>
                <div className="checkout-btn bg-[#ef4a23] hover:bg-[#BF3B1C] text-center font-semibold text-white cursor-pointer transition-colors duration-500">
                    <button className="p-2 text-[15px]">Checkout</button>
                </div>
            </div></> : <p className="text-center pt-10">Your shopping cart is empty!</p> }
        </div>
    );
};

export default CartDrawer;
