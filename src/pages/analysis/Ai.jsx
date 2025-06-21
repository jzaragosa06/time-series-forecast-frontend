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
        <div className="border rounded-lg bg-gray-50 px-4 py-3 shadow-sm">
            <h3 className="font-semibold text-gray-700 mb-2">Forecast Explanation</h3>
            <p className="text-gray-500 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, officiis at pariatur deleniti eaque molestiae!
            </p>
        </div>
    );
}

export default AiComponent;