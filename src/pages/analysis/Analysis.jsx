import Header from "../../components/Header";
import { useAnalyze } from "../../hooks/useAnalyze";
import { usePreprocessing } from "../../hooks/usePreprocessing";
import { useSeriesInput } from "../../hooks/useSeriesInput";
import { coundValidValues } from "../../utils/validateSeries";
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
            <div className="flex flex-col">
                {/* Series Input */}
                <div className="flex flex-1 gap-6">
                    <div className="w-1/3 border">
                        <SeriesInput
                            series={series}
                            addNewRow={addNewRow}
                            updateValue={updateValue}
                            deleteRow={deleteRow}
                            handleBulkPaste={handleBulkPaste}
                        />
                    </div>
                    <div className="flex-1 border">
                        <LineGraph series={series} />
                    </div>
                </div>
                {/* Series Preprocessing */}
                <div>
                    <h1>Preprocessing</h1>
                    <PreprocessingOption
                        formData={formData}
                        setFormData={setFormData}
                    />
                    {/* Preprocessed series graph */}
                    {coundValidValues(preprocessedSeries) && <LineGraph series={preprocessedSeries} />}
                </div>

                {/* Forecast option*/}
                <div>
                    <ForecastOption
                        formData={formData}
                        setFormData={setFormData}
                        forecast={forecast}
                    />
                </div>

                {/* Forecast result */}
                <div>
                    <Result
                        metric={metric}
                        setMetric={setMetric}
                        inSampleForecastTest={inSampleForecastTest}
                        setInSampleForecastTest={setInSampleForecastTest}
                        outSampleForecast={outSampleForecast}
                        setOutSampleForecast={setOutSampleForecast}
                    />
                </div>

                {/* AI Explanation */}

            </div>
        </>
    );
}
export default Analysis;