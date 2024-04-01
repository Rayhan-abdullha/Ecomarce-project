/* eslint-disable no-sparse-arrays */
import { useEffect, useState } from "react"
import FilterByComponents from "../components/products/FilterByComponents"
import ProductList from "../components/products/ProductItem"
import TopBar from "../components/products/TopBar"
import Pagination from "../components/products/Pagination"
import CategoryDescription from "../components/products/CategoryDiscription"
import { Product } from "../interface/products"
import { filterPropertyType } from "../interface"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store"
import AfterHeader from "../components/header/AfterHeader"
import { useParams } from "react-router-dom"
const ProductPage = () => {
    const [showFilter, setShowFilter] = useState<boolean>(false)
    const [innerWidth, setinnerWidth] = useState<number>(1024)

    const products = useSelector((state: RootState) => state.products.products)
    const cat = useParams()

    // will be filter name, category, subcategory, and price
    const [filterProperty, setFilterProperty] = useState<filterPropertyType>({
        price: {
            from: 0,
            to: 50000
        }

    });

    // filter funtionality
    const filterProducts = (filterProperty: filterPropertyType) => {

        const filterPd = products.filter((product: Product) => {
            if (cat.category?.toLowerCase() === product.category.name.toLowerCase()) {
                // pd filter by price
                const from = (filterProperty['price'].from as number)
                const to = (filterProperty['price'].to as number)
                if (product.price.current >= from && product.price.current <= to) {
                    return product
                }
            }

        })
        return filterPd
    };
    const filteredProducts = filterProducts(filterProperty);
    function handleClose() {
        setShowFilter(false)
    }

    function handleRangePrice(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setFilterProperty({
            ...filterProperty,
            price: {
                ...filterProperty.price,
                [name]: parseInt(value)
            }
        })
    }
    useEffect(() => {
        if (showFilter && innerWidth <= 1024) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
        function handleResize() {
            setinnerWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [innerWidth, showFilter]);

    return (
        <>
            <AfterHeader />
            <div className={`overlay ${showFilter && innerWidth <= 1024 ? 'block' : 'hidden'}`}></div>
            <div className="max-w-[1290px] mx-auto mt-5 px-4">
                <div className="flex gap-3">
                    <div className={`filter-by-components w-2/3 md:w-[40%] lg:w-[25%] fixed top-0 ${showFilter && innerWidth <= 1024 ? 'right-0' : 'right-[-150%]'} lg:static bg-slate-100 z-[999] lg:z-0 h-full overflow-auto transition-right duration-300 ease-in-out`}>
                        <div className={`close bg-white flex justify-end ${showFilter && innerWidth <= 1024 ? 'block' : 'hidden'}`}>
                            <svg onClick={handleClose} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x hover:transform hover:scale-125 cursor-pointer m-4"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </div>
                        <div className="bg-white p-4 mb-2">
                            <h2 className="font-semibold mb-2">Price Range</h2>
                            <div className="relative">
                                <input onChange={handleRangePrice} name="from" type="range" min="0" max="50000" value={filterProperty.price.from?.toString()} className="w-full mb-2" />
                                <input onChange={handleRangePrice} name="to" type="range" min="0" max="50000" value={filterProperty.price.to?.toString()} className="right-0 w-full mb-4" />
                            </div>

                            <div className="flex justify-between gap-2">
                                <label>
                                    <input readOnly className="w-full p-1 outline-none border text-center border-gray-300" type="text" value={filterProperty.price.from?.toString()} />
                                </label>
                                <label >
                                    <input readOnly className="w-full p-1 outline-none border text-center border-gray-300" type="text" value={filterProperty.price.to?.toString()} />
                                </label>
                            </div>
                        </div>
                        <FilterByComponents setChecke={setFilterProperty} check={filterProperty} />
                    </div>
                    <div className="product-list w-full">
                        <TopBar setShowFilter={setShowFilter} />
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 mt-3">
                            {
                                filteredProducts?.map((item: Product) => (
                                    <ProductList key={item.id} item={item} />
                                ))
                            }
                            {
                                filteredProducts.length === 0 && <div className="py-20 text-center text-[22px] text-[#ef4a23]">No Products Found</div>
                            }
                        </div>
                        <Pagination products={filteredProducts} />
                        <CategoryDescription />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductPage