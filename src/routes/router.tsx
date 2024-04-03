import { createBrowserRouter } from "react-router-dom";
import ProductPage from "../pages/ProductPage";
import ErrorPage from "../error-page";
import SingleProductDetails from "../pages/SingleProductDetails";
import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
const router = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
            {
                path: "/",
                children: [
                    {
                        index: true,
                        element: <Home />,
                        errorElement: <ErrorPage />
                    }
                ],

            },
            {
                path: "/categories/:category",
                children: [
                    {
                        index: true,
                        element: <ProductPage />
                    },
                    {
                        path: 'sub_cat',
                        children: [
                            {
                                path: ':sub_cat_name',
                                element: <ProductPage />
                            }
                        ]
                    },
                    {
                        path: ':productId',
                        element: <SingleProductDetails />
                    },
                    {
                        path: ':componanet',
                        element: <SingleProductDetails />
                    }

                ]
            },
            {
                path: '/cart',
                element: <h1>Cart</h1>
            }, {
                path: "*",
                element: <NotFound />
            }

        ],

    },
    {
        path: "*",
        element: <NotFound />
    }
]);

export default router


