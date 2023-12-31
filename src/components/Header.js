import React from "react";
import { Link } from "react-router-dom";


const Title = () => (
    <a href="/">
    <img alt="logo" className="w-20 m-5" src="https://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4=w256-rw"/>
    </a>
)

const Header = () => {
    return(
        <div className="flex justify-between m-3 border-2 border-grey shadow-md">
             <Title/>
             <div className="flex">
                <ul className="flex justify-between">
                    <Link to = "/"><li className="m-5 p-5">Home</li></Link>
                   <Link to = "/about" ><li className="m-5 p-5">About</li></Link>
                   <Link to = "/contact"><li className="m-5 p-5">Contact</li></Link>
                   <Link to = "/cart"><li className="m-5 p-5">Cart</li></Link>
                </ul>
             </div>
        </div>
    
    )
};


export default Header;