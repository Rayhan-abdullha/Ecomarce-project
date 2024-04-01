import React from "react";
import { MdTextsms } from "react-icons/md";

const Questions = () => {
  const handleQuestionButton = () => {
    let questionContainer = document.getElementById("questionContainer");
    questionContainer.classList.toggle("hidden");
    let submitButton = document.getElementById("submitButton");
    submitButton.classList.add = "hidden";
  };

  return (
    <section className=" mx-4">
      <div className="p-4 bg-white rounded shadow">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-3">
          <div>
            <h2 className=" text-lg capitalize font-semibold">question(0)</h2>
            <p className="text-[#666666] text-sm my-2">
              Have question about this product? Get specific details about this
              product from expert.
            </p>
          </div>
          <div>
            <button
              onClick={handleQuestionButton}
              className=" bg-white border-2 w-fit border-[#4054d6] inline-block hover:text-[#fff] hover:bg-[#2a378f] delay-100 transition-all text-[#4054d6] capitalize font-semibold px-5 py-2 rounded"
            >
              ask question
            </button>
          </div>
        </div>
        <div className=" flex flex-col justify-center items-center h-[250px] border-t mt-8">
          <span className=" text-[#4054d6] text-5xl p-6 bg-[#F5F6FC] rounded-full mb-4">
            <MdTextsms />
          </span>
          <p className="text-center text-sm text-[#666]">
            There are no questions asked yet. Be the first one to ask a
            question.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <div
            id="questionContainer"
            className="hidden max-w-[400px] h-[100px] p-5 rounded bg-[#F2F4F8]"
          >
            <input
              type="text"
              id="inputField"
              placeholder="Enter your questions"
              className=" w-full py-1 px-2 bg-inherit text-sm border border-gray-200 rounded"
            />
            <button
              onClick={handleQuestionButton}
              className=" border-none mt-3 py-1 px-3 bg-blue-500 text-sm font-semibold text-white rounded"
              id="submitButton"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Questions;
