import { LOGO_URL } from "../utils/constants";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {

    const [btnNameReact, setBtnNameReact] = useState("login");
    //console.log("Header Render")

    useEffect(() => {
        //console.log("useEffect render")
    },[]);

    return(
        <div className='flex justify-between bg-pink-200 shadow-lg sm:bg-yellow-50 lg:bg-green-200'>
            <div className='Logo-container'>
                <img className='w-56'
                src={LOGO_URL}>
                </img>
            </div>
            <div className='nav-items'>
                    <ul className="flex p-4 m-4">
                        <li className="px-4">
                            <Link>Name</Link></li>
                        <li className="px-4">
                            <Link to="/about">About Us</Link></li>
                        <li className="px-4">
                            <Link to="/contact">Contact Us</Link></li>
                        <li className="px-4">
                            <Link>Cart</Link></li>

                        <button className="login"
                            onClick={() => {
                                btnNameReact === "login"
                                ? setBtnNameReact("logout")
                                : setBtnNameReact("login");
                            }}
                            >
                                {btnNameReact}
                        </button>
                    </ul>
                </div>
        </div>
    )
};

export default Header;