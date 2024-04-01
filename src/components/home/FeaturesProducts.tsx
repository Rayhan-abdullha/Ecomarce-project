import { useSelector } from "react-redux"
import { Product } from "../../interface/products"
import FeaturesProductsItem from "./FeaturesProductsItem"
import { RootState } from "../../redux/store"

function FeaturesProducts() {
    const products = useSelector((state: RootState) => state.products.products)
    return (
        <div className="pt-[60px]">
            <section className="text-center mb-7">
                <h3 className="text-[20px] font-semibold">Featured Products</h3>
                <p className="mt-2">Check & Get Your Desired Product!</p>
            </section>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 mt-3">
                {
                    products?.map((item: Product) => (
                        <FeaturesProductsItem key={item.id} item={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default FeaturesProducts