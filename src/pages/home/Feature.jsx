const features = [
    {
        title: "Effortless Forecasting",
        desc: "Paste your time series data and get instant, accurate forecasts.",
        icon: (
            <svg className="w-8 h-8 text-blue-800" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M3 17l6-6 4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        title: "AI Explanations",
        desc: "Let AI explain your forecast results in simple, clear language.",
        icon: (
            <svg className="w-8 h-8 text-blue-800" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke="currentColor" />
                <path d="M8 15h8M8 11h8M8 7h8" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        title: "Minimal Steps",
        desc: "Clean, intuitive interface—no data science experience needed.",
        icon: (
            <svg className="w-8 h-8 text-blue-800" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="4" y="4" width="16" height="16" rx="4" />
                <path d="M9 10h6v4H9z" />
            </svg>
        ),
    },
    {
        title: "No Sign Up Needed",
        desc: "Start forecasting instantly—no account or sign up required.",
        icon: (
            <svg className="w-8 h-8 text-blue-800" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 4a8 8 0 100 16 8 8 0 000-16zm0 0v8m0 4h.01" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
];

const Feature = () => {
    return (
        <section className="w-full max-w-5xl mx-auto px-4 py-8 mt-2">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 bg-white rounded-xl shadow-sm">
                {features.map((f, i) => (
                    <div
                        key={i}
                        className="flex flex-col items-center text-center space-y-3 p-4"
                    >
                        <div className="flex items-center justify-center bg-blue-50 rounded-full w-12 h-12 mb-2">
                            {f.icon}
                        </div>
                        <h3 className="text-base font-semibold text-gray-700">{f.title}</h3>
                        <p className="text-gray-500 text-xs">{f.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Feature;