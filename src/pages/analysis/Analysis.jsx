// import Header from "../../components/Header";
// import { useAnalyze } from "../../hooks/useAnalyze";
// import { usePreprocessing } from "../../hooks/usePreprocessing";
// import { useSeriesInput } from "../../hooks/useSeriesInput";
// import { coundValidValues } from "../../utils/validateSeries";
// import Ai from "./Ai";
// import ForecastOption from "./ForecastOptions";
// import LineGraph from "./LineChart";

// import PreprocessingOption from "./PreprocessingOption";
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
//                 <div>
//                     <PreprocessingOption
//                         formData={formData}
//                         setFormData={setFormData}
//                     />
//                     {/* Preprocessed series graph */}
//                     {coundValidValues(preprocessedSeries) && <LineGraph series={preprocessedSeries} />}
//                 </div>

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
import PreprocessingOption from "./PreprocessingOption";
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
            <div className="min-h-screen bg-gray-50 py-8 px-4">
                <div className="max-w-6xl mx-auto flex flex-col gap-8">
                    {/* Series Input & Chart */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white rounded-xl shadow-sm p-4 border col-span-1">
                            <h2 className="font-semibold text-lg mb-3 text-gray-800">Series Input</h2>
                            <SeriesInput
                                series={series}
                                addNewRow={addNewRow}
                                updateValue={updateValue}
                                deleteRow={deleteRow}
                                handleBulkPaste={handleBulkPaste}
                            />
                        </div>
                        <div className="bg-white rounded-xl shadow-sm p-4 border col-span-2 flex flex-col">
                            <h2 className="font-semibold text-lg mb-3 text-gray-800">Series Chart</h2>
                            <LineGraph series={series} />
                        </div>
                    </div>
                    {/* Preprocessing */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white rounded-xl shadow-sm p-4 border">
                            <PreprocessingOption
                                formData={formData}
                                setFormData={setFormData}
                            />
                        </div>
                        <div className="bg-white rounded-xl shadow-sm p-4 border">
                            <h2 className="font-semibold text-lg mb-3 text-gray-800">Preprocessed Series</h2>
                            {coundValidValues(preprocessedSeries) ? (
                                <LineGraph series={preprocessedSeries} />
                            ) : (
                                <div className="text-gray-400 text-sm">No preprocessed data to display.</div>
                            )}
                        </div>
                    </div>
                    {/* Forecast option*/}
                    <div className="bg-white rounded-xl shadow-sm p-4 border">
                        <ForecastOption
                            formData={formData}
                            setFormData={setFormData}
                            forecast={forecast}
                        />
                    </div>
                    {/* Forecast result */}
                    {metric && (
                        <Result
                            metric={metric}
                            setMetric={setMetric}
                            inSampleForecastTest={inSampleForecastTest}
                            setInSampleForecastTest={setInSampleForecastTest}
                            outSampleForecast={outSampleForecast}
                            setOutSampleForecast={setOutSampleForecast}
                        />
                    )}
                </div>
            </div>
        </>
    );
}
export default Analysis;