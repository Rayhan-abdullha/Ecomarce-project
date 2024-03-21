
const Pagination = () => {

    return (
        <nav className="bg-gray-100 py-2">
            <ul className="list-none p-0 inline-flex">
                <li className={`cursor-pointer hover:bg-blue-200 py-2 px-3 mr-1 rounded`}>Prev</li>
                <li className={`cursor-pointer hover:bg-blue-200 py-2 px-3 mr-1 rounded`}>1</li>
                <li className={`cursor-pointer hover:bg-blue-200 py-2 px-3 mr-1 rounded`}>2</li>
                <li className={`cursor-pointer hover:bg-blue-200 py-2 px-3 mr-1 rounded`}>3</li>
                <li className={`cursor-pointer hover:bg-blue-200 py-2 px-3 mr-1 rounded`}>4</li>
                <li className={`cursor-pointer hover:bg-blue-200 py-2 px-3 mr-1 rounded`}>Next</li>
            </ul>
        </nav>
    );
};

export default Pagination;
