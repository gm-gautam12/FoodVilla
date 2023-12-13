import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";


const AppLayout = () => {
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        errorElement: <Error/>,
        children: [
            {
                path:"/",
                element: <Body/>,
            },
            {
                path:"/about",
                element: <About/>,
            },
            {
                path:"/contact",
                element:<Contact/>,
            },
            {
                path:"/restaurant/:resId",
                element:<RestaurantMenu/>,
            },
        ],
    },
])


const root  = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router = {appRouter}/>);









// dummy layout of page  
/*  
   STRUCTURE OF OUR APP
    Header
     - logo
     - nav items
     - cart
    Body
     -banner (cuisines like or offers)
     -search bar (center m prefferd)
     -Restuarant lists 
         -Restaurant Cards
            --Image
            --name
            --rating
            --cuisines
    Footer
     - links 
     - copyright
*/