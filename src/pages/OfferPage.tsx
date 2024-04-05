import { useSelector } from "react-redux"
import OfferItem from "../components/offer/OfferItem"
import { RootState } from "../redux/store"
import { OfferType } from "../redux/features/offers/offerSlice"

const OfferPage = () => {
    const offers = useSelector((state: RootState) => state.offers.offersList)
    return (
        <div className="max-w-[1290px] mx-auto px-4 grid grid-col-1 gap-6 sm:grid-cols-2 md:grid-cols-3 py-5">
            {
                offers?.map((offer: OfferType) => (
                    <OfferItem key={offer.id} offer={ offer} />
                ))
            }
        </div>
    )
}

export default OfferPage