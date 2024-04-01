const CompareProdcuts = () => {
    return (
        <div className="bg-[#ffe8a1] p-5 flex flex-col gap-4 md:h-[50%]">
            <div className="text-center">
                <h3 className="text-[17px] mb-[6px] font-medium">Compare Products</h3>
                <p className="text-[14px] text-[#000]">Choose Two Products to Compare</p>
            </div>
            <div className="flex gap-3 flex-col">
                <input type="text" className="outline-0 bg-white py-2 px-4 rounded-md" placeholder="Search and Select Product" />
                <input type="text" className="outline-0 bg-white py-2 px-4 rounded-md" placeholder="Search and Select Product" />
            </div>
            <button className="border-2 border-blue-600 rounded-md py-2 px-5 font-medium text-[16px]">View Comparison</button>
        </div>
    )
}

export default CompareProdcuts