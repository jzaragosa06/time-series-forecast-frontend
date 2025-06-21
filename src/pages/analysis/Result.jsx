// import { useState } from "react";
// import { LineChart } from "recharts";
// import LineGraph from "./LineChart";
// import AiComponent from "./Ai";

// const Result = ({
//     metric,
//     setMetric,
//     inSampleForecastTest,
//     setInSampleForecastTest,
//     outSampleForecast,
//     setOutSampleForecast,
// }) => {
//     return (
//         <div>
//             {/* Results (graphs, metrics, tables, and description) */}
//             <h1>Forecast Result</h1>
//             {inSampleForecastTest &&
//                 <div>
//                     <p>Model performance</p>
//                     <LineGraph series={inSampleForecastTest} />
//                 </div>
//             }

//             <div className="flex">
//                 <div>
//                     <p>forecast</p>
//                 {outSampleForecast && <LineGraph series={outSampleForecast} />}

//                 </div>
//                 {/* AI Explanation */}
//                 <AiComponent />
//             </div>

//         </div>
//     )
// }

// export default Result; 

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
        <div className="bg-white rounded-xl shadow-sm p-6 border mt-4">
            <h1 className="font-semibold text-xl mb-4 text-gray-800">Forecast Result</h1>
            {inSampleForecastTest && (
                <div className="mb-6">
                    <p className="text-gray-600 mb-2">Model Performance</p>
                    <LineGraph series={inSampleForecastTest} />
                </div>
            )}
            <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                    <p className="text-gray-600 mb-2">Forecast</p>
                    {outSampleForecast ? (
                        <LineGraph series={outSampleForecast} />
                    ) : (
                        <div className="text-gray-400 text-sm">No forecast data to display.</div>
                    )}
                </div>
                <div className="md:w-1/3">
                    <AiComponent
                        inSampleForecastTest={inSampleForecastTest}
                        outSampleForecast={outSampleForecast}
                        metric={metric}
                    />
                </div>
            </div>
        </div>
    )
}

export default Result;