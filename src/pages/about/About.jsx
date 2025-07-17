// import Header from "../../components/Header";

// const About = () => {
//     return (
//         <div>
//             <Header />
//             <div>
//                 <h1 className="flex justify-start text-2xl font-bold mb-4">About the Project</h1>

//                 <div className="flex flex-row gap-x-5">
//                     <div>
//                         <p className="mt-2 text-gray-700">
//                             This project is the result of a capstone research titled <strong>“Automated Time Series Forecasting: Using Hybrid Forecasting Approach”</strong>.
//                             It addresses the challenges in existing forecasting tools — particularly their complexity, inaccessibility, and limited adaptability to different data types.
//                             The system aims to provide an automated, user-friendly platform for accurate time series forecasting, particularly for univariate data.
//                         </p>
//                         <p>
//                             The original system was built using PHP’s Laravel framework for the web interface and Python Flask for forecasting logic. While powerful, the Laravel-based version was tightly coupled and harder to maintain.
//                         </p>
//                         <p className="mt-2 text-gray-700">
//                             The current version separates the frontend (React.js) from the backend (Python Flask) to promote a more modular, lightweight, and scalable architecture.
//                             This shift simplifies development and enables better integration with modern web technologies.
//                         </p>
//                         <p className="mt-2 text-gray-700">
//                             The platform is intended for students, researchers, analysts, and decision-makers who need accessible and interpretable forecasting tools.
//                             It has educational and practical applications in finance, supply chain, city planning, and more.
//                         </p>

//                         <p className="mt-2 text-gray-700">
//                             This study was conducted and development by the students from Pangasinan State University - Urdaneta City Campus
//                         </p>
//                         <ul>
//                             <li> Paulet Crysline Pajo - <strong>Project Lead</strong></li>
//                             <li>Jun Jun M. Zaragosa - <strong>Lead Programmer</strong></li>
//                             <li>Leynard Guinumtad</li>
//                             <li>Janeil Capales</li>
//                             <li> Camile Marticio</li>
//                             <li>Jann Daerick Finulliar</li>
//                         </ul>

//                     </div>
//                     <div>
//                         <div>
//                             <h2 className="text-xl font-semibold">Technical Approach</h2>
//                             <p className="mt-2 text-gray-700">
//                                 The backend performs three key tasks:
//                                 <ul className="list-disc list-inside mt-2 ml-4">
//                                     <li>Preprocessing: Handling missing values and validating series format.</li>
//                                     <li>Forecasting: Applying the hybrid stacking model to perform n-step predictions.</li>
//                                     <li>Comparison: Benchmarking against traditional models like ARIMA, SARIMA, LSTM, and RNN.</li>
//                                 </ul>
//                                 The hybrid model consistently outperformed LSTM and RNN using MAE and MAPE for univariate forecasting.
//                             </p>
//                         </div>

//                         <div>
//                             <h2 className="text-xl font-semibold">Development Methodology</h2>
//                             <p className="mt-2 text-gray-700">
//                                 The application was built using the <strong>SCRUM methodology</strong>, allowing iterative development based on user feedback.
//                                 Key phases included planning, implementation, review, and release. The final web application was evaluated using the System Usability Scale (SUS), achieving a strong usability score of 3.71 out of 4.
//                             </p>
//                         </div>

//                         <div>
//                             <h2 className="text-xl font-semibold">Backend API Features</h2>
//                             <p className="mt-2 text-gray-700">
//                                 The Python Flask backend exposes RESTful endpoints to support:
//                                 <ul className="list-disc list-inside mt-2 ml-4">
//                                     <li>Time series validation</li>
//                                     <li>Handling missing values</li>
//                                     <li>Accessing model information</li>
//                                     <li>Generating univariate forecasts</li>
//                                 </ul>
//                                 This design enables seamless interaction with the React frontend while remaining lightweight and maintainable.
//                             </p>
//                         </div>


//                     </div>
//                 </div>
//             </div >
//         </div>


//     );
// };

