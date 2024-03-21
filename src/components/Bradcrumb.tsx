import breadcrumb from '../db/breadcrumb.json'
const Breadcrumb = () => {
    return (
        <div className="flex items-center mb-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
            <nav className="flex items-center">
                <ol className="list-reset flex text-grey-dark">
                    <li><span className="mx-2">/</span></li>
                    <li><a href="#" className="capitalize hover:underline text-[12px]">{breadcrumb.category.title}</a></li>
                    <li><span className="mx-2">/</span></li>
                    <li><a href="#" className="capitalize hover:underline text-[12px]">{breadcrumb.category.subcategory}</a></li>
                </ol>
            </nav>
        </div>
    );
};

export default Breadcrumb;
