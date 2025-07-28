const AiComponent = ({ explanation }) => {
    return (
        <div className="rounded-lg bg-gray-50 px-4 py-3 shadow-sm">
            <h3 className="font-semibold text-gray-800 mb-2 text-base">Forecast Explanation</h3>
            <p className="text-gray-500 text-sm text-justify">
                {explanation ? explanation : "No explanation yet"}
            </p>
        </div>
    );
}

export default AiComponent;