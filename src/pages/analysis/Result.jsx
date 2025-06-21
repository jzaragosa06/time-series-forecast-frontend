import { useState } from "react";
import { LineChart } from "recharts";
import LineGraph from "./LineChart";

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
            
            {inSampleForecastTest &&
                <div>
                    <p>Model performance</p>
                    <LineGraph series={inSampleForecastTest} />
                </div>
            }

            <div>
                <p>forecast</p>
                {outSampleForecast && <LineGraph series={outSampleForecast} />}
            </div>
        </div>
    )
}

export default Result; 