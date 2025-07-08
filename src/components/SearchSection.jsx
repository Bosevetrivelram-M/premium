import { useEffect, useState } from "react";

export const SearchSection = ({entries}) => {
    const [searchData, setSearchData] = useState("");
    const [inputValue, setInputValue] = useState("");
    const [results, setResults] = useState([]);
    
    const handleClick = () => {
        setSearchData(inputValue);    
    }

    useEffect(() => {
        if(searchData.trim() === "")
        {
            setResults([]);
            return;
        }

        const filtered = entries.filter((entry) => 
            Object.values(entry)
            .map((val) => val.toString().toLowerCase())
            .some(val => val.includes(searchData.toLowerCase())
        ));

        setResults(filtered);
    }, [searchData, entries]);


    return (
        <div>
            <div className="flex flex-col space-y-2 items-center justify-center mt-40">
                <input 
                    type="text"
                    name="search"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="border border-blue-500 rounded-md"
                />
                <button
                    className="border border-amber-500 bg-blue-400 rounded-md py-1 px-3"
                    onClick={handleClick}
                >
                    Search
                </button>
            </div>

            {results.length > 0 ?
                <div>
                    <h2>Results</h2>
                    {results.map((result, index) => (
                        <div key={result.policyNumber || index}>
                            <div>
                                <h2>Name:</h2>
                                <p>{result.name}</p>
                            </div>
                            <div>
                                <h2>Policy Number:</h2>
                                <p>{result.policyNumber}</p>
                            </div>
                            <div>
                                <h2>Premium date:</h2>
                                <p>{result.premiumDate.toLocaleDateString()}</p>
                            </div>
                            <div>
                                <h2>Phone Number:</h2>
                                <p>{result.phoneNumber}</p>
                            </div>
                            <div>
                                <h2>Last date:</h2>
                                <p>
                                    {result.premiumDate 
                                        ? new Date(result.premiumDate.getFullYear(), result.premiumDate.getMonth() + 1, result.premiumDate.getDate()).toLocaleDateString()
                                        : 'Not Allowed'
                                    }
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                : 
                <div>
                    No results found.
                </div>
            }
        </div>
    );
}