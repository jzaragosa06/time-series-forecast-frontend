import LineGraph from "./LineChart";
import AiComponent from "./Ai";

const Result = ({
    metric,
    setMetric,
    inSampleForecastTest,
    setInSampleForecastTest,
    outSampleForecast,
    setOutSampleForecast,
}) => {
    return (
        <div>
            {/* Results (graphs, metrics, tables, and description) */}
            <h1 className="text-xl font-semibold mb-4 text-gray-800">Forecast Result</h1>
            {inSampleForecastTest &&
                <div className="mb-8">
                    <p className="text-gray-700 font-medium mb-2">Model Performance</p>
                    <LineGraph series={inSampleForecastTest} />
                </div>
            }

            <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                    <p className="text-gray-700 font-medium mb-2">Forecast</p>
                    {outSampleForecast && <LineGraph series={outSampleForecast} />}
                </div>
                {/* AI Explanation */}
                <AiComponent
                    inSampleForecastTest={inSampleForecastTest}
                    outSampleForecast={outSampleForecast}
                    metric={metric}
                />
            </div>
        </div>
    )
}

export default Result;