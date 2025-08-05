const GuideModal = ({ setShowModal }) => {
    return (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center px-4">
            <div className="bg-white rounded-2xl p-6 w-full max-w-lg shadow-2xl">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Getting Started</h2>
                <p className="text-sm text-gray-600 mb-4">
                    This application allows you to perform time series forecasting,
                    telling you the likely events that will happen based on your time series data.
                </p>

                <p className="text-sm text-gray-600 mb-4">
                    Follow these steps to begin analyzing your time series data:
                </p>
                <ol className="list-decimal list-outside text-sm text-gray-700 space-y-3 pl-5 text-left">
                    <li>
                        <strong>Input your data:</strong> Use the form on the left to add data points or paste comma-separated values. The chart on the right updates in real time.
                    </li>
                    <li>
                        <strong>Enable preprocessing:</strong> Toggle preprocessing if needed. Choose a method to clean or transform your data. Results are visualized on the right.
                    </li>
                    <li>
                        <strong>Choose forecast settings:</strong> Set the forecast step size and other options based on your needs.
                    </li>
                    <li>
                        <strong>Click "Forecast":</strong> This will run the model and generate predictions.
                    </li>
                    <li>
                        <strong>Review results:</strong> You'll see performance metrics (like MAE or RMSE) and a graph of forecasted values to evaluate how well the model performs.
                    </li>
                </ol>

                <div className="mt-6 flex justify-end">
                    <button
                        className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition"
                        onClick={() => {
                            localStorage.setItem("getting_started", "true");
                            setShowModal(false);
                        }}
                    >
                        Got it
                    </button>
                </div>
            </div>
        </div>
    );
}

export default GuideModal;