import React from 'react';
import './Layout.style.scss'
import {ToastContainer} from "react-toastify";
import Header from "./Header/Header";
import {Outlet} from "react-router-dom";
import Footer from "./Footer/Footer";
import ScrollToTopButton from "./ui/ScrollTopButton/ScrollTopButton";
import MenuProvider from "../context/MenuProvider";
import MenuBox from "./ui/MenuBox/MenuBox";

function Layout(props) {
  return (
    <>
      {/* --------> FOOTER <-------- */}
      <MenuProvider>
        <Header/>
        <MenuBox/>
      </MenuProvider>
      
      {/* --------> FOOTER <-------- */}
      
      {/* --------> MAIN CONTENT <-------- */}
      <Outlet/>
      {/* --------> MAIN CONTENT <-------- */}
      
      {/* --------> FOOTER <-------- */}
      <Footer/>
      {/* --------> FOOTER <-------- */}
      
      {/* --------> HELPER FEATURES <-------- */}
      <ScrollToTopButton/>
      <ToastContainer limit={1}/>
      {/* --------> HELPER FEATURES <-------- */}
    </>
  );
}

export default Layout;