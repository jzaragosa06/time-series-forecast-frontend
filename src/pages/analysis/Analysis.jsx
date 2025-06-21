// import Header from "../../components/Header";
// import { useAnalyze } from "../../hooks/useAnalyze";
// import { usePreprocessing } from "../../hooks/usePreprocessing";
// import { useSeriesInput } from "../../hooks/useSeriesInput";
// import { coundValidValues } from "../../utils/validateSeries";
// import Ai from "./Ai";
// import ForecastOption from "./ForecastOptions";
// import LineGraph from "./LineChart";
// import Preprocessing from "./Preprocessing";
// import Result from "./Result";
// import SeriesInput from "./SeriesInput";

// const Analysis = () => {
//     const { series, addNewRow, updateValue, deleteRow, handleBulkPaste } = useSeriesInput();
//     const { preprocessedSeries, formData, setFormData } = usePreprocessing(series);
//     const {
//         metric,
//         setMetric,
//         inSampleForecastTest,
//         setInSampleForecastTest,
//         outSampleForecast,
//         setOutSampleForecast,
//         forecast } = useAnalyze(formData, preprocessedSeries);

//     return (
//         <>
//             <Header />
//             <div className="flex flex-col">
//                 {/* Series Input */}
//                 <div className="flex flex-1 gap-6">
//                     <div className="w-1/3 border">
//                         <SeriesInput
//                             series={series}
//                             addNewRow={addNewRow}
//                             updateValue={updateValue}
//                             deleteRow={deleteRow}
//                             handleBulkPaste={handleBulkPaste}
//                         />
//                     </div>
//                     <div className="flex-1 border">
//                         <LineGraph series={series} />
//                     </div>
//                 </div>
//                 {/* Series Preprocessing */}

//                 <Preprocessing
//                     formData={formData}
//                     setFormData={setFormData}
//                     preprocessedSeries={preprocessedSeries}
//                 />


//                 {/* Forecast option*/}
//                 <div>
//                     <ForecastOption
//                         formData={formData}
//                         setFormData={setFormData}
//                         forecast={forecast}
//                     />
//                 </div>

//                 {/* Forecast result */}
//                 {
//                     metric &&
//                     <Result
//                         metric={metric}
//                         setMetric={setMetric}
//                         inSampleForecastTest={inSampleForecastTest}
//                         setInSampleForecastTest={setInSampleForecastTest}
//                         outSampleForecast={outSampleForecast}
//                         setOutSampleForecast={setOutSampleForecast}
//                     />

//                 }



//             </div>
//         </>
//     );
// }
// export default Analysis;

import Header from "../../components/Header";
import { useAnalyze } from "../../hooks/useAnalyze";
import { usePreprocessing } from "../../hooks/usePreprocessing";
import { useSeriesInput } from "../../hooks/useSeriesInput";
import { coundValidValues } from "../../utils/validateSeries";
import Ai from "./Ai";
import ForecastOption from "./ForecastOptions";
import LineGraph from "./LineChart";
import Preprocessing from "./Preprocessing";
import Result from "./Result";
import SeriesInput from "./SeriesInput";

const Analysis = () => {
    const { series, addNewRow, updateValue, deleteRow, handleBulkPaste } = useSeriesInput();
    const { preprocessedSeries, formData, setFormData } = usePreprocessing(series);
    const {
        metric,
        setMetric,
        inSampleForecastTest,
        setInSampleForecastTest,
        outSampleForecast,
        setOutSampleForecast,
        forecast } = useAnalyze(formData, preprocessedSeries);

    return (
        <>
            <Header />
            <div className="flex flex-col min-h-screen bg-gray-50">
                {/* Series Input & Chart */}
                <div className="flex flex-col md:flex-row gap-8 mt-8 px-6">
                    <div className="md:w-1/3 w-full bg-white rounded-xl shadow border p-4">
                        <h2 className="text-lg font-semibold mb-4 text-gray-800">Series Input</h2>
                        <SeriesInput
                            series={series}
                            addNewRow={addNewRow}
                            updateValue={updateValue}
                            deleteRow={deleteRow}
                            handleBulkPaste={handleBulkPaste}
                        />
                    </div>
                    <div className="flex-1 bg-white rounded-xl shadow border p-4 flex flex-col">
                        <h2 className="text-lg font-semibold mb-4 text-gray-800">Series Chart</h2>
                        <div className="flex-1">
                            <LineGraph series={series} />
                        </div>
                    </div>
                </div>

                {/* Series Preprocessing */}
                <div className="mt-8 px-6">
                    <div className="bg-white rounded-xl shadow border p-4">
                        <Preprocessing
                            formData={formData}
                            setFormData={setFormData}
                            preprocessedSeries={preprocessedSeries}
                        />
                    </div>
                </div>

                {/* Forecast option*/}
                <div className="mt-8 px-6">
                    <div className="bg-white rounded-xl shadow border p-4 flex flex-col md:flex-row md:items-center gap-4">
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
                                metric={metric}
                                setMetric={setMetric}
                                inSampleForecastTest={inSampleForecastTest}
                                setInSampleForecastTest={setInSampleForecastTest}
                                outSampleForecast={outSampleForecast}
                                setOutSampleForecast={setOutSampleForecast}
                            />
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
export default Analysis;