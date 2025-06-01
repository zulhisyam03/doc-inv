import React from 'react';
import { FaArrowRight,FaRegSave  } from 'react-icons/fa'; // Ikon panah dari react-icons

const BlueButton = ({ children, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="
                bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded-lg text-sm
                transition-all duration-300 ease-in-out transform hover:scale-105
                shadow-lg hover:shadow-xl
                flex items-center justify-center space-x-2
                border-2 border-blue-500
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
            "
        >
            <span>{children}</span>
            <FaRegSave className="w-4 h-4" /> {/* Ikon panah */}
            {/* <FaArrowRight className="w-2 h-2" /> Ikon panah */}
        </button>
    );
};

export default BlueButton;