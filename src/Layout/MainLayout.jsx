import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <>
      {/* navbar */}
      <Navbar />
      {/* main */}
      <main className="grid grid-cols-12 w-full container h-screen">
        {/* Banner */}
      </main>
      {/* footer */}
      <Footer />
    </>
  );
};

export default MainLayout;
