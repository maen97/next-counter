"use client"
import { useState } from "react"
const Counter = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        setCount(count - 1);
    };
    return (
        <form className="max-w-xs mx-auto flex justify-center mt-12">
            <div className="relative flex items-center max-w-[11rem]">
                <button
                    type="button"
                    id="decrement-button"
                    className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11"
                    onClick={handleDecrement}
                >
                    <svg
                        className="w-3 h-3 text-gray-900"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 2"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M1 1h16"
                        />
                    </svg>
                </button>
                <input
                    type="text"
                    id="counter-input"
                    className="bg-gray-50 border-x-0 border-gray-300 h-11 font-medium text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-4 outline-none"
                    placeholder=""
                    value={count}
                    readOnly
                />
                <button
                    type="button"
                    id="increment-button"
                    className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11"
                    onClick={handleIncrement}
                >
                    <svg
                        className="w-3 h-3 text-gray-900"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 18"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 1v16M1 9h16"
                        />
                    </svg>
                </button>
            </div>
        </form>
    )
}

export default Counter