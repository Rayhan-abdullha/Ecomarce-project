import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import { Category } from "../../interface/categories"
import CategoryItem from "./CategoryItem"
const FeaturedCategory = () => {
    const categories = useSelector((state: RootState) => state.categoriesList.catItems)
    return (
        <div className="pt-[60px]">
            <section className="text-center mb-7">
                <h3 className="text-[20px] font-semibold">Featured Category</h3>
                <p className="mt-2">Get Your Desired Product from Featured Category!</p>
            </section>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-8 gap-3 mt-3">
                {
                    categories?.map((item: Category) => (
                        <CategoryItem key={item.id} cat={item.cat} />
                    ))
                }
            </div>
        </div>
    )
}

export default FeaturedCategory