import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function AddUser() {
    let navigate = useNavigate();

    const [user, setUser] = useState({
        userid: "",
        username: "",
        email: "",
        designation: "",
        deptmstcode: ""
    });

    const { userid, username, email, designation, deptmstcode } = user;

    const handleInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        // API call to save user
        await axios.post("http://localhost:9092/users/create", user);
        navigate("/");
    };

    return (
        <div className="max-w-lg mx-auto bg-black dark:bg-gray-800 rounded-lg px-8 py-10 flex flex-col items-center mt-10 shadow-xl drop-shadow-md">
            <h1 className="text-xl font-bold text-center text-lime-500 mb-8">
                Create New User
            </h1>
            <form onSubmit={(e) => onSubmit(e)} className="w-full flex flex-col gap-4">
                <div className="flex items-start flex-col justify-start">
                    <label className="text-sm text-lime-500 mr-2">User ID:</label>
                    <input
                        name="userid" // Added name attribute
                        value={userid}
                        onChange={(e) => handleInputChange(e)}
                        type="text"
                        className="w-full px-3 bg-slate-400 font-semibold py-2 rounded-md border border-gray-800"
                    />
                </div>

                <div className="flex items-start flex-col justify-start">
                    <label className="text-sm text-lime-500 mr-2">Username:</label>
                    <input
                        name="username" // Added name attribute
                        value={username}
                        onChange={(e) => handleInputChange(e)}
                        type="text"
                        className="w-full px-3 bg-slate-400 font-semibold py-2 rounded-md border border-gray-800"
                    />
                </div>

                <div className="flex items-start flex-col justify-start">
                    <label className="text-sm text-lime-500 mr-2">Email:</label>
                    <input
                        name="email" // Added name attribute
                        value={email}
                        onChange={(e) => handleInputChange(e)}
                        type="email"
                        className="w-full px-3 bg-slate-400 font-semibold py-2 rounded-md border border-gray-800"
                    />
                </div>

                <div className="flex items-start flex-col justify-start">
                    <label className="text-sm text-lime-500 mr-2">Designation:</label>
                    <input
                        name="designation" // Added name attribute
                        value={designation}
                        onChange={(e) => handleInputChange(e)}
                        type="text"
                        className="w-full px-3 bg-slate-400 font-semibold py-2 rounded-md border border-gray-800"
                    />
                </div>

                <div className="flex items-start flex-col justify-start">
                    <label className="text-sm text-lime-500 mr-2">Deptmstcode:</label>
                    <input
                        name="deptmstcode" // Added name attribute
                        value={deptmstcode}
                        onChange={(e) => handleInputChange(e)}
                        type="text"
                        className="w-full px-3 bg-slate-400 font-semibold py-2 rounded-md border border-gray-800"
                    />
                </div>

                {/* <div className="flex items-start flex-col justify-start">
                    <label className="text-sm text-lime-500 mr-2">Role:</label>
                    <input
                        name="role" // Added name attribute
                        value={role}
                        onChange={(e) => handleInputChange(e)}
                        type="text"
                        className="w-full px-3 bg-slate-400 font-semibold py-2 rounded-md border border-gray-800"
                    />
                </div> */}

                <div className="flex justify-center gap-2 items-center">
                    <button
                        type="submit"
                        className="bg-lime-500 text-gray-700 font-medium py-2 px-4 rounded-md shadow-sm"
                    >
                        Create
                    </button>

                    <Link to="/">
                        <button className="bg-red-500 text-gray-800 font-medium py-2 px-4 rounded-md shadow-sm">
                            Cancel
                        </button>
                    </Link>

                </div>
            </form>
        </div>
    );
}
