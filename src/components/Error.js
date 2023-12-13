import { useRouteError,Link } from "react-router-dom";

const Error = () => {
    
    const err = useRouteError();
    return(
        <div>
            <button className="m-2 p-2 bg-black text-white rounded-md"><Link>Home</Link></button>
            <img src="https://static.vecteezy.com/system/resources/previews/001/857/111/original/error-404-page-not-found-landing-page-concept-for-mobile-and-pc-free-vector.jpg"/>
        </div>
    )
}

export default Error;