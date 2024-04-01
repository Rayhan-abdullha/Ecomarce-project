import { useState } from "react"
import CompareProdcuts from "./CompareProdcuts"
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"

function Slider() {
    const [slide, setSlide] = useState<number>(0)
    const { images } = useSelector((state: RootState) => state.sliders.images)

    const handleSlide = (val: number) => {
        setSlide(val)
    }
    return (
        <section className="flex gap-5 md:gap-7 flex-col md:flex-row md:h-[500px]">
            <div className="md:w-3/4 h-[100%] relative">
                <img className="h-full" src={images[slide]} alt="notfound" />
                <div className="flex gap-2 absolute bottom-4 right-0 left-0 justify-center opacity-[.8]">
                    <button onClick={() => handleSlide(0)} className={`w-[20px] h-[8px] bg-[#c0845c] cursor-pointer ${slide === 0 && 'bg-[#e93f30]'}`}></button>
                    <button onClick={() => handleSlide(1)} className={`w-[20px] h-[8px] bg-[#c0845c] cursor-pointer ${slide === 1 && 'bg-[#e93f30]'}`}></button>
                    <button onClick={() => handleSlide(2)} className={`w-[20px] h-[8px] bg-[#c0845c] cursor-pointer ${slide === 2 && 'bg-[#e93f30]'}`}></button>
                </div>
            </div>
            <div className="md:w-1/4 md:h-full flex flex-col gap-5 md:gap-7">
                <CompareProdcuts />
                <div className="md:h-[50%]">
                    <img className="h-full" src="https://www.startech.com.bd/image/catalog/home/banner/small/introducing-laptop-finder-home.webp" alt="notfound" />
                </div>
            </div>
        </section>

    )
}

export default Slider