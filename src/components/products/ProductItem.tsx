import { Link } from "react-router-dom"
import { Product } from "../../interface/products"
import ByMessageModal from '../cart/BuyMsgModal'
import { useState } from "react"
interface PropTypes {
    item: Product
}
const ProductItem = ({ item }: PropTypes) => {
    const [open,setOpen] = useState<boolean>(false)
    const openModal = () => {
        setOpen(true)
    }
    return (
        <>
            <div className="single-product rounded-md">
                <div className="p-4 bg-white mb-[2px]">
                    <img src={item.images[0].url} alt="Gaming Desktop PC with various components" className="mb-3 m-auto" />
                </div>
                <div className="px-8 py-5 bg-white shadow-sm">
                    <div>
                        <Link className="font-semibold text-[15px] mb-6 block cursor-pointer hover:underline hover:text-[#ef4a23]" to={`/categories/${item.category.name}/${item.id}`}>{item.name}</Link>
                        <ul className="text-gray-600 text-sm mb-[40px] list-disc flex flex-col gap-2">
                            {
                                item.description?.map((desc: string, index: number) => (
                                    <li className="text-[13px]" key={index}>{desc}</li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="w-full flex flex-col gap-3 border-t border-gray-200 pt-[10px] text-center">
                        <div>
                            <span className="text-red-500 text-[18px] font-semibold">{item.price.current}<strong className="text-[12px]">৳</strong></span>
                            {
                                item?.price?.regular && <del className="ml-5 text-[14px] font-semibold text-[#666]">{item.price.regular}<strong className="text-[20px] font-semibold">৳</strong></del>
                            }
                        </div>
                        <button onClick={openModal} className="flex gap-2 justify-center bg-gray-100 text-[#3749BB] px-4 py-2 rounded text-sm font-bold hover:bg-[#3749BB] hover:text-white">
                            <svg className="feather feather-shopping-cart mt-[2px]" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="9" cy="21" r="1"></circle>
                                <circle cx="20" cy="21" r="1"></circle>
                                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                            </svg>
                            Buy Now
                        </button>

                        <button className="text-gray-600 text-[13px] flex gap-2 justify-center hover:bg-[rgba(55,73,187,.05)] rounded-sm p-1 feather feather-plus-square">
                            <svg className="add-to-compare" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                            Add to Compare</button>
                    </div>
                </div>
            </div>
            {
                open && <ByMessageModal setOpenModal={setOpen}/>
            }
        </>
    )
}

export default ProductItem