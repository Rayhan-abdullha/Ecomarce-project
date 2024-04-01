import { FaSquarePlus } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Product } from "../../interface/products";

const ReletedProducts = () => {
  const products = useSelector((state: RootState) => state.products.products)
  const recentViewPd = products.filter(item => item.recentlyViewed && item)
  return (
    <section className=" mx-4">
      <div className=" bg-white p-4 rounded shadow">
        <h2 className=" text-center text-[#3749BB] font-medium capitalize text-xl pb-3">
          related products
        </h2>
        {
          products.slice(1, 5).map((item: Product) => (
            <div className="flex gap-5 border-t pt-4 mb-5" key={item.id}>
              <div className="w-[120px] h-[70px] bg-red-300">
                <img className="w-full" src="" alt="" />
              </div>
              <div className=" min-w-[120px]">
                <p className=" font-medium text-sm">
                  {item.name}
                </p>
                <span className=" text-[#F04A23] my-2 inline-block">{item.price.current}ট</span>

                <div className="flex items-center gap-3 text-[#878888] ">
                  <span className=" text-xl">
                    <FaSquarePlus />
                  </span>
                  <p className="text-[14px] capitalize">add to compare</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>

      <div className="mt-10 bg-white p-4 rounded shadow">
        <h2 className=" text-center text-[#3749BB] font-medium capitalize text-xl pb-3">
          Recent View Products
        </h2>
        {
          recentViewPd.map((item: Product) => (
            <div className="flex gap-5 border-t pt-4 mb-5" key={item.id}>
              <div className="w-[120px] h-[70px] bg-red-300">
                <img className="w-full" src="" alt="" />
              </div>
              <div className=" min-w-[120px]">
                <p className=" font-medium text-sm">
                  {item.name}
                </p>
                <span className=" text-[#F04A23] my-2 inline-block">{item.price.current}ট</span>

                <div className="flex items-center gap-3 text-[#878888] ">
                  <span className=" text-xl">
                    <FaSquarePlus />
                  </span>
                  <p className="text-[14px] capitalize">add to compare</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  );
};

export default ReletedProducts;
