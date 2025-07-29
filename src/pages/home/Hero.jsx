import { useNavigate } from "react-router-dom";
import HeroImg from '../../assets/hero-section-img.svg?react';

const Hero = () => {
    const navigate = useNavigate();
    return (
        <div className="flex w-full px-6 py-12 mt-4  justify-between">
            {/* Left Part */}
            <div className="max-w-2xl space-y-3">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-600 leading-tight">
                    Forecast Time Series <span className="text-blue-800">with Ease</span>
                </h1>

                <h2 className="text-lg md:text-xl text-gray-500">
                    Know your data, know the future
                </h2>


                <span className="text-gray-500 text-sm">
                    Time series forecasting has never been easier. Simply add your data, and let the system do the forecasting for you.
                    Have the AI explain the result to you!
                </span>

                <div className="flex gap-x-3 justify-center mt-4">
                    <button
                        onClick={() => navigate('/analysis')}
                        className="px-4 py-2 rounded-lg font-semibold bg-blue-800 text-white hover:bg-blue-900 hover:cursor-pointer"
                    >
                        Get Started
                    </button>
                    <button
                        onClick={() => navigate('/about')}
                        className="px-4 py-2 rounded-lg border border-gray-400 font-semibold bg-white hover:bg-gray-100 hover:cursor-pointer"
                    >
                        Learn More
                    </button>
                </div>
            </div>

            {/* Right Part */}
            <div className="flex flex-1 justify-center">
                <div className="hidden md:flex w-96 h-96 bg-gray-white items-center justify-center text-gray-500">

                    <HeroImg />
                </div>
            </div>
        </div >
    );
}

export default Hero; 