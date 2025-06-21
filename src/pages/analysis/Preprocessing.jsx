import { coundValidValues } from "../../utils/validateSeries";
import LineGraph from "./LineChart";

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

const Preprocessing = ({ formData, setFormData, preprocessedSeries }) => {
    return (
        <>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Preprocessing Options</h3>
            <div className="flex flex-col md:flex-row gap-8">
                <div className="flex flex-col gap-2 w-full md:w-1/3">
                    <label className="text-sm text-gray-600 font-medium mb-1">Missing Value Method</label>
                    <select
                        value={formData.method}
                        onChange={(e) => setFormData({ ...formData, method: e.target.value })}
                        className="border rounded px-2 py-1 focus:ring-2 focus:ring-blue-200 outline-none text-gray-700"
                    >
                        {methods.map((method, idx) => (
                            <option key={idx} value={method.key}>{method.value}</option>
                        ))}
                    </select>
                    {formData.method === "fill_with_value" &&
                        <div className="flex flex-col gap-1 mt-2">
                            <label className="text-xs text-gray-500">Value to be used</label>
                            <input
                                type="number"
                                value={formData.value}
                                onChange={(e) => setFormData({ ...formData, value: e.target.value })}
                                className="border rounded px-2 py-1 focus:ring-2 focus:ring-blue-200 outline-none text-gray-700"
                            />
                        </div>
                    }
                    {
                        formData.method === "none" &&
                        <div className="text-xs text-gray-400 mt-2">
                            Note: This will drop all the missing values before forecasting.
                        </div>
                    }
                </div>
                <div className="flex-1">
                    {/* Preprocessed series graph */}
                    {coundValidValues(preprocessedSeries) ? (
                        <LineGraph series={preprocessedSeries} />
                    ) : (
                        <div className="flex items-center justify-center h-48 text-gray-400 text-sm">
                            No preprocessed data to display.
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default Preprocessing;