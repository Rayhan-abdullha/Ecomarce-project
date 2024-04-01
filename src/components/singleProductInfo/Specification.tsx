import { Link } from "react-router-dom";

type SubType = { name: string; value: string }[] | undefined
interface PropsType {
  basicInformation: SubType
  memorySpecifications: SubType
  GraphicsSpecifications: SubType
  warrantyInformation: SubType
}

const Specification = ({
  basicInformation,
  memorySpecifications,
  GraphicsSpecifications,
  warrantyInformation,
}: PropsType) => {

  return (
    <section className="bg-[#F2F4F8] overflow-hidden lg:overflow-auto">
      <div className="w-full">
        <div className="text-sm gap-3 mb-5 lg:mt-0">
          <Link to="#" className="bg-[#ef4a23] inline-block text-white sm:flex-auto md:flex-auto px-4 py-4 text-center font-semibold rounded capitalize hover:bg-[#ef4a23] hover:text-white">
            Specification
          </Link>
          <Link to="#" className="bg-white inline-block sm:flex-auto md:flex-auto px-4 py-4 ml-2 text-center font-semibold rounded capitalize hover:bg-[#ef4a23] hover:text-white">
            description
          </Link>
          <Link to="#" className="bg-white inline-block sm:flex-auto md:flex-auto px-4 py-4 ml-2 text-center font-semibold rounded capitalize hover:bg-[#ef4a23] hover:text-white">
            Questions
          </Link>
          <Link to="#" className="bg-white inline-block sm:flex-auto md:flex-auto px-4 py-4 ml-2 text-center font-semibold rounded capitalize hover:bg-[#ef4a23] hover:text-white">
            reviews
          </Link>
        </div>
        <div className="p-4 bg-white shadow-md rounded">
          <h2 className="text-lg font-semibold border-b pb-4">Specification</h2>
          <div className="mt-4">
            <div className="bg-[#F5F6FC] p-3 rounded">
              <p className="text-sm font-semibold text-[#3749BB]">
                Basic Information
              </p>
            </div>
            <div className="mt-2">
              {
                basicInformation?.map((item, index: number) => (
                  <div key={index} className="lg:flex gap-2 py-2 border-b hover:bg-[#f2f4f8]">
                    <span className="text-sm block  w-[250px] text-[#666666] capitalize">
                      {item.name}
                    </span>
                    <span className=" text-sm block font-bold">
                      {item.value}
                    </span>
                  </div>
                ))
              }

            </div>
          </div>
          <div className="mt-4">
            <div className="bg-[#F5F6FC] p-3 rounded">
              <p className="text-sm font-semibold text-[#3749BB]">
                Memory Specifications
              </p>
            </div>
            <div className="mt-2">
              {
                memorySpecifications?.map((item, index: number) => (
                  <div key={index} className="lg:flex gap-2 py-2 border-b hover:bg-[#f2f4f8]">
                    <span className="text-sm block w-[250px] text-[#666666] capitalize">
                      {item.name}
                    </span>
                    <span className=" text-sm font-bold">
                      {item.value}
                    </span>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="mt-4">
            <div className="bg-[#F5F6FC] p-3 rounded">
              <p className="text-sm font-semibold text-[#3749BB]">
                Graphics Specifications
              </p>
            </div>
            <div className="mt-2">
              {
                GraphicsSpecifications?.map((item, index: number) => (
                  <div key={index} className="lg:flex gap-2 py-2 border-b hover:bg-[#f2f4f8]">
                    <span className="text-sm block w-[250px] text-[#666666] capitalize">
                      {item.name}
                    </span>
                    <span className=" text-sm font-bold">
                      {item.value}
                    </span>
                  </div>
                ))
              }
            </div>
            <div>
              <div className="bg-[#F5F6FC] p-3 rounded">
                <p className="text-sm font-semibold text-[#3749BB]">
                  Warranty Information
                </p>
              </div>
              <div className="mt-2">
                {
                  warrantyInformation?.map((item, index: number) => (
                    <div key={index} className=" lg:flex gap-2 py-2 border-b hover:bg-[#f2f4f8]">
                      <span className="text-sm block w-[250px] text-[#666666] capitalize">
                        {item.name}
                      </span>
                      <span className=" text-sm font-bold">
                        {item.value}
                      </span>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specification;
