// const AiComponent = ({ inSampleForecastTest, outSampleForecast, metric }) => {
//     return (
//         <div className="border px-2 py-1">
//             <h3>Forecast Explanation</h3>
//             <p>Lorem ipsum dolor sit amet
//                 consectetur adipisicing elit. Quo, officiis
//                 at pariatur deleniti eaque molestiae!
//             </p>
//         </div>
//     );
// }

// export default AiComponent; 
const AiComponent = ({ inSampleForecastTest, outSampleForecast, metric }) => {
    return (
        <div className="border rounded-lg bg-gray-50 px-4 py-3 mt-2">
            <h3 className="font-semibold text-gray-800 mb-1">Forecast Explanation</h3>
            <p className="text-gray-600 text-sm">
                {/* Replace this with dynamic explanation if available */}
                The forecast above is generated based on your selected preprocessing and forecasting options.
                Review the chart and metrics to assess model performance and forecast reliability.
            </p>
        </div>
    );
}

export default AiComponent;