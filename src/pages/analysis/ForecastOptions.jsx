import { useState } from "react";
import { useAnalysis } from "../../context/UseAnalyzeContext";
import Spinner from "../../components/Spinner";
import Toast from "../../components/Toast";

const forecastMethod = [
    { index: "without_refit", value: "Without Refit" },
    { index: "with_refit", value: "With Refit" },
]

const prompts = [
    "Explain the movement of the forecast",
    "Provide a summary of future trends",
    "Identify factors affecting forecast",
];

const ForecastOption = () => {
    const { formData, setFormData, forecast, isValid, setIsValid, errorMessage } = useAnalysis();
    const [isLoading, setIsLoading] = useState(false);

    const handleForecastClick = async (e) => {
        e.preventDefault()
        setIsLoading(true);

        if (!isValid) alert(errorMessage)

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
        <div className="w-full p-6 rounded-xl space-y-6">
            <form onSubmit={handleForecastClick}>
                {/* Two Column Layout */}
                <div className="flex flex-col md:flex-row gap-6">
                    {/* Left Column - Steps & Method */}
                    <div className="flex flex-col gap-4 w-full md:w-1/3">
                        {/* Steps Input */}
                        <div>
                            <label className="block text-sm text-gray-700 font-medium mb-1">Steps</label>
                            <input
                                type="number"
                                min={1}
                                required
                                value={formData.steps}
                                onChange={(e) => setFormData({ ...formData, steps: e.target.value })}
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Forecast Method Select */}
                        <div>
                            <label className="block text-sm text-gray-700 font-medium mb-1">Forecast Method</label>
                            <select
                                value={formData.forecast_method}
                                onChange={(e) => setFormData({ ...formData, forecast_method: e.target.value })}
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                {forecastMethod.map((method, idx) => (
                                    <option key={idx} value={method.index}>
                                        {method.value}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Right Column - Description & Prompt */}
                    <div className="flex flex-col gap-4 w-full md:w-2/3">
                        {/* Description */}
                        <div>
                            <label className="block text-sm text-gray-700 font-medium mb-1">Description</label>
                            <textarea
                                rows={4}
                                value={formData.description}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                placeholder="Describe your data. Be descriptive as much as possible. This will be used to explain the forecast. Omiting this will simply explain the movement of the series"
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                            />
                        </div>

                        {/* Forecast Prompt */}
                        <div>
                            <label className="block text-sm text-gray-700 font-medium mb-1">Forecast Explanation Prompt</label>
                            <input
                                type="text"
                                list="prompt-options"
                                value={formData.prompt}
                                onChange={(e) => setFormData({ ...formData, prompt: e.target.value })}
                                placeholder="Provide a summary of future trends"
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <datalist id="prompt-options">
                                {prompts.map((prompt, idx) => (
                                    <option key={idx} value={prompt} />
                                ))}
                            </datalist>
                        </div>
                    </div>
                </div>

                {/* Forecast Button */}
                <div className="flex justify-end mt-5">
                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`px-6 py-2 rounded-lg font-semibold text-white transition ${isLoading
                            ? "bg-blue-500 cursor-not-allowed"
                            : "bg-blue-700 hover:bg-blue-800"
                            }`}
                    >
                        {isLoading
                            ? <Spinner />
                            : "Forecast"}
                    </button>
                </div>
                {!isValid && (
                    <Toast
                        message={errorMessage}
                        type="error"
                        onClose={() => setIsValid(true)}
                        duration={3000}
                    />
                )}
            </form>
        </div>
    );

}

export default ForecastOption;