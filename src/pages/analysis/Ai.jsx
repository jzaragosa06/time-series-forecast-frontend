const AiComponent = ({ explanation }) => {
    return (
        <div className="border rounded-lg bg-gray-50 px-4 py-3 shadow-sm ml-6 min-w-[260px] max-w-xs">
            <h3 className="font-semibold text-gray-800 mb-2 text-base">Forecast Explanation</h3>
            <p className="text-gray-500 text-sm">
                {explanation ? explanation : "No explanation yet"}
            </p>
        </div>
    );
}

export default AiComponent;