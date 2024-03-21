import data from '../db/categoryDescription.json'
const CategoryDiscription = () => {
    const { category, latestProcessor, chooseProcessor, brand, bestProcessorShop } = data;

    return (
        <div className="container mx-auto bg-white">
            <div className="p-4">
                <h2 className="text-lg font-medium mb-2">{category.title}</h2>
                <p className='text-[13px]'>{category.description}</p>
            </div>
            <div className="p-4">
                <h2 className="text-[#3749bb] text-[14px] font-medium mb-2">{latestProcessor.title}</h2>
                <ul>
                    <li className="flex justify-between items-center py-2">
                        <span className='font-medium text-[14px]'>{latestProcessor.label.name}</span>
                        <span className='font-medium text-[14px]'>{latestProcessor.label.price}</span>
                    </li>
                    {latestProcessor.processors.map((processor) => (
                        <li key={processor.id} className="flex justify-between items-center py-2 border-b border-gray-200">
                            <span className='text-[14px]'>{processor.name}</span>
                            <span className='text-[14px]'>{processor.price}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="p-4">
                <h2 className="text-lg font-medium mb-2">{chooseProcessor.title}</h2>
                <p className='text-[13px]'>{chooseProcessor.intelDescription}</p>
            </div>
            <div className="p-4">
                {brand.map((item) => (
                    <div key={item.id} className='mb-4'>
                        <h2 className="text-lg font-medium mb-2 text-[#3749bb] capitalize">{item.name}</h2>
                        <p className='text-[13px]'>{item.discription}</p>
                    </div>
                ))}
            </div>
            <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{bestProcessorShop.title}</h2>
                <p className='text-[13px]'>{bestProcessorShop.description}</p>
            </div>
        </div>
    );
};

export default CategoryDiscription;
