import React from "react";
import { Footer, Navbar } from "../components";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className=" container mx-auto my-3 grid grid-cols-12 px-5">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
