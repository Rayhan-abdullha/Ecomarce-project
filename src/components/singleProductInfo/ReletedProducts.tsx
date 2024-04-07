import { FaSquarePlus } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Product } from "../../interface/products";
import { Link } from "react-router-dom";

const ReletedProducts = () => {
  const products = useSelector((state: RootState) => state.products.products)
  const recentViewPd = products.filter(item => item.recentlyViewed && item)
  return (
    <section className="">
      <div className=" bg-white p-4 rounded shadow">
        <h2 className=" text-center text-[#3749BB] font-medium capitalize text-xl pb-3">
          related products
        </h2>
        {
          products.slice(1, 5).map((item: Product) => (
            <div className="gap-5 border-t pt-4 mb-5 flex items-center" key={item.id}>
              <div className="w-[120px] h-[70px]">
                <img className="w-full" src={item.images[0].url} alt="notfound" />
              </div>
              <div className="min-w-[120px]">
                <Link to={`/categories/${item.category.name}/${item.id}`} className="font-medium text-sm hover:underline hover:text-[#F04A23]">
                  {item.name}
                </Link>
                <span className=" text-[#F04A23] my-3 inline-block font-semibold">{item.price.current}ট</span>
                <div className="flex items-center gap-3 text-[#878888] ">
                  <span className="text-[18px]">
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
            <div className="flex gap-5 border-t pt-4 mb-5 items-center" key={item.id}>
              <div className="w-[120px] h-[70px]">
                <img className="w-full" src={item.images[0].url} alt="notfound" />
              </div>
              <div className="min-w-[120px]">
                <Link to={`/categories/${item.category.name}/${item.id}`} className="font-medium text-sm hover:underline hover:text-[#F04A23]">
                  {item.name}
                </Link>
                <span className=" text-[#F04A23] my-3 inline-block font-semibold">{item.price.current}ট</span>
                <div className="flex items-center gap-3 text-[#878888] ">
                  <span className="text-[18px]">
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
