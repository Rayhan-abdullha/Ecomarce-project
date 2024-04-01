import { useParams, Link } from "react-router-dom"
const Breadcrumb = () => {
    const params = useParams();
    return (
        <div className="flex items-center mt-[50px] lg:mt-0">
            <Link
                to="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                </svg>
            </Link>
            <nav className="flex items-center">
                <ol className="list-reset flex text-grey-dark">
                    <li><span className="mr-2">/</span></li>
                    <li><Link to={`${`/categories/${params?.category}`}`} className="capitalize hover:underline text-[14px] font-medium">{params?.category}</Link></li>
                    {
                        params?.sub_cat_name && <>
                            <li><span className="mx-2">/</span></li>
                            <li><a href="#" className="capitalize hover:underline text-[13px]">{params?.sub_cat_name}</a></li>
                        </>
                    }

                    {
                        params?.productId && <>
                            <li><span className="mx-2">/</span></li>
                            <li><a href="#" className="capitalize hover:underline text-[13px]">{params?.productId}</a></li>
                        </>
                    }
                </ol>
            </nav>
        </div>
    );
};

export default Breadcrumb;
