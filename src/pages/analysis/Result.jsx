import LineGraph from "./LineChart";
import AiComponent from "./Ai";
import LinesGraph from "./LinesChart";

const Result = ({
    series, 
    metric,
    setMetric,
    inSampleForecastTest,
    setInSampleForecastTest,
    outSampleForecast,
    setOutSampleForecast,
    seriesExplanation,
    forecastExplanation
}) => {
    const testLength = inSampleForecastTest.length;
    const testSeries = series.slice(-testLength);

    return (
        <div>
            {/* Results (graphs, metrics, tables, and description) */}
            <h1 className="text-xl font-semibold mb-4 text-gray-800">Forecast Result</h1>
            {inSampleForecastTest &&
                <div className="mb-8">
                    <p className="text-gray-700 font-medium mb-2">Model Performance</p>
                    <span className="text-xs text-gray-600">This visualize and describe how well the model performs in forcasting a given test</span>
                    {/* <LineGraph series={inSampleForecastTest} /> */}
                    <LinesGraph series1={testSeries} series2={inSampleForecastTest} />
                </div>


            }

            <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                    <p className="text-gray-700 font-medium mb-2">Forecast</p>
                    {outSampleForecast && <LineGraph series={outSampleForecast} />}
                </div>
                {/* AI Explanation */}
                <AiComponent
                    explanation={forecastExplanation}
                />
            </div>
        </div>
    )
}

export default Result;