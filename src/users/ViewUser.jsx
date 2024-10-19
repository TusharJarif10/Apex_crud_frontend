import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function ViewUser() {

    const [user, setUser] = useState({
        userid: "",
        username: "",
        email: "",
        designation: "",
        deptmstcode: ""
    });


    const { id } = useParams();

    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:9092/users/${id}`, user);
        setUser(result.data);
    }



    return (
        <div>
            <div className="bg-white overflow-hidden shadow rounded-lg border mt-10">
                <div className="px-4 py-10 sm:px-6">
                    <h3 className="text-2xl leading-6 font-medium tracking-wider text-gray-900">
                        User Profile of : {user.userid}
                    </h3>
                    {/* <p className="mt-1 max-w-2xl text-sm text-gray-500">
            This is some information about the user.
        </p> */}
                </div>
                <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                    <dl className="sm:divide-y sm:divide-gray-200">
                        <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                User ID
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {user.userid}
                            </dd>
                        </div>
                        <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Username
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {user.username}
                            </dd>
                        </div>
                        <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Email
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {user.email}
                            </dd>
                        </div>
                        <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Designation
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {user.designation}
                            </dd>
                        </div>
                        <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Deptmstcode
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {user.deptmstcode}
                            </dd>
                        </div>
                    </dl>
                </div>

                <Link to="/">
                    <button className="bg-black text-lime-500 p-2 rounded-md mb-5 mt-10 mx-2 "> Back to Home page</button>
                </Link>

            </div>
        </div>
    )
}
