import { useNavigate } from "react-router-dom";

const Nav = () => {
    const navigate = useNavigate();

    return (
        <nav className="flex gap-6 items-center text-gray-600 text-sm">
            <span
                onClick={() => window.location.href = "https://github.com/jzaragosa06/time-series-forecast-backend"}
                className="cursor-pointer hover:text-black flex items-center gap-1"
            >
                <i className="bi bi-github"></i>
                Code
            </span>
            <span
                onClick={() => navigate("/about")}
                className="cursor-pointer hover:text-black flex items-center gap-1"
            >
                <i className="bi bi-question-circle-fill"></i>
                About
            </span>
        </nav>
    );
};


export default Nav; 