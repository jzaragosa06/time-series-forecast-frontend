import { useNavigate } from "react-router-dom";

const Hero = () => {
    const navigate = useNavigate();
    return (
        <div className="flex w-full px-6 py-2 mt-4 border justify-between">
            {/* Left Part */}
            <div className="max-w-2xl space-y-6">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-600 leading-tight">
                    Forecast Time Series <span className="text-blue-800">with Ease</span>
                </h1>

                <h2 className="text-lg md:text-xl text-gray-500">
                    Know your data, know the future
                </h2>

                <span className="text-gray-500 text-sm sm:text-xs">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos error quae praesentium minima. Aspernatur dolorem et autem minus delectus nihil dolorum quia laudantium, ut id animi! Alias nulla ullam illum!
                </span>

                <div className="flex gap-x-3 justify-center mt-4">
                    <button
                        onClick={() => navigate('/analysis')}
                        className="px-4 py-2 rounded-lg font-semibold bg-blue-800 text-white hover:bg-blue-900"
                    >
                        Get Started
                    </button>
                    <button
                        onClick={() => navigate('/about')}
                        className="px-4 py-2 rounded-lg border border-gray-400 font-semibold bg-white hover:bg-gray-100"
                    >
                        Learn More
                    </button>
                </div>
            </div>

            {/* Right Part */}
            <div className="flex flex-1 justify-center">
                <div className="hidden md:flex w-72 h-72 bg-gray-200 rounded-xl shadow-inner items-center justify-center text-gray-500">
                    {/* Replace with an actual image or illustration */}
                    Image
                </div>
            </div>
        </div>
    );
}

export default Hero; 