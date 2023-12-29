import React from "react";
import {Outlet} from 'react-router-dom';
import Header from "./Components/header/Header";
import Footer from "./Components/Footer/Footer";

function Layout () {
    return (
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}

export default Layout;