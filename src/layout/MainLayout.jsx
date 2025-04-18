import React from "react";
import { Footer, Navbar } from "../components";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className=" container mx-auto my-3 grid grid-cols-12 px-5 pt-[50px] md:pt-[60px] lg:pt-[72px] lg:gap-y-52 md:gap-y-[150px] gap-y-20 lg:pb-[200px] md:pb-[150px] pb-20">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
