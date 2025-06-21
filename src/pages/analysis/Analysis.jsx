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
//                     <h1>Preprocessing</h1>
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
//                 <div>
//                     <Result
//                         metric={metric}
//                         setMetric={setMetric}
//                         inSampleForecastTest={inSampleForecastTest}
//                         setInSampleForecastTest={setInSampleForecastTest}
//                         outSampleForecast={outSampleForecast}
//                         setOutSampleForecast={setOutSampleForecast}
//                     />
//                 </div>

    

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
            <main className="min-h-screen bg-gray-50 py-8 px-4 md:px-12">
                <div className="max-w-6xl mx-auto flex flex-col gap-8">
                    {/* Series Input & Chart */}
                    <section className="flex flex-col md:flex-row gap-8">
                        <div className="md:w-1/3 w-full bg-white rounded-xl shadow border p-4 flex flex-col">
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
                            <h2 className="text-lg font-semibold mb-4 text-gray-800">Raw Series Chart</h2>
                            <LineGraph series={series} />
                        </div>
                    </section>

                    {/* Preprocessing */}
                    <section className="bg-white rounded-xl shadow border p-4 flex flex-col gap-4">
                        <h2 className="text-lg font-semibold text-gray-800">Preprocessing</h2>
                        <PreprocessingOption
                            formData={formData}
                            setFormData={setFormData}
                        />
                        {coundValidValues(preprocessedSeries) &&
                            <div>
                                <h3 className="text-md font-medium text-gray-700 mb-2">Preprocessed Series</h3>
                                <LineGraph series={preprocessedSeries} />
                            </div>
                        }
                    </section>

                    {/* Forecast option */}
                    <section className="bg-white rounded-xl shadow border p-4 flex flex-col gap-4">
                        <h2 className="text-lg font-semibold text-gray-800">Forecast Options</h2>
                        <ForecastOption
                            formData={formData}
                            setFormData={setFormData}
                            forecast={forecast}
                        />
                    </section>

                    {/* Forecast result */}
                    <section className="bg-white rounded-xl shadow border p-4 flex flex-col gap-4">
                        <Result
                            metric={metric}
                            setMetric={setMetric}
                            inSampleForecastTest={inSampleForecastTest}
                            setInSampleForecastTest={setInSampleForecastTest}
                            outSampleForecast={outSampleForecast}
                            setOutSampleForecast={setOutSampleForecast}
                        />
                    </section>
                </div>
            </main>
        </>
    );
}
export default Analysis;