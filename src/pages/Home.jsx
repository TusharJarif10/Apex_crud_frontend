import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Home() {

    const [users, setUsers] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        loadUsers();
    }, []);


        // const [user, setUser] = useState({
        //     userid: "",
        //     username: "",
        //     email: "",
        //     designation: "",
        //     deptmstcode: ""
        // });
    
        // const { userid, username, email, designation, deptmstcode } = user;
    
        // const handleInputChange = (e) => {
        //     setUser({ ...user, [e.target.name]: e.target.value });
        // };


    const loadUsers = async () => {
        const result = await axios.get("http://localhost:9092/users/all");
        setUsers(result.data);
    }

    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:9092/users/delete/${id}`);
        loadUsers();
    }

    // const viewUser = async (id) => {
    //     await axios.get(`http://localhost:9092/users/${id}`);
    //     loadUsers();
    // }

    return (
        <div className="py-4 mt-10">

            <table className="w-full divide-y divide-gray-200">
                <thead>
                    <tr className="relative">
                        <th className="pl-20 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">userid</th>
                        <th className="pl-24 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">username</th>
                        <th className="pl-24 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">email</th>
                        <th className="pl-24 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">designation</th>
                        <th className="pl-24 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">deptmstcode</th>
                        {/* <th className="pl-24 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">role</th> */}
                        <th className=" py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">

                    {
                        users.map((user, index) => (
                            <tr key={index}>
                                {/* <th scope="row">{index + 1}</th> */}
                                <td className="py-2">{user.userid}</td> {/* Assuming 'name' is a field in the user object */}
                                <td className="py-2">{user.username}</td> {/* Assuming 'email' is a field in the user object */}
                                <td className="py-2">{user.email}</td> {/* Assuming 'position' is a field in the user object */}
                                <td className="py-2">{user.designation}</td> {/* Assuming 'id' is a field in the user object */}
                                <td className="py-2">{user.deptmstcode}</td> {/* Assuming 'department' is a field in the user object */}




                                <td className="py-2">

                                <Link to={`/viewuser/${user.id}`}>
                                    <button
                                        className="mr-1 px-1 py-1 font-medium text-white bg-yellow-500 rounded-md  focus:outline-none transition duration-150 ease-in-out"
                                    >
                                        View
                                    </button>
                                    </Link>

                                    <Link to={`/edituser/${user.id}`}>
                                        <button
                                            className="px-1 py-1 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out"
                                        >
                                            Edit
                                        </button>
                                    </Link>



                                    <button onClick={() => deleteUser(user.id)}
                                        className="ml-1 px-1 py-1 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    }




                </tbody>
            </table>


        </div>
    )
}
