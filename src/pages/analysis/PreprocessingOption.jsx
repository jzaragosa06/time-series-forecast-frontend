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
//             <h3>Preprocessing Options</h3>
//             {/* options */}
//                 <select
//                 value={formData.method} onChange={(e) => setFormData({ ...formData, method: e.target.value })}
//                 className="border"
//                 >
//                     {methods.map((method, idx) => (
//                         <option key={idx} value={method.key}>{method.value}</option>
//                     ))}
//                 </select>
//                 {formData.method === "fill_with_value" &&
//                 <div>Value to be used<input type="number" value={formData.value} onChange={(e) => setFormData({ ...formData, value: e.target.value })} /></div>
//             }
//             {
//                 formData.method === "none" && <div>Note: This will drop all the missing values before forecasting</div>
//             }

//         </div >
//     );
// }

// export default PreprocessingOption; 

const methods = [
    { key: "none", value: "None" },
    { key: "fill_with_value", value: "Fill with Number" },
    { key: "ffill", value: "Forward Fill" },
    { key: "bfill", value: "Backward Fill" },
    { key: "mean", value: "Mean" },
    { key: "median", value: "Median" },
    { key: "mode", value: "Mode" },
    { key: "dropna", value: "Drop missing values" }
]

const PreprocessingOption = ({ formData, setFormData }) => {
    return (
        <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-gray-700 mb-1">Preprocessing Options</h3>
            <select
                value={formData.method}
                onChange={(e) => setFormData({ ...formData, method: e.target.value })}
                className="border rounded px-2 py-1 text-gray-700 bg-gray-50"
            >
                {methods.map((method, idx) => (
                    <option key={idx} value={method.key}>{method.value}</option>
                ))}
            </select>
            {formData.method === "fill_with_value" && (
                <div className="flex items-center gap-2">
                    <span className="text-gray-500">Value:</span>
                    <input
                        type="number"
                        value={formData.value}
                        onChange={(e) => setFormData({ ...formData, value: e.target.value })}
                        className="border rounded px-2 py-1 w-24 bg-gray-50"
                    />
                </div>
            )}
            {formData.method === "none" && (
                <div className="text-xs text-gray-400">
                    Note: This will drop all the missing values before forecasting.
                </div>
            )}
        </div>
    );
}

export default PreprocessingOption;