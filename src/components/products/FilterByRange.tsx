// interface PropsType {
//     showFilter:React.Dispatch<React.SetStateAction<>>
//     handleClose: () => void
//     filterProperty: {}
//     handleRangePrice: () => void;
//     setFilterProperty:React.Dispatch<React.SetStateAction<filterPropertyType>>
// }
// const FilterByPriceRange = ({showFilter, handleClose, filterProperty, handleRangePrice, setFilterProperty}: PropsType) => {
//     return (
//         <>
//             <div className={`close bg-white flex justify-end ${showFilter && innerWidth <= 1024 ? 'block' : 'hidden'}`}>
//                 <svg onClick={handleClose} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x hover:transform hover:scale-125 cursor-pointer m-4"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
//             </div>
//             <div className="bg-white p-4 mb-2">
//                 <h2 className="font-semibold mb-2">Price Range</h2>
//                 <div className="relative">
//                     <input onChange={handleRangePrice} name="from" type="range" min="0" max="50000" value={filterProperty.price.from?.toString()} className="w-full mb-2" />
//                     <input onChange={handleRangePrice} name="to" type="range" min="0" max="50000" value={filterProperty.price.to?.toString()} className="right-0 w-full mb-4" />
//                 </div>

//                 <div className="flex justify-between gap-2">
//                     <label>
//                         <input readOnly className="w-full p-1 outline-none border text-center border-gray-300" type="text" value={filterProperty.price.from?.toString()} />
//                     </label>
//                     <label >
//                         <input readOnly className="w-full p-1 outline-none border text-center border-gray-300" type="text" value={filterProperty.price.to?.toString()} />
//                     </label>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default FilterByPriceRange