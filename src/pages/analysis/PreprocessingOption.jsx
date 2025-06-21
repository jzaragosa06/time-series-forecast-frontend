// const methods = [
//     { key: "none", value: "None" }, //this will default to dropna in the backend
//     { key: "fill_with_value", value: "Fill with Number" },
//     { key: "ffill", value: "Forwared Fill" },
//     { key: "bfill", value: "Backward Fill" },
//     { key: "mean", value: "Mean" },
//     { key: "median", value: "Median" },
//     { key: "mode", value: "Mode" },
//     { key: "dropna", value: "Drop missing values" }
// ]

// const PreprocessingOption = ({ formData, setFormData }) => {
//     return (
//         <div className="flex flex-col">
//             <div>
//                 {/* options */}
//                 <select
//                     value={formData.method} onChange={(e) => setFormData({ ...formData, method: e.target.value })}
//                     className="border"
//                 >
//                     {methods.map((method, idx) => (
//                         <option key={idx} value={method.key}>{method.value}</option>
//                     ))}
//                 </select>
//                 {formData.method === "fill_with_value" &&
//                     <div>Value to be used<input type="number" value={formData.value} onChange={(e) => setFormData({ ...formData, value: e.target.value })} /></div>
//                 }
//                 {
//                     formData.method === "none" && <div>Note: This will drop all the missing values before forecasting</div>
//                 }
//             </div>
//         </div >
//     );
// }

// export default PreprocessingOption; 
const methods = [
    { key: "none", value: "None" }, //this will default to dropna in the backend
    { key: "fill_with_value", value: "Fill with Number" },
    { key: "ffill", value: "Forwared Fill" },
    { key: "bfill", value: "Backward Fill" },
    { key: "mean", value: "Mean" },
    { key: "median", value: "Median" },
    { key: "mode", value: "Mode" },
    { key: "dropna", value: "Drop missing values" }
]

const PreprocessingOption = ({ formData, setFormData }) => {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
                <label className="text-gray-700 text-sm">Method:</label>
                <select
                    value={formData.method}
                    onChange={(e) => setFormData({ ...formData, method: e.target.value })}
                    className="border rounded px-2 py-1"
                >
                    {methods.map((method, idx) => (
                        <option key={idx} value={method.key}>{method.value}</option>
                    ))}
                </select>
                {formData.method === "fill_with_value" &&
                    <div className="flex items-center gap-1">
                        <span className="text-gray-700 text-sm">Value:</span>
                        <input
                            type="number"
                            value={formData.value}
                            onChange={(e) => setFormData({ ...formData, value: e.target.value })}
                            className="border rounded px-2 py-1 w-24"
                        />
                    </div>
                }
            </div>
            {
                formData.method === "none" &&
                <div className="text-xs text-gray-500 mt-1">
                    Note: This will drop all the missing values before forecasting.
                </div>
            }
        </div>
    );
}

export default PreprocessingOption;