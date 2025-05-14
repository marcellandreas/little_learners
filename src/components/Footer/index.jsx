import React from "react";
import { Link } from "react-router-dom";
import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/20/solid";
import { PhoneArrowDownLeftIcon } from "@heroicons/react/24/outline";

const Footer = () => {
  const MenuFooter = [
    {
      id: 1,
      Title: "Home",
      content: ["Features", "Our Testimonials", "FAQ"],
    },
    {
      id: 2,
      Title: "About Us",
      content: [
        "Our Mission",
        "Our Vission",
        "Awards and Recognitions",
        "History",
        "Teachers",
      ],
    },
    {
      id: 3,
      Title: "Academics",
      content: ["Special Features", "Gallery"],
    },
    {
      id: 4,
      Title: "Contact Us",
      content: ["Information", "Map & Direction"],
    },
  ];

  const mediaSosial = [
    {
      id: 1,
      name: "facebook",
    },
    {
      id: 2,
      name: "twiter",
    },
    {
      id: 3,
      name: "linkedin",
    },
  ];

  return (
    <footer className="grid mb-10  lg:mx-10 lg:w-auto mx-auto w-[95%] pd:px-20 px-[30px]  gap-[30px] lg:gap-10 2xl:gap-[50px] pt-[60px] 2xl:pt-[100px] lg:pt-20 lg:pb-10 rounded-xl border-2 border-grey-15 bg-white shadow-[6px_6px_0px_1px_#1E1E1E]">
      <div className=" col-span-6 flex flex-col  gap-10 lg:gap-20  lg:grid lg:grid-cols-12">
        <section className="flex  lg:col-span-5  flex-col items-center gap-10">
          <article className="flex flex-col gap-10">
            <Link to="/" className="flex items-center gap-4">
              <img
                src="/logo.svg"
                alt="Little Learners Logo"
                className="w-8 h-8"
              />
              <p className="text-xl font-semibold">Little Learners</p>
            </Link>
            <p className="text-base 2xl:text-xl text-grey-30 font-medium text-center lg:text-left font-outfit">
              We believe in the power of play to foster creativity,
              problem-solving skills, and imagination.
            </p>
          </article>

          <article className="flex flex-col gap-5  w-full ">
            {[
              { type: "email", text: "hello@littlelearners.com" },
              { type: "phone", text: "+62 812-3456-7890" },
              { type: "address", text: "Jl. Belajar No. 123, Jakarta" },
            ].map((item, index) => {
              const iconMap = {
                email: <EnvelopeIcon className="w-full h-full" />,
                phone: <PhoneArrowDownLeftIcon className="w-full h-full" />,
                address: <MapPinIcon className="w-full h-full" />,
              };

              return (
                <div key={index} className="flex items-center gap-2 rounded-md">
                  <div className="w-10 h-10 rounded border-2 border-grey-15 bg-orange-97 p-[6px]">
                    {iconMap[item.type]}
                  </div>
                  <p className="font-outfit text-grey-15 text-base 2xl:text-xl font-medium">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </article>
        </section>
        <section className="grid grid-cols-8  lg:col-span-7 gap-[30px] lg:gap-5 ">
          {MenuFooter.map((section) => (
            <div
              key={section.id}
              className=" col-span-4 lg:col-span-2 flex flex-col gap-5"
            >
              <p className=" text-grey-15 font-outfit text-base font-semibold">
                {section.Title}
              </p>
              <div className=" text-grey-20 lg:flex lg:gap-4 2xl:text-xl lg:flex-col text-base font-medium cursor-pointer ">
                {section.content.map((item, index) => (
                  <p
                    key={`${section.id}-${index}`}
                    className=" text-base font-outfit font-medium 2xl:text-xl text-grey-20"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
      <div className="col-span-6 flex flex-col   gap-4 lg:gap-5">
        <hr className="h-[1px] w-full" />
        <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-5">
          <div className="flex gap-[2px]">
            {[
              "Terms of Service",
              "|",
              "Privacy Policy",
              "|",
              "Cookie Policy",
            ].map((item, index) => (
              <Link to="/" key={index}>
                <p className=" text-grey-20 text-sm lg:text-base 2xl:text-xl font-medium font-outfit">
                  {item}
                </p>
              </Link>
            ))}
          </div>
          <div className="flex gap-[10px]">
            {mediaSosial.map((item) => (
              <Link
                to="/"
                key={item.id}
                className="p-3 rounded-md border-2 
              border-grey-15 bg-orange-97 hover:bg-orange-95 transition-all duration-300"
              >
                <img
                  src={`/assets/${item.name}.svg`}
                  alt={item.name}
                  className="w-6 h-6"
                />
              </Link>
            ))}
          </div>
        </div>
        <hr className="h-[1px] w-full" />
        <p className=" text-grey-40 font-outfit text-center text-sm font-medium lg:text-base 2xl:text-xl">
          Copyright © [2023] Little Learners Academy. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
