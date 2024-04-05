import { SlCalender } from "react-icons/sl"
import { OfferType } from "../../redux/features/offers/offerSlice"
import { SiHomeassistantcommunitystore } from "react-icons/si"

const OfferItem = ({ offer }: { offer: OfferType }) => {
  return (
    <div className="bg-white">
      <div className="px-4 pt-4">
          <img src={offer?.url} alt="notfound" />
      </div>
      <div className="content p-4">
        <div className="flex justify-between border-b pb-4">
          <span className="flex gap-2 items-center justify-between">
          <SlCalender />
          <span className="text-[13px] italic">{offer?.date.start}</span>
          </span>
          <span className="flex gap-2 items-center justify-between">
            <SiHomeassistantcommunitystore />
            <span className="capitalize text-[13px]">{ offer?.status}</span>
          </span>
        </div>
       <div className="text-center mt-5">
       <h3 className="text-[20px] font-medium capitalize">{ offer?.name}</h3>
        <p className="text-[15px] text-[#666] my-3 capitalize">{offer?.text}</p>
        <button className="min-w-[140px] bg-[#3749bb] text-white font-medium border border-[#3749bb] py-2 px-4 rounded-md">View Details</button>
       </div>
      </div>
    </div>
  )
}

export default OfferItem


