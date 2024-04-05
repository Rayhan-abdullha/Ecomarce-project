import { createBrowserRouter } from "react-router-dom";
import ProductPage from "../pages/ProductPage";
import ErrorPage from "../error-page";
import SingleProductDetails from "../pages/SingleProductDetails";
import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import CartPage from "../pages/CartPage";
import OfferPage from "../pages/OfferPage";
import OfferInfoDetails from "../pages/OfferInfoDetails";
import AuthPage from '../pages/AuthPage'

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
                path: "/information/offers",
                children: [
                    {
                        index: true,
                        element: <OfferPage />
                    },
                    {
                        path: ':offer_name',
                        element: <OfferInfoDetails />
                    }
                ]
            },
            {
                path: '/cart',
                element: <CartPage />
            }, 
            {
                path: '/auth/login',
                element: <AuthPage />
            }, 
            {
                path: "*",
                element: <NotFound />
            },
        ],
    },
    {
        path: "*",
        element: <NotFound />
    }
]);

export default router


