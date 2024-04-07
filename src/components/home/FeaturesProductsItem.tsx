import { Link } from "react-router-dom"
import { Product } from "../../interface/products"

const FeaturesProductsItem = ({ item }: { item: Product }) => {
    return (
        <div className="shadow-sm hover:shadow-md cursor-pointer relative ">
            <div className="marks absolute top-3 left-0 bg-[#6e2594] rounded-r-full text-white">
                <span className="mark text-[13px] px-2 py-0">Earn Point: 100</span>
            </div>
            <div className="bg-white p-4 rounded-md">
                <img className="mb-3 m-auto" src={item.images[0].url} alt="notfond"/>
            </div>
            <div className="p-5 bg-white mt-[2px] rounded-md h-[180px]">
                <Link className="text-[16px] mb-6 block cursor-pointer hover:underline hover:text-[#ef4a23]" to={`/categories/${item.category.name}/${item.id}`}>{item.name}</Link>
                <div className="w-full flex flex-col gap-3 absolute bottom-4">
                    <div>
                        <span className="text-[#ef4a23] text-[18px] font-semibold">{item.price.current}<strong className="text-[12px]">৳</strong></span>
                        {
                            item?.price?.regular && <del className="ml-5 text-[14px] font-semibold text-[#666]">{item.price.regular}<strong className="text-[20px] font-semibold">৳</strong></del>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturesProductsItem