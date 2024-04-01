import Navbar from '../header/Navbar'
import Footer from "../footer/Footer"
import { Outlet } from "react-router-dom"
import Top from '../header/Top'
const MainLayout = () => {
    return (
        <>
            <Top />
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default MainLayout