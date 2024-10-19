import { Link } from "react-router-dom"
export default function Navbar() {
    return (
        <div>


            <nav className="flex flex-row items-center justify-between bg-black rounded-md px-4 py-4">

                <Link to="/">
                    <h2 className="text-lime-500 text-2xl font-bold cursor-pointer">
                        Apex Crud
                    </h2>
                </Link>

                <ul className="md:flex items-center justify-between text-base text-lime-500 pt-4 md:pt-0">
                    <li>
                        <Link to="/adduser">
                            <button className="border p-2">Add User</button>
                        </Link>

                    </li>
                    {/* <li><a className="md:p-4 py-3 px-0 block" href="#">Treatments</a></li>
                <li><a className="md:p-4 py-3 px-0 block" href="#">Blog</a></li>
                <li><a className="md:p-4 py-3 px-0 block md:mb-0 mb-2" href="#">Contact Us</a></li> */}
                </ul>
            </nav>
        </div>

    )
}
