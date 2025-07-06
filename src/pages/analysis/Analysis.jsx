import { useState } from "react";
import Header from "../../components/Header";
import { useAnalyze } from "../../hooks/useAnalyze";
import { usePreprocessing } from "../../hooks/usePreprocessing";
import { useSeriesInput } from "../../hooks/useSeriesInput";
import ForecastOption from "./ForecastOptions";
import LineGraph from "./LineChart";
import Preprocessing from "./Preprocessing";
import Result from "./Result";
import SeriesInput from "./SeriesInput";
import { Switch } from '@headlessui/react'

const Analysis = () => {
    const { series, addNewRow, updateValue, deleteRow, handleBulkPaste } = useSeriesInput();
    const { preprocessedSeries, formData, setFormData } = usePreprocessing(series);
    const {
        metric, setMetric,
        inSampleForecastTest, setInSampleForecastTest,
        outSampleForecast, setOutSampleForecast,
        forecast,
        forecastExplanation
    } = useAnalyze(formData, preprocessedSeries);
    const [processesingEnabled, setProcessingEnabled] = useState(false);

    const handleEnableProcessing = () => {
        if (!processesingEnabled) setProcessingEnabled(!processesingEnabled);
        //means true. We also need to update the option for formData
        setProcessingEnabled(!processesingEnabled);
        setFormData({ ...formData, method: 'none', value: 0 })
    }

    return (
        <>
            <Header />
            <div className="flex flex-col min-h-screen">
                {/* Series Input & Chart */}
                <div className="flex flex-col md:flex-row gap-8 mt-8 px-6">
                    <div className="md:w-1/3 w-full rounded-xl shadow-xl border border-gray-100 p-4">
                        <h2 className="text-lg font-semibold mb-4 text-gray-800">Series Input</h2>
                        <SeriesInput
                            series={series}
                            addNewRow={addNewRow}
                            updateValue={updateValue}
                            deleteRow={deleteRow}
                            handleBulkPaste={handleBulkPaste}
                        />
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
                        className={`relative inline-flex h-5 w-10 items-center rounded-full transition-colors duration-200 ${processesingEnabled ? "bg-blue-500" : "bg-gray-300"
                            }`}
                    >
                        <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${processesingEnabled ? "translate-x-5" : "translate-x-1"
                                }`}
                        />
                    </button>
                </div>


                {/* Series Preprocessing */}
                {processesingEnabled &&
                    <div className="mt-8 px-6">
                        <div className="bg-gray-50 rounded-xl shadow-xl p-4">
                            <Preprocessing
                                formData={formData}
                                setFormData={setFormData}
                                preprocessedSeries={preprocessedSeries}
                            />
                        </div>
                    </div>
                }

                {/* Forecast option*/}
                <div className="mt-8 px-6">
                    <div className="bg-gray-50 rounded-xl shadow-xl border border-gray-100 p-4 flex flex-col md:flex-row md:items-center gap-4">
                        <ForecastOption
                            formData={formData}
                            setFormData={setFormData}
                            forecast={forecast}
                        />
                    </div>
                </div>

                {/* Forecast result */}
                {metric && (
                    <div className="mt-8 px-6">
                        <div className="bg-white rounded-xl shadow border p-4">
                            <Result
                                series={series}
                                metric={metric}
                                setMetric={setMetric}
                                inSampleForecastTest={inSampleForecastTest}
                                setInSampleForecastTest={setInSampleForecastTest}
                                outSampleForecast={outSampleForecast}
                                setOutSampleForecast={setOutSampleForecast}
                                forecastExplanation={forecastExplanation}
                            />
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
export default Analysis;