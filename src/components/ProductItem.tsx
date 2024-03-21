import { Product } from "../interface/products"
interface PropTypes {
    item: Product
}
const ProductList = ({ item }: PropTypes) => {
    return (
        <div className="bg-white single-product py-2 px-6 rounded-md">
            <img src="https://www.startech.com.bd/image/cache/catalog/star-pc/intel/10th-gen-i5-10400f-02-228x228.webp" alt="Gaming Desktop PC with various components" className="mb-3" />
            <h2 className="font-semibold text-sm mb-5 cursor-pointer hover:underline">{item.name}</h2>
            <ul className="text-gray-600 text-sm mb-[40px] list-disc flex flex-col gap-2">
                {
                    item.description.map((desc: string, index: number) => (
                        <li className="text-[11px]" key={index}>{desc}</li>
                    ))
                }
            </ul>
            <div className="w-full flex flex-col gap-3 border-t border-gray-200 pt-[10px] text-center">
                <span className="text-red-500 text-md font-semibold">{item.price.current}<strong className="text-[12px]">৳</strong></span>
                <button className="flex gap-2 justify-center bg-[rgba(55,73,187,.05)] text-[#3749bb] px-4 py-2 rounded text-[11px] font-semibold hover:bg-[#3749bb] hover:text-white hover:svg-white">
                    <svg className="text-[#3749bb] hover:text-white feather feather-shopping-cart" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                    Buy Now
                </button>

                <button className="text-gray-600 text-[11px] flex gap-2 justify-center hover:bg-[rgba(55,73,187,.05)] rounded-sm p-1 feather feather-plus-square">
                    <svg className="add-to-compare" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                    Add to Compare</button>
            </div>
        </div>
    )
}

export default ProductList