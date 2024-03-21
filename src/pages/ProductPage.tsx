/* eslint-disable no-sparse-arrays */
import { useEffect, useState } from "react"
import FilterByComponents from "../components/FilterByComponents"
import ProductList from "../components/ProductItem"
import SortByComponents from "../components/SortByComponents"
import pd from '../db/product.json'
import priceRange from '../db/priceRange.json'
import Pagination from "../components/Pagination"
import CategoryDescription from "../components/CategoryDiscription"
import { Product } from "../interface/products"
import { CheckState } from "../interface"

const ProductPage = () => {
    const [showFilter, setShowFilter] = useState<boolean>(false)
    const [innerWidth, setinnerWidth] = useState<number>(768)
    const [products, setProducts] = useState<Product[]>(pd)
    const [priceFrom, setPriceFrom] = useState<number>(0)
    const [checke, setChecke] = useState<CheckState>({});

    const filterProducts = () => {
        if (!Object.keys(checke).length) return products;
        return products.filter(product => {
            if (`${product.brand.name}` in checke['brand']) {
                console.log(`${product.brand.name}`, checke['brand']);

                return product;
            }

        });
    };

    const filteredProducts = filterProducts();
    function handleClose() {
        setShowFilter(false)
    }

    function handlePriceRange(e: React.ChangeEvent<HTMLInputElement>) {
        setPriceFrom(parseInt(e.target.value))
    }

    useEffect(() => {
        const handleResize = () => {
            setinnerWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    console.log(checke)
    return (
        <>
            <div className={`overlay ${showFilter && innerWidth <= 768 ? 'block' : 'hidden'}`}></div>
            <div className="container mx-auto mt-5 px-3">
                <div className="flex gap-3">
                    <div className={`filter-by-components fixed top-0 ${showFilter && innerWidth <= 768 ? 'right-0' : 'right-[-130%]'} md:static bg-slate-100 z-[999] md:z-0 h-full overflow-auto transition-right duration-300 ease-in-out`}>
                        <div className={`close bg-white flex justify-end ${showFilter && innerWidth <= 768 ? 'block' : 'hidden'}`}>
                            <svg onClick={handleClose} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x hover:transform hover:scale-125 cursor-pointer m-4"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </div>
                        <div className="bg-white p-4 mb-2">
                            <h2 className="font-semibold mb-2">{priceRange.label}</h2>
                            <input onChange={handlePriceRange} type="range" min="0" max="100" value={priceFrom} className="w-full mb-4" />
                            <div className="flex justify-between gap-2">
                                <label>
                                    <input readOnly className="w-full p-1 outline-none border border-gray-300" type="text" value={priceFrom} />
                                </label>
                                <label >
                                    <input readOnly className="w-full p-1 outline-none border border-gray-300" type="text" value={priceFrom} />
                                </label>
                            </div>
                        </div>
                        <FilterByComponents setChecke={setChecke} check={checke} />
                    </div>
                    <div className="product-list">
                        <SortByComponents products={products} dispatchProduct={setProducts}
                            setShowFilter={setShowFilter}
                        />
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-2 gap-2">
                            {
                                filteredProducts?.map((item: Product) => (
                                    <ProductList key={item.id} item={item} />
                                ))
                            }
                        </div>
                        <Pagination />
                        <CategoryDescription />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductPage