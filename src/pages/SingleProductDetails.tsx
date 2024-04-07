import ProductInfo from "../components/singleProductInfo/ProductInfo";
import Specification from "../components/singleProductInfo/Specification";
import ProductDescription from "../components/singleProductInfo/ProductDescription";
import ReletedProducts from "../components/singleProductInfo/ReletedProducts";
import Questions from "../components/singleProductInfo/Questions";
import Reviews from "../components/singleProductInfo/Reviews";
import { useParams } from "react-router-dom"
import AfterHeader from "../components/header/AfterHeader";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useScrollToTop } from "../lib/scrollTop";

const SingleProductDetails = () => {

  const products = useSelector((state: RootState) => state.products.products)

  // productId
  const params = useParams()
  const pd = products?.find(item => item.id.toLowerCase() === params?.productId?.toLowerCase())

  useScrollToTop()
  return (
    <>
      <AfterHeader />
      <div className=" bg-[#F2F4F8] pb-[50px] mt-3">
        <div className="max-w-[1290px] mx-auto px-4">
          <ProductInfo name={pd?.name as string}
            price={pd?.price.current as number}
            images={pd?.images[0].url as string}
            inventory={pd?.inventory as {
              inStock: boolean
              quantity: number}}
            brand={pd?.brand.name as string}
            description={pd?.description as string[]}
            pdId={pd?.id as string} />
          <div className="lg:flex mt-5 gap-5">
            <div className="">

              <Specification
                basicInformation={pd?.basicInformation}
                memorySpecifications={pd?.memorySpecifications}
                GraphicsSpecifications={pd?.GraphicsSpecifications}
                warrantyInformation={pd?.warrantyInformation}
              />
              <ProductDescription listOfObjects={pd?.listOfObjects} />
              <Questions />
              <Reviews />
            </div>
            <div className="h-fit">
              <ReletedProducts />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProductDetails;
