import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError() as { statusText: string, message: string };
    return (
        <div id="error-page" className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold text-red-600">Oops!</h1>
            <p className="mt-4 text-lg text-gray-800">Sorry, an unexpected error has occurred.</p>
            <p className="mt-2 text-gray-600 italic">{error.statusText || error.message}</p>
            <a
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
                href="/"
            >
                Go Back
            </a>
        </div>
    );
}
