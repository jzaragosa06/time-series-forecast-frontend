import Nav from "./Nav";

const Header = ({ show_guide = false }) => {
    return (
        <header className="w-full flex items-center justify-between px-6 py-4 bg-white">
            <div className="flex items-center gap-6">
                <img src="/ts-logo.png" alt="Logo" className="w-10 h-10" />
                <h1 className="text-xl font-extrabold text-gray-600">DataForesight</h1>
                {show_guide && (
                    <div className="max-w-xl text-sm text-gray-500 text-left">
                        This application allows you to perform time series forecasting,
                        telling you the likely events that will happen based on your time series data.
                        To proceed, add your data, then select forecast options.
                    </div>
                )}
            </div>
            <div className="hidden md:block">
                <Nav />
            </div>
        </header>
    );
};

export default Header;
