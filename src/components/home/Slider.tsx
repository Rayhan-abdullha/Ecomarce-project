import CompareProdcuts from "./CompareProdcuts"

function Slider() {
    return (
        <section className="flex gap-5 md:gap-7 flex-col md:flex-row md:h-[500px]">
            <div className="md:w-3/4 h-[100%]">
                <img className="h-full" src="https://www.startech.com.bd/image/cache/catalog/home/banner/ramadan-2023-ac-deal-home-banner-982x500.png" alt="notfound" />
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