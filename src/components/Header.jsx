import Nav from "./Nav";

const Header = () => {
    return (
        <header className="w-full flex items-center justify-between px-6 py-4 bg-white">
            <div className="flex items-center gap-4">
                <img src="/public/ts-logo.png" alt="Logo" className="w-10 h-10" />
                <h1 className="text-xl font-extrabold text-gray-600">DataForesight</h1>
            </div>
            <Nav />
        </header>
    );
};



export default Header;