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
    <footer className="container md:w-full w-[95%] mx-auto px-6 md:px-20 pt-10 pb-5 md:py-20 font-outfit border border-grey-15 rounded-xl mb-5 flex flex-col gap-[30px] md:gap-[50px] shadow-[6px_6px_0px_1px_#1E1E1E]">
      <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-20">
        {/* Left Side */}
        <section className="md:w-1/2 flex flex-col gap-10">
          <article className="flex flex-col gap-5">
            <Link to="/" className="flex items-center gap-2">
              <img
                src="/logo.svg"
                alt="Little Learners Logo"
                className="w-8 h-8"
              />
              <p className="text-xl font-semibold">Little Learners</p>
            </Link>
            <p className="text-base md:text-lg text-gray-700">
              We believe in the power of play to foster creativity,
              <br />
              problem-solving skills, and imagination.
            </p>
          </article>

          <article className="flex flex-col gap-4 text-gray-800">
            <div className="flex items-center gap-3">
              <EnvelopeIcon className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
              <p className="text-base md:text-xl font-medium">
                hello@littlelearners.com
              </p>
            </div>
            <div className="flex items-center gap-3">
              <PhoneArrowDownLeftIcon className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
              <p className="text-base md:text-xl font-medium">
                +62 812-3456-7890
              </p>
            </div>
            <div className="flex items-center gap-3">
              <MapPinIcon className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
              <p className="text-base md:text-xl font-medium">
                Jl. Belajar No. 123, Jakarta
              </p>
            </div>
          </article>
        </section>

        {/* Right Side */}
        <section className="md:w-1/2 flex  justify-around flex-wrap md:justify-between gap-6 ">
          {MenuFooter.map((section) => (
            <div key={section.id} className="flex flex-col gap-4 min-w-[120px]">
              <p className="text-lg font-semibold text-gray-900 cursor-pointer">
                {section.Title}
              </p>
              <div className="flex flex-col gap-2 text-base text-gray-600">
                {section.content.map((item, index) => (
                  <p
                    key={`${section.id}-${index}`}
                    className="hover:text-blue-500 transition cursor-pointer"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
      <div className="flex flex-col gap-4 md:gap-[30px] items-center w-full">
        <hr className=" border-t-[1px] w-full" />
        <div className="flex flex-col md:flex-row gap-5 justify-between items-center self-stretch">
          <div className="flex gap-[6px] md:gap-4 items-start">
            <span>Terms of Service</span> |<span>Privacy Policy</span> |{" "}
            <span>Cookie Policy</span>
          </div>
          <div className="flex gap-4 items-start">
            {mediaSosial.map((data) => (
              <span
                key={data.id}
                className=" p-4  flex items-center justify-center bg-orange-95 border rounded-md"
              >
                <img
                  src={`/assets/${data.name}.svg`}
                  alt={data.name}
                  className=" h-6 w-6"
                />
              </span>
            ))}
          </div>
        </div>
        <hr className=" border-t-[1px] w-full" />
        <p>Copyright © [2023] Little Learners Academy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
