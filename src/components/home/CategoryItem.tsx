import { Link } from "react-router-dom"

const CategoryItem = ({ cat }: { cat: string }) => {
    return (
        <div className="shadow-sm hover:shadow-md cursor-pointer bg-white text-center">
            <div className="p-5">
                <img src="https://www.startech.com.bd/image/cache/catalog/category-thumb/laptop-48x48.png" alt="notfound" className="mb-3 m-auto" />
                <h3 className="hover:tex-[#ef4a23] mb-3">
                    <Link className="font-semibold capitalize text-[16px]" to={`/categories/${cat}`}>{cat}</Link>
                </h3>
            </div>
        </div>
    )
}

export default CategoryItem