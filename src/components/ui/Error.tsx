const Error = () => {

    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen bg-black text-gray-100">
                <h1 className="text-6xl font-bold text-red-500">
                    <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#e8eaed"><path d="M481-84Q346-220 266.5-303t-121-137.5Q104-495 92-533.82q-12-38.82-12-86.6Q80-712 144-776q64-64 156-64 45 0 87 16.5t75 47.5l-62 216h121l-46 383 127-423H480l71-212q25-14 52.5-21t56.5-7q92 0 156 64t64 156q0 46.12-11.5 84.56Q857-497 816-442T696-304q-79 83-215 220Zm-60-144 32-272H320l73-254q-22-11-45-18.5t-48-7.5q-66.29 0-113.14 46.86Q140-686.29 140-620q0 32.67 12.5 65.33Q165-522 196.5-478t86 103.5Q337-315 421-228Zm136-18q140-136 201.5-223.5T820-620.37Q820-686 773.14-733 726.29-780 660-780q-15.33 0-30.67 3-15.33 3-29.33 8l-36 109h117L557-246Zm124-414ZM320-500Z"/></svg>
                </h1>
                <h2 className="text-2xl font-semibold mt-4">Oops! Page is broken</h2>
                <p className="mt-2 text-gray-100">The page you are looking for doesn’t exist or has been moved.</p>

                <a
                    href="/"
                    className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition-colors duration-300"
                >
                    Go to Homepage
                </a>
            </div>
        </>
    )
}

export default Error