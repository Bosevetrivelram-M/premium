import { useNavigate } from "react-router-dom";

export const Home = () => {
    const navigate = useNavigate();
    const overallDetails = [
        {heading: "Total Policies", noOfPolicy: 100},
        {heading: "Inforce Policies", noOfPolicy: 70},
        {heading: "Total Due", noOfPolicy: 20},
        {heading: "Paid Due", noOfPolicy: 10},
        {heading: "Pending Due", noOfPolicy: 10},
    ]
    return(
        <div className="flex h-screen border">
            <div className="w-1/2 flex bg-white">
                <div className="flex items-center justify-center w-full">
                    <img 
                        src="/src/assets/lic-logo.png"
                        alt="LIC-logo"
                        className="w-1/4 h-1/4"
                    />
                </div>
            </div>

            <div className="w-1/2 bg-amber-400 space-x-5 flex items-center justify-center">
                    <div className="flex flex-col items-center justify-center space-y-4">
                        <div className="py-4 px-5 border-3 border-[#1d4e9e] bg-white rounded-2xl flex flex-col items-center jusitfy-center">
                            <div>
                                <img 
                                    src="/src/assets/profile.jpg"
                                    alt="profile"
                                    className="w-32 h-32 rounded-full object-cover mb-5"
                                />
                            </div>
                            <p className="font-semibold pb-3">Good Morning Bose</p>
                            {overallDetails.map((detail, index) => (
                                <div key={index} className="w-72 pb-2.5">
                                    <div className="flex items-center justify-between border-[#1d4e9e] bg-[#f1f1f1] p-4 rounded-xl">
                                        <p className="font-normal text-lg">{detail.heading}</p>
                                        <div className="bg-[#D7DEEA] rounded-full p-2 w-10 flex items-center justify-center">
                                            <p className="font-semibold text-lg">{detail.noOfPolicy}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex items-center justify-center space-x-3">
                            <button
                                className="border-3 border-[#1d4e9e] bg-white rounded-md py-1 px-3 font-semibold"
                                onClick={() => navigate("/entry")}
                            >
                                Go to Save
                            </button>
                            <button
                                className="border-3 border-[#1d4e9e] bg-white rounded-md py-1 px-3 font-semibold"
                                onClick={() => navigate("/search")}
                            >
                                Go to Search
                            </button>
                        </div>
                </div>
            </div>
        </div>
    );
}