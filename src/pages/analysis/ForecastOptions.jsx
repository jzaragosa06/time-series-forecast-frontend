// import { useState } from "react";

// const forecastMethod = [
//     { index: "without_refit", value: "Without Refit" },
//     { index: "with_refit", value: "With Refit" },
// ]

// const ForecastOption = ({ formData, setFormData, forecast }) => {
//     const [isLoading, setIsLoading] = useState(false);

//     const handleForecastClick = async () => {
//         setIsLoading(true);
//         try {
//             console.log('formdata', formData);

//             const response = await forecast();
//             console.log('response forecast: ', response);

//         } catch (error) {
//             console.log(error);
//         }
//         finally {
//             setIsLoading(false);
//         }
//     }

//     return (
//         <div>
//             <h3>Forecast Options</h3>
//             <p>steps: </p>
//             <input
//                 type="number"
//                 min={1} value={formData.steps}
//                 onChange={(e) => setFormData({ ...formData, steps: e.target.value })}
//                 className="border"
//             />
//             <p>forecast method: </p>
//             <select
//                 value={formData.forecast_method}
//                 onChange={(e) => setFormData({ ...formData, forecast_method: e.target.value })}
//                 className="border"
//             >
//                 {forecastMethod.map((method, idx) => (
//                     <option key={idx} value={method.index} >{method.value}</option>
//                 ))}
//             </select>
//             <button
//                 type="button"
//                 onClick={handleForecastClick}
//                 className="px-4 py-2 bg-blue-800 text-white"
//             >
//                 {isLoading ? "Loading..." : "Forecast"}
//             </button>
//         </div>
//     );
// }

// export default ForecastOption; 

import { useState } from "react";

const forecastMethod = [
    { index: "without_refit", value: "Without Refit" },
    { index: "with_refit", value: "With Refit" },
]

const ForecastOption = ({ formData, setFormData, forecast }) => {
    const [isLoading, setIsLoading] = useState(false);

    const handleForecastClick = async () => {
        setIsLoading(true);
        try {
            await forecast();
        } catch (error) {
            console.log(error);
        }
        finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex flex-col gap-1">
                <label className="text-gray-600 text-sm">Steps</label>
                <input
                    type="number"
                    min={1}
                    value={formData.steps}
                    onChange={(e) => setFormData({ ...formData, steps: e.target.value })}
                    className="border rounded px-2 py-1 w-24 bg-gray-50"
                />
            </div>
            <div className="flex flex-col gap-1">
                <label className="text-gray-600 text-sm">Forecast Method</label>
                <select
                    value={formData.forecast_method}
                    onChange={(e) => setFormData({ ...formData, forecast_method: e.target.value })}
                    className="border rounded px-2 py-1 bg-gray-50"
                >
                    {forecastMethod.map((method, idx) => (
                        <option key={idx} value={method.index}>{method.value}</option>
                    ))}
                </select>
            </div>
            <button
                type="button"
                onClick={handleForecastClick}
                className="px-5 py-2 rounded bg-blue-800 text-white font-semibold shadow hover:bg-blue-900 transition"
            >
                {isLoading ? "Loading..." : "Forecast"}
            </button>
        </div>
    );
}

export default ForecastOption;