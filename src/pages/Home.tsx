import { useSelector } from "react-redux"
import { Product } from "../interface/products"
import { RootState } from "../redux/store"
import ProductList from "../components/products/ProductItem"

const Home = () => {
    const products = useSelector((state: RootState) => state.products.products)
    return (
        <div className="max-w-[1290px] mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 mt-3">
                {
                    products?.map((item: Product) => (
                        <ProductList key={item.id} item={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default Home