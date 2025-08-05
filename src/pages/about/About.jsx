import Header from "../../components/Header";
import StackingModelImg from "../../assets/alg1.png";
import Phases from "../../assets/alg2.png";
import Contributor from "./Contributors";

const About = () => {
    return (
        <div className="min-h-screen bg-white text-left">
            <Header />
            <div className="max-w-6xl mx-auto px-6 py-10">
                <h1 className="text-3xl font-bold mb-8 text-gray-700">About the Project</h1>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Left Column */}
                    <div className="space-y-4 text-justify text-gray-700 leading-relaxed">
                        <p>
                            This project is part of the capstone project and research titled{" "}
                            <strong>“Automated Time Series Forecasting: Using Hybrid Forecasting Approach”</strong>.
                            It addresses the challenges in existing forecasting tools — particularly their complexity,
                            inaccessibility, and limited adaptability to different data types. The system aims to provide
                            an automated, user-friendly platform for accurate time series forecasting, particularly for univariate data.
                        </p>
                        <p className="mt-2 text-gray-700">
                            Based on the experimental result of the study, the hybrid model consistently outperformed LSTM and RNN using MAE and MAPE for univariate forecasting.
                            Results indicate that while the hybrid model effectively forecasts univariate time series, its performance on multivariate time series is less accurate compared to the benchmark model.
                        </p>
                        <p>
                            The original system was built using PHP’s Laravel framework for the web interface and Python Flask for forecasting logic.
                            While powerful, the Laravel-based version was tightly coupled and harder to maintain.
                        </p>
                        <p>
                            The current version separates the frontend (React.js) from the backend (Python Flask) to promote a more modular,
                            lightweight, and scalable architecture. This approach separates the concern between the frontend and backend, simplifying
                            development and enabling better integration with modern web technologies.
                        </p>
                        <p>
                            The platform is intended for students, researchers, analysts, and decision-makers who need accessible and interpretable
                            forecasting tools. It has educational and practical applications in finance, supply chain, city planning, and more.
                        </p>
                        <p>
                            This study was conducted and developed by the students from Pangasinan State University - Urdaneta City Campus:
                        </p>
                        <Contributor />

                    </div>


                    {/* Right Column */}
                    <div className="space-y-8">
                        <section className="text-justify">
                            <h2 className="text-lg font-semibold mb-2 text-gray-900">Experimental Approach</h2>
                            <p className="mt-2 text-gray-700">
                                The study progressed through three phases:
                                first, non-deep learning models were identified through
                                literature review and evaluated on a sample of the M4 competition
                                dataset to find high-performing candidates; second, these top models
                                were combined into a stacked hybrid model (refer to second figure); and third, the hybrid model's performance
                                was benchmarked against standard forecasting models like ARIMA, SARIMA, RNN, LSTM,
                                and VAR for both univariate and multivariate time series forecasting. The figure below
                                summarize these phases.
                            </p>
                            <div>
                                <img src={Phases} alt="Phases of developing the system" className="w-full h-auto" />
                                <p className="text-sm text-center text-gray-600 mt-1 italic">
                                    Figure 1: Overview of the three-phase experimental process, from model selection to hybridization and benchmarking.
                                </p>
                            </div>                            <p className="mt-2 text-gray-700">
                                The hybrid model (i.e, algorithmic framework) for univariate time series was derived
                                and integrated into a web application to allow users to interact with the model. During forecasting,
                                the data passess are processed as seen in the figure.
                            </p>
                            <div>
                                <img src={StackingModelImg} alt="Stacking Model Diagram" className="w-full h-auto" />
                                <p className="text-sm text-center text-gray-600 mt-1 italic">
                                    Figure 2: Stacking regression architecture used in the hybrid model for improved forecasting accuracy.
                                </p>
                            </div>
                            <p className="mt-2 text-gray-700">
                                The figure describes the stacking regression involved in forecasting.
                                This approach combines different prediction models into a single model,
                                working at levels or layers. This approach uses the concept of
                                meta-learner, which minimizes the errors of the predictions.
                            </p>
                        </section>


                        <section className="text-justify">
                            <h2 className="text-lg font-bold text-gray-900">Technical Approach</h2>

                            <p className="text-gray-700 text-base">
                                The backend architecture consists of three primary stages:
                            </p>

                            <ol className="list-decimal list-inside space-y-3 text-gray-700 text-base">
                                <li>
                                    <span className="font-semibold text-gray-800">Preprocessing:</span>{' '}
                                    Missing values are handled and input formats are validated using Python's
                                    <code className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono">pandas</code>
                                    library and DataFrame objects.
                                </li>

                                <li>
                                    <span className="font-semibold text-gray-800">Forecasting:</span>{' '}
                                    A hybrid stacking model is implemented using the{' '}
                                    <code className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono">skforecast</code>
                                    library. This model performs n-step univariate time series forecasting. It uses random search
                                    for hyperparameter tuning, builds a stacking ensemble of base models, and applies the final
                                    hybrid model for prediction.
                                </li>

                                <li>
                                    <span className="font-semibold text-gray-800">Explanation Generation:</span>{' '}
                                    Forecast results are interpreted and described using the{' '}
                                    <code className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono">Gemini Pro API</code>.
                                    It combines both the forecast and relevant background information to generate a natural
                                    language explanation.
                                </li>
                            </ol>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
