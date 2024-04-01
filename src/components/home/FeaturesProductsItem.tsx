import { Link } from "react-router-dom"
import { Product } from "../../interface/products"

const FeaturesProductsItem = ({ item }: { item: Product }) => {
    return (
        <div className="shadow-sm hover:shadow-md cursor-pointer">
            <div className="bg-white p-4 rounded-md">
                <img src="https://www.startech.com.bd/image/cache/catalog/star-pc/intel/10th-gen-i5-10400f-02-228x228.webp" alt="Gaming Desktop PC with various components" className="mb-3 m-auto" />
            </div>
            <div className="p-5 bg-white mt-[2px] rounded-md">
                <Link className="text-[16px] mb-6 block cursor-pointer hover:underline hover:text-[#ef4a23]" to={`/categories/${item.category.name}/${item.id}`}>{item.name}</Link>
                <div className="w-full flex flex-col gap-3">
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