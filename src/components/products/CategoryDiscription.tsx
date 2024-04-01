import data from '../../db/categoryDescription.json'
const CategoryDiscription = () => {
    const { category, latestProcessor, chooseProcessor, brand, bestProcessorShop } = data;

    return (
        <div className="bg-white">
            <div className="p-4">
                <h2 className="text-lg font-medium mb-2 text-[#3749bb]">{category.title}</h2>
                <p className='text-[13px] leading-[24px]'>{category.description}</p>
            </div>
            <div className="p-4">
                <h2 className="text-[#3749bb] text-[16px] font-medium mb-2">{latestProcessor.title}</h2>
                <ul>
                    <li className="flex justify-between items-center py-2">
                        <span className='font-medium text-[15px]'>{latestProcessor.label.name}</span>
                        <span className='font-medium text-[15px]'>{latestProcessor.label.price}</span>
                    </li>
                    {latestProcessor.processors.map((processor) => (
                        <li key={processor.id} className="flex justify-between items-center py-2 border-b border-gray-200">
                            <span className='text-[15px]'>{processor.name}</span>
                            <span className='text-[15px]'>{processor.price}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="p-4">
                <h2 className="text-lg font-medium mb-2 text-[#3749bb]">{chooseProcessor.title}</h2>
                <p className='text-[13px] leading-[24px]'>{chooseProcessor.intelDescription}</p>
            </div>
            <div className="p-4">
                {brand.map((item) => (
                    <div key={item.id} className='mb-4'>
                        <h2 className="text-lg font-medium mb-2 text-[#3749bb] capitalize">{item.name}</h2>
                        <p className='text-[13px] leading-[24px]'>{item.discription}</p>
                    </div>
                ))}
            </div>
            <div className="p-4">
                <h2 className="text-xl font-medium mb-2 text-[#3749bb]">{bestProcessorShop.title}</h2>
                <p className='text-[13px] leading-[24px]'>{bestProcessorShop.description}</p>
            </div>
        </div>
    );
};

export default CategoryDiscription;
