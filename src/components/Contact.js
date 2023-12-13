import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
    return (
            <div className="flex justify-between">
                <img className="m-8" src="https://foodfire-app.netlify.app/Contact-Us.13c5d28a.png"/>
                <div className="m-10">
                <h1 className="text-4xl font-bold m-8 text-gray-500 p-1">We are here to Help</h1>
                  <h2 className="text-6xl m-8 font-extrabold bg-orange-500 text-white p-2.5 rounded-lg">You can Reach to us</h2>
                  <div className="flex justify-center">
                  <h3 className="m-8 p-1 bg-blue-500 w-20 text-center rounded-md text-white"><Link to="https://www.linkedin.com/in/gautam-mishra-151745211/">LinkedLn</Link></h3>
                  <h3 className="m-8 p-1 bg-black w-20 text-center rounded-md text-white"><Link to="https://github.com/gm-gautam12">GitHub</Link></h3>
                  </div>
            </div>
            </div>
    )
}

export default Contact;