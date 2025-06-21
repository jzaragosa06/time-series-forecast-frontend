// import { validateSeriesValue } from "../../utils/validateSeries";

// const SeriesInput = ({ series, addNewRow, updateValue, deleteRow, handleBulkPaste }) => {
//     const handlePaste = (e) => {
//         e.preventDefault();
//         handleBulkPaste(e.clipboardData.getData('text'))
//     }

//     return (
//         <div className="flex flex-col w-full max-w-xs gap-2 text-sm ">
//             <div className="flex flex-col gap-1">
//                 {series.map((s) => (
//                     <div key={s.index} className="flex items-center gap-5">
//                         <span className="w-5 text-right text-gray-500">{s.index}</span>
//                         <input
//                             type="text"
//                             value={s.value}
//                             onChange={(e) => {
//                                 if (validateSeriesValue(e.target.value)) {
//                                     updateValue(s.index, e.target.value)
//                                 }
//                             }}
//                             onPaste={(e) => handlePaste(e)}
//                             className="w-full px-1 py-0.5 border border-gray-300 rounded bg-white focus:outline-none focus:ring-1 focus:ring-blue-500"
//                         />
//                         <button
//                             type="button"
//                             onClick={() => deleteRow(s.index)}
//                             className="text-gray-400 hover:text-red-500"
//                             aria-label="Delete"
//                         >
//                             <i className="bi bi-x-circle-fill"></i>
//                         </button>
//                     </div>
//                 ))}
//             </div>

//             <button
//                 type="button"
//                 onClick={addNewRow}
//                 className="items-center text-blue-600 hover:underline px-1 py-0.5"
//             >
//                 + Add Row
//             </button>

//         </div>
//     );
// };

// export default SeriesInput;


import { validateSeriesValue } from "../../utils/validateSeries";

const SeriesInput = ({ series, addNewRow, updateValue, deleteRow, handleBulkPaste }) => {
    const handlePaste = (e) => {
        e.preventDefault();
        handleBulkPaste(e.clipboardData.getData('text'))
    }

    return (
        <div className="flex flex-col w-full gap-2 text-sm">
            <div className="flex flex-col gap-1 max-h-72 overflow-y-auto pr-1 custom-scrollbar">
                {series.map((s) => (
                    <div key={s.index} className="flex items-center gap-3 py-1">
                        <span className="w-6 text-right text-gray-400">{s.index}</span>
                        <input
                            type="text"
                            value={s.value}
                            onChange={(e) => {
                                if (validateSeriesValue(e.target.value)) {
                                    updateValue(s.index, e.target.value)
                                }
                            }}
                            onPaste={handlePaste}
                            className="w-full px-2 py-1 border border-gray-200 rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
                        />
                        <button
                            type="button"
                            onClick={() => deleteRow(s.index)}
                            className="text-gray-300 hover:text-red-500 transition"
                            aria-label="Delete"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                ))}
            </div>
            <button
                type="button"
                onClick={addNewRow}
                className="mt-2 text-blue-700 hover:underline px-1 py-0.5 font-medium transition"
            >
                + Add Row
            </button>
        </div>
    );
};

export default SeriesInput;