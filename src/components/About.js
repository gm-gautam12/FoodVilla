import { about_image } from "../utils/constants";

const About = () => {
    return (
        <div className="flex justify-evenly">
            <div>
            <h1 className="text-4xl font-bold m-8 text-gray-500 p-1">Welcome to The world of</h1>
            <h2 className="text-6xl m-8 my-1 font-extrabold bg-orange-500 text-white p-2.5 rounded-lg">Tasty & Fresh Food</h2>
            <h3 className="text-2xl m-8 my-4 italic text-gray-500">"Better you will feel if you eat a FoodVilla healthy meal"</h3>
            </div>
            <img className="m-2 p-2" src={about_image}/>
        </div>
    )
}

export default About;