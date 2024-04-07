import { IoMdClose } from "react-icons/io"
import { MdDone } from "react-icons/md"
import { Link, useNavigate } from "react-router-dom"
import { Product } from "../../interface/products"
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"
type PropsType = {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
  item: Product | {id: string, name: string}
}
const ByMessageModal = ({ setOpenModal, item }: PropsType) => {
  const cart = useSelector((state: RootState) => state.cart)
  const navigate = useNavigate()
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="fixed inset-0 bg-black opacity-70"></div>
            <div className="bg-white pl-14 pt-10 pb-8 pr-7 max-w-2xl w-full z-10 mx-4 relative">
            <button onClick={() => setOpenModal(false)} className="text-gray-600 hover:text-gray-800 absolute top-2 right-2 hover:scale-[1.5] transition-transform duration-300">
              <IoMdClose className="w-6 h-6"/>
          </button>
          
          <MdDone className="absolute top-10 left-5 text-white font-bold block bg-green-500 w-5 h-5 rounded-full"/>
          <div className="flex flex-col sm:flex-row sm:justify-between gap-5">
            <p className="w-full sm:w-[65%]">You have added <Link className="text-[#ef4a23] hover:underline" to={`/categories/${item.id}`}>{item.name}</Link> to your shopping cart!</p>
            <div className="w-full sm:w-[35%] border border-gray-200 px-3 py-2">
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <p>Quantity:</p>
                <span className="font-semibold text-[16px]">{cart.cartList.length}</span>
              </div>
              <div className="flex justify-between pt-2">
                <p>Total:</p>
                <span className="font-semibold text-[16px]">{cart.totalAmount}</span>
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 md:gap-5">
            <button onClick={() => navigate('/cart')} className="min-w-[140px] bg-[#3749bb] text-white font-medium border border-[#3749bb] py-2 px-4 rounded-md">View Cart</button>
            <button className="min-w-[140px] hover:bg-[#3749bb] hover:text-white font-medium border-2 border-[#3749bb] py-2 px-4 rounded-md">Confirm Order</button>
          </div>
          </div>
        </div>
    )
}
export default ByMessageModal