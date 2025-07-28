import { useEffect, useState } from "react";
import Header from "../../components/Header";
import { useAnalysis } from "../../context/UseAnalyzeContext";
import ForecastOption from "./ForecastOptions";
import LineGraph from "./LineChart";
import Preprocessing from "./Preprocessing";
import Result from "./Result";
import SeriesInput from "./SeriesInput";
import { Switch } from '@headlessui/react';
import { useSearchParams } from "react-router-dom";


const Analysis = () => {
    // const { processesingEnabled, setProcessingEnabled, setFormData, formData, metric } = useAnalysis();
    const { processingEnabled, setProcessingEnabled, setFormData, formData, metric, series } = useAnalysis();
    const handleEnableProcessing = () => {
        if (!processingEnabled) setProcessingEnabled(!processingEnabled);
        //means true. We also need to update the option for formData
        setProcessingEnabled(!processingEnabled);
        setFormData({ ...formData, method: 'none', value: 0 })
    }
    const [showModal, setShowModal] = useState(false);
    const [searchParams] = useSearchParams();

    useEffect(() => {
        if (searchParams.get("get_started") === "true") {
            setShowModal(true);
        }
    }, [searchParams])


    return (
        <>
            <Header />
            <div className="flex flex-col min-h-screen">
                {/* Series Input & Chart */}
                <div className="flex flex-col md:flex-row gap-8 mt-8 px-6">
                    <div className="md:w-1/3 w-full rounded-xl shadow-xl border border-gray-100 p-4">
                        <h2 className="text-lg font-semibold mb-4 text-gray-800">Series Input</h2>
                        <SeriesInput />
                    </div>
                    <div className="flex-1 bg-white rounded-xl shadow-xl border border-gray-100 p-4 flex flex-col">
                        <h2 className="text-lg font-semibold mb-4 text-gray-800">Series Chart</h2>
                        <div className="flex-1">
                            <LineGraph series={series} />
                        </div>
                    </div>
                </div>



                {/* Toggle Preprocessing */}
                <div className="mt-8 px-6 flex justify-end items-center gap-2">
                    <span className="text-sm text-gray-600">Enable Preprocessing</span>
                    <button
                        onClick={handleEnableProcessing}
                        className={`relative inline-flex h-5 w-10 items-center rounded-full transition-colors duration-200 ${processingEnabled ? "bg-blue-500" : "bg-gray-300"
                            }`}
                    >
                        <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${processingEnabled ? "translate-x-5" : "translate-x-1"
                                }`}
                        />
                    </button>
                </div>


                {/* Series Preprocessing */}
                {processingEnabled &&
                    <div className="mt-8 px-6">
                        <div className="bg-white rounded-xl shadow-2xl p-4">
                            <Preprocessing />
                        </div>
                    </div>
                }

                {/* Forecast option*/}
                <div className="mt-8 px-6">
                    <div className="bg-gray-50 rounded-xl shadow-2xl border border-gray-100 p-4 flex flex-col md:flex-row md:items-center gap-4">
                        <ForecastOption />
                    </div>
                </div>

                {/* Forecast result */}
                {metric && (
                    <div className="mt-8 px-6">
                        <div className="bg-white rounded-xl shadow-2xl p-4">
                            <Result />
                        </div>
                    </div>
                )}
            </div>
            {showModal && (
                <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center px-4">
                    <div className="bg-white rounded-2xl p-6 w-full max-w-lg shadow-2xl">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Getting Started</h2>
                        <p className="text-sm text-gray-600 mb-4">
                            Follow these steps to begin analyzing your time series data:
                        </p>
                        <ol className="list-decimal list-outside text-sm text-gray-700 space-y-3 pl-5 text-left">
                            <li>
                                <strong>Input your data:</strong> Use the form on the left to add data points or paste comma-separated values. The chart on the right updates in real time.
                            </li>
                            <li>
                                <strong>Enable preprocessing:</strong> Toggle preprocessing if needed. Choose a method to clean or transform your data. Results are visualized on the right.
                            </li>
                            <li>
                                <strong>Choose forecast settings:</strong> Set the forecast step size and other options based on your needs.
                            </li>
                            <li>
                                <strong>Click "Forecast":</strong> This will run the model and generate predictions.
                            </li>
                            <li>
                                <strong>Review results:</strong> You'll see performance metrics (like MAE or RMSE) and a graph of forecasted values to evaluate how well the model performs.
                            </li>
                        </ol>

                        <div className="mt-6 flex justify-end">
                            <button
                                className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition"
                                onClick={() => setShowModal(false)}
                            >
                                Got it
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </>
    );
}
export default Analysis;