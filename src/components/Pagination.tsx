import { Product } from '../interface/products';

const Pagination = ({ products }: { products: Product[] }) => {

    return (
        <div className='bg-gray-100 py-2 my-5 border border-gray-200'>
            <ul className='list-none p-0 inline-flex gap-2'>
                <li className='cursor-pointer hover:bg-[#EF4A23] py-1 px-3 mr-1 rounded'>
                    <button className='text-[13px] uppercase font-semibold'>
                        Prev
                    </button>
                </li>
                {products.map((item: Product, index: number) => (
                    <li className={`cursor-pointer hover:bg-[#EF4A23] py-1 px-3 rounded ${index === 0 ? 'bg-[#EF4A23]' : ''}`} key={index}>
                        <a href="" className='text-[13px]'>{index + 1}</a>
                    </li>
                ))}
                <li className='cursor-pointer hover:bg-[#EF4A23] py-1 px-3 mr-1 rounded'>
                    <button className='text-[12px] uppercase font-semibold'>
                        Next
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Pagination;
