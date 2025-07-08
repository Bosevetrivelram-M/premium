import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

export const EntrySection = ({ onSave }) => {
    const [data, setData] = useState({
        name: "",
        policyNumber: "",
        premiumDate: "",
        phoneNumber: "",
        address: "" 
    });
    
    const navigate = useNavigate();

    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    }
    const handleSave = () => {
        onSave(data);
        console.log(data);
        setData({
            name: "",
            policyNumber: "",
            premiumDate: "",
            phoneNumber: "",
            address: "" 
        });
    }

    return (
            <div className="flex flex-col space-y-5 justify-center items-center h-screen">
                <div className="flex flex-col items-center border border-amber-500 rounded-md px-16 pt-14 pb-16 space-y-4">
                    <div className="space-y-2">
                        <h2>Name</h2>
                        <input 
                            type="text"
                            name="name"
                            value={data.name}
                            onChange={handleChange}
                            required
                            className="border border-blue-500 rounded-md"
                        />
                    </div>
                    <div className="space-y-2">
                        <h2>Policy Number</h2>
                        <input 
                            type="number"
                            name="policyNumber"
                            value={data.policyNumber}
                            onChange={handleChange}
                            required 
                            className="border border-blue-500 rounded-md"
                        />
                    </div>
                    <div className="space-y-2">
                        <h2>Premium date</h2>
                        <DatePicker
                            name="premiumDate"
                            value={data.premiumDate}
                            selected={data.premiumDate}
                            onChange={(date) => setData({...data, premiumDate: date})}
                            className="border border-blue-500 rounded-md"
                        />
                    </div>
                    <div className="space-y-2">
                        <h2>Phone number</h2>
                        <input 
                            type="number" 
                            name="phoneNumber"
                            value={data.phoneNumber}
                            onChange={handleChange}
                            required
                            className="border border-blue-500 rounded-md"
                        />
                    </div>
                    <div className="space-y-2">
                        <h2>Address</h2>
                        <input 
                            name="address" 
                            id="address"
                            value={data.address}
                            onChange={handleChange}
                            required
                            className="border border-blue-500 rounded-md"
                        />
                    </div>
                    <div>
                        <button 
                            className="border border-amber-500 bg-blue-400 rounded-md py-1 px-3"
                            onClick={handleSave}
                        >
                            Save
                        </button>
                    </div>
                </div>
                
                <div className="flex space-x-4">
                    <button
                        className="border border-amber-500 bg-blue-400 rounded-md py-1 px-3"
                        onClick={() => navigate("/search")}
                    >
                        Go to Search
                    </button>

                    <button
                        className="border border-amber-500 bg-blue-400 rounded-md py-1 px-3"
                        onClick={() => navigate("/")}
                    >
                        Exit
                    </button>
                </div>
            </div>
            
    );
}