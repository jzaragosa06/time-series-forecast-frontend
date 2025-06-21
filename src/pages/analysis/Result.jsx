import { useState } from "react";
import { LineChart } from "recharts";
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
            <h1>Forecast Result</h1>
            {inSampleForecastTest &&
                <div>
                    <p>Model performance</p>
                    <LineGraph series={inSampleForecastTest} />
                </div>
            }

            <div className="flex">
                <div>
                    <p>forecast</p>
                {outSampleForecast && <LineGraph series={outSampleForecast} />}

                </div>
                {/* AI Explanation */}
                <AiComponent />
            </div>

        </div>
    )
}

export default Result; 