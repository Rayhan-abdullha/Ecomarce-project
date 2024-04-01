import React from "react";
interface PropsType {
  listOfObjects: {
    name: string | undefined
    description: string | undefined
  }[] | undefined
}
const ProductDescription = ({ listOfObjects }: PropsType) => {
  return (
    <section className=" mx-4 my-6">
      <div className="">
        <div className="bg-white p-3 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-2">Description</h2>
          {
            listOfObjects?.map((item, index: number) => (
              <React.Fragment key={index}>
                <p className="mb-4 text-sm">{item.description}</p>
                <h3 className="text-xl font-semibold mb-2">
                  {item.name}
                </h3>
              </React.Fragment>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default ProductDescription;
