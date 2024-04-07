import { useState } from "react"
import { BsBagPlus } from "react-icons/bs"
import CartDrawer from "./CartDrawer"
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"
const CartIcon = () => {
    const [openDrawer, setOpenDrawer] = useState<boolean>(false)
    const cartList = useSelector((state: RootState) => state.cart.cartList)
    return (
        <>
        <div onClick={() => setOpenDrawer(true)} className="fixed top-[-2px] right-2 lg:bottom-5 lg:right-5 lg:top-[92%] cursor-pointer z-[999]">
            <div className="lg:bg-[#081621] lg:border lg:border-[#666666] w-[60px] h-[60px] lg:hover:bg-[#3749BB] 500 rounded-md flex justify-center items-center">
                <BsBagPlus className="text-white w-[40%] h-[40%]" />
            </div>
            <div className="absolute top-[7px] right-[7px] lg:top-[-5px] lg:right-[-5px] bg-red-500 w-5 h-5 rounded-ful flex justify-center items-center rounded-full">
                    <p className="text-white">{cartList.length}</p>
            </div>
        </div>
            <CartDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
        </>

    )
}
export default CartIcon

