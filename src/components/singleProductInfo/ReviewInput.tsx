interface PropsType {
    setState: React.Dispatch<React.SetStateAction<boolean>>
}
const ReviewInput = ({ setState }: PropsType) => {

    return (
        <div className="flex justify-center mb-3">
            <div className="flex flex-col md:flex-row gap-3">
                <input
                    className="border border-gray-400 py-3 px-4"
                    type="text"
                    placeholder="Enter your review"
                />
                <button
                    onClick={() => setState(false)}
                    className="bg-[#4054D6] py-2 px-4 text-white font-semibold"
                >
                    Submit
                </button>
            </div>
        </div>
    )
}
export default ReviewInput