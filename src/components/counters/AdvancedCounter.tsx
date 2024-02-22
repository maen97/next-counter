"use client"
import { useState, useEffect, useRef } from 'react';

const AdvancedCounter = ({ step = 1, min = 0, max = 100 }) => {
    // Ref to store the last counter value
    const lastCounter = useRef<number | null>(null);

    const [count, setCount] = useState<number>(min);

    // Effect to initialize count from localStorage on component mount
    useEffect(() => {
        // Ensure proper initialization even on server-side rendering
        if (typeof window === 'undefined') {
            setCount(min);
        }

        // Retrieve last stored count from localStorage
        const storedCount = localStorage.getItem('counter');
        lastCounter.current = storedCount ? +storedCount : null;

        // Set the count to the last stored value or the default min
        setCount(storedCount ? +storedCount : min);
    }, []);

    const handleStore = (value: number) => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('counter', value.toString());
        }
    };

    const handleIncrement = () => {
        setCount(prevCount => {
            const newCount = prevCount + step;
            if (newCount <= max) {
                handleStore(newCount);
                return newCount;
            } else {
                return prevCount;
            }
        });
    };

    const handleDecrement = () => {
        setCount(prevCount => {
            const newCount = prevCount - step;
            if (newCount >= min) {
                handleStore(newCount);
                return newCount;
            } else {
                return prevCount;
            }
        });
    };

    return (
        <>
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
                        aria-label="Counter"
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

            {/* Display the last count */}
            <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-24">
                <section className="flex justify-center">
                    <article>
                        <h2 style={{
                            opacity: lastCounter.current ? 1 : 0
                        }}>
                            {/* Display the last counter value */}
                            <span className="flex tabular-nums text-zinc-100 text-5xl font-extrabold mb-2 transition-[_--num] duration-[3s] ease-out [counter-set:_num_var(--num)] supports-[counter-set]:before:content-[counter(num)]" style={{ "--num": lastCounter.current ?? 0 } as React.CSSProperties}>
                                <span className="supports-[counter-set]:sr-only">{lastCounter.current ?? 0}</span>
                            </span>
                            <span className="inline-flex font-semibold bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-violet-300 mb-2">Last Count</span>
                        </h2>
                    </article>
                </section>
            </div>
        </>
    );
}

export default AdvancedCounter;
