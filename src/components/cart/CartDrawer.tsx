import React, { useEffect, useState } from "react"
import { MdDelete } from "react-icons/md"
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import { Product } from "../../interface/products"

interface PropsType {
    openDrawer: boolean,
    setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>
}
const CartDrawer = ({ openDrawer, setOpenDrawer }: PropsType) => {
    const [cartPd, setCartPd] = useState<Product[]>([])
    const cartList = useSelector((state: RootState) => state.cart.cartList)
    const cartProdcuts = useSelector((state: RootState) => state.products.products)

    useEffect(() => {
        if (cartList.length) {
            const res:Product[] = []
            for (const id of cartList) {
                cartProdcuts.map(item => {
                    if (item.id === id) {
                        res.push(item)
                    }
                })
            }
            setCartPd(res)
        }
    }, [cartList])

    return (
        <div className={`bg-white shadow-xl fixed top-0 ${openDrawer ? 'right-[0]' : 'right-[-120%]'} bottom-0 z-[999] w-full sm:w-[400px] transition-all duration-300`}>
            <div className="flex items-center justify-between gap-5 bg-black text-white px-5 py-3">
                <h1 className="uppercase font-semibold">Your Cart</h1>
                <svg onClick={() => setOpenDrawer(false)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x hover:transform hover:scale-125 cursor-pointer"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </div>
            <div className="flex flex-col gap-5">
                {
                    cartList.length !== 0 ? cartPd.map((item: Product) => (
                        <div className="flex gap-2 justify-between items-center p-3 border-b border-[#d6d6d6]">
                        <img className="w-[50px]" src={item.images[0].url} alt="notfound" />
                        <div>
                                <h3 className="text-[15px]">{ item.name}</h3>
                            <div className="flex mt-3 items-center gap-2">
                                    <span className="amount font-bold text-[16px]">{ item.price.current}<span className="text-[15px] font-extrabold leading-0">৳</span></span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x w-[15px] h-[15px] text-[#8f8f8f]"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                <span className="font-medium w-[16px]">1</span>
                                <span className="translate-x-[-5px]">{"="}</span>
                                    <span className="total font-bold text-[16px]">{item.price.regular}<span className="text-[15px] font-extrabold">৳</span></span>
                            </div>
                        </div>
                        <div className="cursor-pointer">
                            <MdDelete />
                        </div>
                    </div>
                    )) : <p className="text-center mt-10 font-medium">Your shopping cart is Empty!</p>
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
                        2,290<span className="text-[16px] font-extrabold">৳</span>
                    </div>
                </div>
                <div className="total flex items-center justify-end p-3">
                    <div className="title text-[#666] mr-[110px]">Total</div>
                    <div className="amount font-bold text-[18px]">
                        2,290<span className="text-[16px] font-extrabold">৳</span>
                    </div>
                </div>
                <div className="checkout-btn bg-[#ef4a23] hover:bg-[#BF3B1C] text-center font-semibold text-white cursor-pointer transition-colors duration-500">
                    <button className="p-2 text-[15px]">Checkout</button>
                </div>
            </div>
        </div>
    )
}

export default CartDrawer