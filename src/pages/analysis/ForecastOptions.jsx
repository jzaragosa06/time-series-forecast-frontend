import { useState } from "react";
import { useAnalysis } from "../../context/UseAnalyzeContext";

const forecastMethod = [
    { index: "without_refit", value: "Without Refit" },
    { index: "with_refit", value: "With Refit" },
]

const ForecastOption = () => {
    const { formData, setFormData, forecast } = useAnalysis();
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
        <div className="flex flex-col md:flex-row gap-4 w-full items-end">
            <div className="flex flex-col gap-1 w-full md:w-1/4">
                <label className="text-sm text-gray-600 font-medium mb-1">Steps</label>
                <input
                    type="number"
                    min={1}
                    value={formData.steps}
                    onChange={(e) => setFormData({ ...formData, steps: e.target.value })}
                    className="border rounded px-2 py-1 focus:ring-2 focus:ring-blue-200 outline-none text-gray-700"
                />
            </div>
            <div className="flex flex-col gap-1 w-full md:w-1/4">
                <label className="text-sm text-gray-600 font-medium mb-1">Forecast Method</label>
                <select
                    value={formData.forecast_method}
                    onChange={(e) => setFormData({ ...formData, forecast_method: e.target.value })}
                    className="border rounded px-2 py-1 focus:ring-2 focus:ring-blue-200 outline-none text-gray-700"
                >
                    {forecastMethod.map((method, idx) => (
                        <option key={idx} value={method.index} >{method.value}</option>
                    ))}
                </select>
            </div>

            <button
                type="button"
                onClick={handleForecastClick}
                className={`px-6 py-2 bg-blue-800 hover:bg-blue-900 transition text-white rounded-lg font-semibold shadow ${isLoading ? "cursor-not-allowed bg-blue-500" : "bg-blue-800 hover:bg-blue-900"}`}
                disabled={isLoading}
            >
                {isLoading ? "Loading..." : "Forecast"}
            </button>
        </div>
    );
}

export default ForecastOption;