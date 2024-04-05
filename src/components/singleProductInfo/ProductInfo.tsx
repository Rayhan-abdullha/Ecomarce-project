import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice";

interface PropsType {
  name: string | undefined
  price: number | undefined
  images: string | undefined
  inventory: {
    inStock: boolean
    quantity: number
  } | undefined
  brand: string | undefined
  description: string[] | undefined
  pdId: string | undefined
}
const ProductInfo = ({
  name,
  price,
  images,
  inventory,
  brand,
  description,
  pdId
}: PropsType) => {
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    dispatch(addToCart(pdId))
  }

  return (
    <section className=" bg-white">
      <div className="max-w-container py-6 mx-4 md:flex">
        <div className="md:w-5/12 p-2">
          <img
            className="w-full mx-auto"
            src={images}
            alt="Product Image 1"
          />
        </div>
        <div className=" md:w-7/12">
          <h1 className=" text-[#3749CA] text-[20px] font-medium capitalize">
            {name}
          </h1>
          <div className=" py-4 flex flex-wrap gap-3 capitalize">
            <button className=" bg-[#F5F6FC] rounded-full text-[#666666] py-2 px-3 text-sm">
              Price: <span className=" text-[#000000]">{price}</span>
            </button>
            <button className=" bg-[#F5F6FC] rounded-full text-[#666666] py-2 px-3 text-sm">
              Status:{" "}
              <span className=" text-[#000000]">{`${inventory?.inStock ? "In-Stock" : "Stock-out"
                }`}</span>
            </button>
            <button className=" bg-[#F5F6FC] rounded-full text-[#666666] py-2 px-3 text-sm">
              Brand: <span className=" text-[#000000]">{brand}</span>
            </button>
          </div>
          <div>
            <div className="lg:w-[300px]">
              <h4 className=" text-lg capitalize mb-3 font-semibold">Key features</h4>
              <ul className="text-gray-600 text-sm flex flex-col gap-2">
                {
                  description?.map((desc: string, index: number) => (
                    <li className="text-[14px] font-medium" key={index}>{desc}</li>
                  ))
                }
              </ul>
            </div>
            <a
              href="#"
              className=" text-[#E5330B] text-sm mt-3 capitalize underline inline-block "
            >
              view more info
            </a>
          </div>
          <div className="">
            <h3 className=" text-xl pt-6 pb-4 capitalize">Payment Options</h3>
            <div className=" flex flex-col gap-4 lg:flex-row lg:flex lg:gap-x-4">
              <label
                htmlFor="radio"
                className=" border-2 border-[#edf2f5] w-full  flex gap-3 p-4 rounded lg:basis-[45%] hover:border-blue-500"
              >
                <input
                  type="radio"
                  checked={true}
                  name="radio"
                  className=" w-5"
                  id="radio"
                />
                <span className=" pl-4">
                  <span>
                    <span className=" text-xl font-bold mr-2">6,999৳</span>
                    <span className=" text-lg line-through text-[#666]">
                      7,699৳
                    </span>
                  </span>
                  <div className=" text-[13px] capitalize">
                    Cash Discount Price
                  </div>
                  <div className=" text-[13px] text-[#666] capitalize">
                    Online / Cash Payment
                  </div>
                </span>
              </label>
              <label
                htmlFor="radio"
                className=" border-2 border-[#edf2f5] w-full  flex gap-3 p-4 rounded lg:basis-[55%] hover:border-blue-500"
              >
                <input type="radio" name="radio" className=" w-5" id="radio" />
                <span className=" pl-4">
                  <span>
                    <span className=" text-xl font-bold mr-2">6,999৳</span>
                    <span className=" text-lg line-through text-[#666]">
                      7,699৳
                    </span>
                  </span>
                  <div className=" text-[13px] capitalize">
                    Cash Discount Price
                  </div>
                  <div className=" text-[13px] text-[#666] capitalize">
                    Online / Cash Payment
                  </div>
                </span>
              </label>
            </div>
          </div>
          <div className=" mt-5 gap-3 flex md:flex">
            <label htmlFor="button" className=" w-[140px] flex">
              <span className="flex flex-auto text-center items-center border border-[#edf2f5] p-2">
                <FaMinus className=" mx-auto text-base cursor-pointer h-5" />
              </span>
              <span className=" flex flex-auto text-center items-start border border-[#edf2f5]">
                <input
                  type="number"
                  name="quantity"
                  value={1}
                  className=" w-[40px] h-[40px] text-center"
                />
              </span>
              <span className="flex flex-auto text-center items-center border border-[#edf2f5] p-2">
                <FaPlus className="mx-auto text-base cursor-pointer h-5" />
              </span>
            </label>
            <button className=" bg-[#4054d6] w-full flex-auto hover:bg-[#2a378f] delay-100 transition-all text-sm text-white capitalize font-semibold px-3 py-2 rounded">
              Buy now
            </button>
            <button onClick={handleAddToCart} className=" bg-[#4054d6] w-full flex-auto  hover:bg-[#2a378f] delay-100 transition-all text-sm text-white capitalize font-semibold px-3 rounded py-2">
              add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;
