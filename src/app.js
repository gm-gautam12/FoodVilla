import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";


const AppLayout = () => {
    return(
        <>
        <Header/>
        <Body/>
        <Footer/>
        </>
    );
};


const root  = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);









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