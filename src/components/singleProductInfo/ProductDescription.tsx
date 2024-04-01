import React from "react";

const ProductDescription = ({ listOfObjects }) => {
  // console.log(listOfObjects);
  return (
    <section className=" mx-4 my-6">
      <div className="">
        <div className="bg-white p-3 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-2">Description</h2>
          <h3 className="text-lg font-semibold mb-2">
            {listOfObjects[0].name}
          </h3>
          <p className="mb-4 text-sm">{listOfObjects[0].description}</p>
          <h3 className="text-xl font-semibold mb-2">
            {listOfObjects[1].name}
          </h3>
          <p className="mb-4 text-sm">{listOfObjects[1].description}</p>
          <h3 className="text-xl font-semibold mb-2">
            {listOfObjects[2].name}
          </h3>
          <p className="mb-4 text-sm">{listOfObjects[2].description}</p>
          <h3 className="text-xl font-semibold mb-2">
            {listOfObjects[3].name}
          </h3>
          <p className="mb-4 text-sm">{listOfObjects[3].description}</p>
          <h3 className="text-xl font-semibold mb-2">
            {listOfObjects[4].name}
          </h3>
          <p className="mb-4 text-sm">{listOfObjects[4].description}</p>
        </div>
        <div className="bg-white p-3 rounded shadow mt-4">
          <h2 className="text-lg font-bold mt-6 mb-2">
            {listOfObjects[5].name}
          </h2>
          <p className=" text-sm">{listOfObjects[5].description}</p>
        </div>
      </div>
    </section>
  );
};

export default ProductDescription;
