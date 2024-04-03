import FeaturesProducts from "../components/home/FeaturesProducts"
import FeaturedCategory from "../components/home/FeaturedCategory"
import Slider from "../components/home/Slider"
import Services from "../components/home/Services"
const Home = () => {
    return (
        <div className="max-w-[1290px] mx-auto px-4 pt-4 mt-14 mg:mt-12 lg:mt-0 md:pt-7 pb-[60px] md:pb-[100px]">
            <Slider />
            <Services />
            <section className="sliding_text rounded-full p-2 bg-white mt-7">
                <p className="text-center text-[15px] hidden xl:block">1st April, Monday, all outlets are open. Additionally, our online activities are open and operational.</p>
            </section>
            <FeaturedCategory />
            <FeaturesProducts />
        </div>
    )
}

export default Home