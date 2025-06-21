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
            console.log('formdata', formData);

            const response = await forecast();
            console.log('response forecast: ', response);

        } catch (error) {
            console.log(error);
        }
        finally {
            setIsLoading(false);
        }
    }

    return (
        <div>
            <h3>Forecast Options</h3>
            <p>steps: </p>
            <input
                type="number"
                min={1} value={formData.steps}
                onChange={(e) => setFormData({ ...formData, steps: e.target.value })}
                className="border"
            />
            <p>forecast method: </p>
            <select
                value={formData.forecast_method}
                onChange={(e) => setFormData({ ...formData, forecast_method: e.target.value })}
                className="border"
            >
                {forecastMethod.map((method, idx) => (
                    <option key={idx} value={method.index} >{method.value}</option>
                ))}
            </select>
            <button
                type="button"
                onClick={handleForecastClick}
                className="px-4 py-2 bg-blue-800 text-white"
            >
                {isLoading ? "Loading..." : "Forecast"}
            </button>
        </div>
    );
}

export default ForecastOption; 