// export default About;


import Header from "../../components/Header";

const About = () => {
    return (
      <div className="min-h-screen bg-white text-left">
          <Header />
          <div className="max-w-6xl mx-auto px-6 py-10">
              <h1 className="text-3xl font-bold mb-8 text-gray-900">About the Project</h1>

              <div className="grid md:grid-cols-2 gap-10">
                  {/* Left Column */}
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>
                          This project is the result of a capstone research titled{" "}
                          <strong>“Automated Time Series Forecasting: Using Hybrid Forecasting Approach”</strong>.
                          It addresses the challenges in existing forecasting tools — particularly their complexity,
                          inaccessibility, and limited adaptability to different data types. The system aims to provide
                          an automated, user-friendly platform for accurate time series forecasting, particularly for univariate data.
                      </p>
                      <p>
                          The original system was built using PHP’s Laravel framework for the web interface and Python Flask for forecasting logic.
                          While powerful, the Laravel-based version was tightly coupled and harder to maintain.
                      </p>
                      <p>
                          The current version separates the frontend (React.js) from the backend (Python Flask) to promote a more modular,
                          lightweight, and scalable architecture. This shift simplifies development and enables better integration
                          with modern web technologies.
                      </p>
                      <p>
                          The platform is intended for students, researchers, analysts, and decision-makers who need accessible and interpretable
                          forecasting tools. It has educational and practical applications in finance, supply chain, city planning, and more.
                      </p>
                      <p>
                          This study was conducted and developed by the students from Pangasinan State University - Urdaneta City Campus:
                      </p>
                      <ul className="list-disc list-inside space-y-1">
                          <li>Paulet Crysline Pajo – <strong>Project Lead</strong></li>
                          <li>Jun Jun M. Zaragosa – <strong>Lead Programmer</strong></li>
                          <li>Leynard Guinumtad</li>
                          <li>Janeil Capales</li>
                          <li>Camile Marticio</li>
                          <li>Jann Daerick Finulliar</li>
                      </ul>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-8">
                      <section className="p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                          <h2 className="text-xl font-semibold mb-2 text-gray-900">Technical Approach</h2>
                          <p className="text-gray-700">
                              The backend performs three key tasks:
                          </p>
                          <ul className="list-disc list-inside mt-2 ml-1 space-y-1 text-gray-700">
                              <li>Preprocessing: Handling missing values and validating series format.</li>
                              <li>Forecasting: Applying the hybrid stacking model to perform n-step predictions.</li>
                              <li>Comparison: Benchmarking against ARIMA, SARIMA, LSTM, and RNN.</li>
                          </ul>
                          <p className="mt-2 text-gray-700">
                              The hybrid model consistently outperformed LSTM and RNN using MAE and MAPE for univariate forecasting.
                          </p>
                      </section>

                      <section className="p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                          <h2 className="text-xl font-semibold mb-2 text-gray-900">Development Methodology</h2>
                          <p className="text-gray-700">
                              The application was built using the <strong>SCRUM methodology</strong>, allowing iterative development based on user feedback.
                              Key phases included planning, implementation, review, and release. The final web application was evaluated using the System Usability Scale (SUS),
                              achieving a strong usability score of 3.71 out of 4.
                          </p>
                      </section>

                      <section className="p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                          <h2 className="text-xl font-semibold mb-2 text-gray-900">Backend API Features</h2>
                          <p className="text-gray-700">
                              The Python Flask backend exposes RESTful endpoints to support:
                          </p>
                          <ul className="list-disc list-inside mt-2 ml-1 space-y-1 text-gray-700">
                              <li>Time series validation</li>
                              <li>Handling missing values</li>
                              <li>Accessing model information</li>
                              <li>Generating univariate forecasts</li>
                          </ul>
                          <p className="mt-2 text-gray-700">
                              This design enables seamless interaction with the React frontend while remaining lightweight and maintainable.
                          </p>
                      </section>
                  </div>
              </div>
          </div>
      </div>
  );
};

export default About;
