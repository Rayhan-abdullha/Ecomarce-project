import { Link } from 'react-router-dom';
const NotFound = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center">
            <div className="container px-5 sm:px-12 mx-auto px-4">
                <div className="max-w-lg mx-auto text-center">
                    <h1 className="text-4xl font-bold text-gray-800">404 - Page Not Found</h1>
                    <p className="mt-4 text-gray-600">The page you are looking for might have been removed or is temporarily unavailable.</p>
                    <Link to={'/'} className="mt-8 inline-block px-6 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600">Go back to home</Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;