import { Bars3BottomRightIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
  const [toogleNavbar, setToggleNavbar] = useState(false);
  const menuItems = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about-us" },
    { name: "Academics", link: "/academics" },
    { name: "Admissions", link: "/admissions" },
    { name: "Student Life", link: "/student-life" },
    { name: "Contacts", link: "/contacts" },
  ];

  const handleToogleNavbar = () => {
    setToggleNavbar(!toogleNavbar);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setToggleNavbar(false);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <>
      <nav className=" relative md:w-full w-[95%] container mx-auto  flex justify-between items-center my-5 h-16 border border-black rounded-xl">
        <div className=" cursor-pointer w-1/2 h-full flex place-content-start">
          <Link
            to="/"
            className="flex items-center border-r rounded-s-xl border-black pr-4 bg-orange-65"
          >
            <img src="/logo.svg" alt="" />
            <p className=" font-semibold">Little Learners</p>
          </Link>
        </div>
        <ul className=" w-1/2 justify-end h-full md:flex hidden">
          {menuItems.map((menu, i) => (
            <div
              className={`   ${i === menuItems.length - 1 ? "" : "border-r"}
           ${i !== 0 ? "" : "border-l border-black"} 
          `}
            >
              <Link
                to={menu.link}
                key={i}
                className={`h-full  md:text-md  hover:bg-orange-75 cursor-pointer p-4 flex justify-center items-center  hover:bg-yellow-400  ${
                  i === menuItems.length - 1 ? " bg-orange-75 rounded-e-xl" : ""
                } ${currentPath === menu.link ? " bg-orange-95" : ""} `}
              >
                {menu.name}
              </Link>
            </div>
          ))}
        </ul>
        <button
          onClick={handleToogleNavbar}
          className="py-4 px-[30px] bg-orange-95 rounded-e-xl h-full md:hidden"
        >
          <Bars3BottomRightIcon className="size-6" />
        </button>
        {toogleNavbar && (
          <div className=" md:hidden absolute rounded-xl w-full p-2  top-20 left-0 ">
            {menuItems.map((menu, i) => (
              <div key={i}>
                <Link
                  to={menu.link}
                  className={`h-full  md:text-md  hover:bg-orange-75 cursor-pointer p-4 flex justify-center items-center  hover:bg-yellow-400  ${
                    i === menuItems.length - 1 ? " bg-orange-75 " : ""
                  } ${currentPath === menu.link ? " bg-orange-95" : ""} `}
                >
                  {menu.name}
                </Link>
              </div>
            ))}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
