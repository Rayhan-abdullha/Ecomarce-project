import Navbar from '../header/Navbar'
import Footer from "../footer/Footer"
import { Outlet } from "react-router-dom"
import TopHeader from './../header/Top';
import Cart from '../cart/Cart';
import ProductCompare from '../UI/ProductCompare';
const MainLayout = () => {
    return (
        <>
            <TopHeader />
            <Navbar />
            <Outlet />
            <Cart />
            <ProductCompare />
            <Footer />
        </>
    )
}

export default MainLayout