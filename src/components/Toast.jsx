

import React, { useEffect, useState } from "react";

const Toast = ({ message, type = "info", onClose, duration = 3000 }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // Trigger fade-in animation
        setVisible(true);

        // Start fade-out before unmounting
        const timer = setTimeout(() => {
            setVisible(false);
            setTimeout(onClose, 300); // match the CSS transition duration
        }, duration);

        return () => clearTimeout(timer);
    }, [onClose, duration]);

    const getBackground = () => {
        switch (type) {
            case "success":
                return "bg-green-500";
            case "error":
                return "bg-red-500";
            case "warning":
                return "bg-yellow-500";
            default:
                return "bg-blue-500";
        }
    };

    return (
        <div
            className={`flex gap-3 fixed top-5 right-5 transition-transform transition-opacity duration-300 transform px-4 py-2 text-white rounded shadow-lg ${getBackground()} ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
                }`}
        >
            <i className="bi bi-info-circle-fill"></i>
            {message}
        </div>
    );
};

export default Toast;
