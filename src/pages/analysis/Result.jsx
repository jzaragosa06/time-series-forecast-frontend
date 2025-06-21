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
            
//             {inSampleForecastTest &&
//                 <div>
//                     <p>Model performance</p>
//                     <LineGraph series={inSampleForecastTest} />
//                 </div>
//             }

//             <div>
//                 <p>forecast</p>
//                 {outSampleForecast && <LineGraph series={outSampleForecast} />}

//                 {/* AI Explanation */}
//                 <AiComponent />
//             </div>

//         </div>
//     )
// }

// export default Result; 

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
        <div className="flex flex-col gap-8">
            {/* Results (graphs, metrics, tables, and description) */}
            {inSampleForecastTest &&
                <div>
                    <h3 className="text-md font-medium text-gray-700 mb-2">Model Performance</h3>
                    <LineGraph series={inSampleForecastTest} />
                </div>
            }

            <div>
                <h3 className="text-md font-medium text-gray-700 mb-2">Forecast</h3>
                {outSampleForecast && <LineGraph series={outSampleForecast} />}
                {/* AI Explanation */}
                <div className="mt-4">
                    <AiComponent
                        metric={metric}
                        inSampleForecastTest={inSampleForecastTest}
                        outSampleForecast={outSampleForecast}
                    />
                </div>
            </div>
        </div>
    )
}

export default Result;