import { Product } from '../../interface/products';

const Pagination = ({ products }: { products: Product[] }) => {

    return (
        <div className='bg-gray-100 py-3 my-5 border border-gray-200'>
            <ul className='list-none p-0 inline-flex gap-2 items-center'>
                <li className='cursor-pointer hover:bg-[#EF4A23] hover:underline hover:text-white py-1 px-3 mr-1 rounded'>
                    <span className='text-[13px] uppercase font-semibold'>
                        Prev
                    </span>
                </li>
                {products.slice(0, 5).map((_, index: number) => (
                    <li className={`cursor-pointer leading-5 hover:text-white p-2 hover:bg-[#EF4A23] px-3 rounded ${index === 0 ? 'bg-[#EF4A23] text-white' : ''}`} key={index}>
                        <a href="" className='text-[13px] px-1 font-semibold'>{index + 1}</a>
                    </li>
                ))}
                <li className='cursor-pointer hover:bg-[#EF4A23] hover:text-white hover:underline py-1 px-3 mr-1 rounded'>
                    <span className='text-[12px] uppercase font-semibold'>
                        Next
                    </span>
                </li>
            </ul>
        </div>
    );
};

export default Pagination;
