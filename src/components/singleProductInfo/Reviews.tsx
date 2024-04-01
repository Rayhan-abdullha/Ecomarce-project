import { MdFeed } from "react-icons/md";
import ReviewInput from './ReviewInput'
import { useState } from 'react'
const Reviews = () => {
  const [state, setState] = useState<boolean>(false)
  const handleReviewButton = () => {
    setState(true)
  };
  return (
    <section className="my-5">
      <div className="p-4 bg-white rounded shadow">
        <div className="flex flex-col gap-3 lg:flex-row lg:justify-between">
          <div>
            <h2 className="text-lg capitalize font-semibold">reviews(0)</h2>
            <p className="text-[#666666] text-sm my-2">
              Get specific details about this product from customers who own it
            </p>
          </div>
          <div>
            <button
              onClick={handleReviewButton}
              className=" bg-white w-fit px-5 py-2 rounded font-semibold text-[#3749BB] border-2 border-[#3749BB] capitalize hover:bg-[#3749BB] hover:text-white"
            >
              write a review
            </button>
          </div>
        </div>
        <div className=" flex flex-col justify-center items-center h-[250px] border-t mt-8">
          <span className=" text-[#4054d6] text-5xl p-6 bg-[#F5F6FC] rounded-full mb-4">
            <MdFeed />
          </span>
          <p className="text-center text-sm text-[#666]">
            This product has no reviews yet. Be the first one to write a review.
          </p>
        </div>
        {
          state && <ReviewInput setState={setState} />
        }
      </div>
    </section>
  );
};

export default Reviews;
