import { useNavigate } from "react-router-dom";

export const Home = () => {
    const navigate = useNavigate();
    return(
        <div className="flex justify-center items-center h-screen">
            <div className="flex items-center space-x-5">
                <button
                    className="border border-amber-500 bg-blue-400 rounded-md py-1 px-3"
                    onClick={() => navigate("/entry")}
                >
                    Go to Save
                </button>
                <button
                    className="border border-amber-500 bg-blue-400 rounded-md py-1 px-3"
                    onClick={() => navigate("/search")}
                >
                    Go to Search
                </button>
            </div>
        </div>
    );
}