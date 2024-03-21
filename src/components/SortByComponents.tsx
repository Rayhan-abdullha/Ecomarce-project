import sortLabel from '../db/sortLabel.json'
import { CheckState } from '../interface';
import { Product } from '../interface/products';
type PropsType = {
    products: Product[],
    setShowFilter: React.Dispatch<React.SetStateAction<boolean>>,
    dispatchProduct: React.Dispatch<React.SetStateAction<Product[]>>,
    setChecke: React.Dispatch<React.SetStateAction<CheckState>>,
    check: CheckState
}

const SortByComponents = ({ products, dispatchProduct, setShowFilter, setChecke, check }: PropsType) => {
    const handleSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const sortOrder = event.target.value;
        let sorted = [...products];

        if (sortOrder === 'low to high') {
            sorted = sorted.sort((a, b) => a.price.current - b.price.current);
        } else if (sortOrder === 'high to low') {
            sorted = sorted.sort((a, b) => b.price.current - a.price.current);
        }

        dispatchProduct(sorted);
    };

    const handleShow = () => {
        setShowFilter((prev: boolean) => !prev)
    }
    return (
        <div className="flex justify-between items-center bg-white p-2">
            <h3 className="text-[14px] font-semibold hidden md:block">Gaming PC</h3>
            <div onClick={handleShow} className="md:hidden flex items-center cursor-pointer bg-gray-200 p-1 rounded-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-align-center"><line x1="18" y1="10" x2="6" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="18" y1="18" x2="6" y2="18"></line></svg>
                <span>Filter</span>
            </div>
            <div className="flex items-center">
                <span className="text-[12px]">Show:</span>
                <select className="ml-2 border p-1 text-[11px]">
                    <option>{products.length}</option>
                    {
                        sortLabel.show.options.map((item: string, index) => <option key={index} value={item}>{item}</option>)
                    }
                </select>
                <span className="ml-4 text-[12px]">Sort By:</span>
                <select onChange={handleSort} className="ml-2 border p-1 text-[11px] capitalize">
                    {
                        sortLabel.sortBy.options.map((item: string, index) => <option key={index} value={item}>{item}</option>)
                    }
                </select>
            </div>
        </div>
    );
};

export default SortByComponents