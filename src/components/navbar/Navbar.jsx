import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
    const links = <>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/"}>Listed Books</NavLink></li>
        <li><NavLink to={"/"}>Pages to Read</NavLink></li>
    </>


    return (
        <div>
            <div className="container mx-auto py-10 navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost text-lg lg:hidden">
                            <FaBars />
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-2">
                            {links}
                            <a className="btn btn-sm text-white text-lg 
                            bg-green-600 rounded-lg hover:bg-green-700">Sign In</a>
                            <a className="btn btn-sm text-white text-lg 
                            bg-sky-400 rounded-lg hover:bg-sky-600">Sign up</a>
                        </ul>
                    </div>
                    <a className="text-3xl font-bold">Book Vibe</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-4 text-lg">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end hidden lg:flex gap-4">
                    <a className="btn px-6 text-white text-lg bg-[#23BE0A] rounded-lg hover:bg-green-700">Sign In</a>
                    <a className="btn px-6 text-white text-lg bg-sky-400 rounded-lg hover:bg-sky-600">Sign up</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;