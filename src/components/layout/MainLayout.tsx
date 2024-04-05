import Navbar from '../header/Navbar'
import Footer from "../footer/Footer"
import { Outlet } from "react-router-dom"
import TopHeader from './../header/Top';
import CartIcon from '../cart/CartIcon';
import ProductCompare from '../UI/ProductCompare';
const MainLayout = () => {
    return (
        <>
            <TopHeader />
            <Navbar />
            <Outlet />
            <CartIcon />
            <ProductCompare />
            <Footer />
        </>
    )
}

export default MainLayout