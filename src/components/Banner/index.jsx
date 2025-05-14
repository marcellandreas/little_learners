import React from "react";

const Banner = () => {
  const statsData = [
    {
      id: 1,
      value: "+7000",
      label: "Students Passed Out",
    },
    {
      id: 2,
      value: "+37",
      label: "Awards & Recognitions",
    },
    {
      id: 3,
      value: "+15",
      label: "Experience Educators",
    },
  ];

  return (
    <section className="flex flex-col md:flex-row gap-10 justify-center md:gap-[50px] 2xl:gap-[60px] items-center col-span-12">
      <div className=" md:w-1/2 w-full bg-black">
        <img src="/assets/Banner.svg" alt="banner section" />
      </div>
      <article className=" md:w-1/2 w-full flex flex-col gap-10 md:gap-[50px] 2xl:gap-[60px]">
        <div className="flex flex-col gap-[18px] md:gap-5 self-stretch">
          <div className="flex gap-[10px] flex-col items-center self-stretch">
            <p className=" text-base md:text-lg 2xl:text-2xl font-medium font-outfit text-grey-15 border-b-2">
              Welcome to Little Learners Academy
            </p>
            <p className=" text-3xl md:text-[40px] 2xl:text-[54px] md:leading-[130%] font-extrabold font-raleway text-center md:text-left text-grey-10">
              Where Young Minds Blossom and{" "}
              <span className=" text-orange-65">Dreams Take Flight.</span>{" "}
            </p>
          </div>
          <p className=" text-base 2xl:text-xl text-center text-grey-20 font-medium font-outfit">
            Our kinder garden school provides a nurturing and stimulating
            environment, fostering a love for learning that lasts a lifetime.
            Join us as we embark on an exciting educational journey together!
          </p>
        </div>
        <div className="rounded-lg border-2 border-grey-15 bg-orange-95 shadow-[4px_4px_0px_1px_#FFBE99] p-10 flex flex-col md:flex-row gap-5 items-center md:justify-around self-stretch font-outfit">
          {statsData.map((item, index) => (
            <div key={item.id}>
              <div className="flex flex-col items-center self-stretch">
                <p className="text-center text-4xl 2xl:text-[44px] font-extrabold">
                  {item.value}
                </p>
                <span className="font-medium text-center text-base 2xl:text-lg">
                  {item.label}
                </span>
              </div>
              {index !== statsData.length - 1 && (
                <hr className="w-full border md:hidden" />
              )}
            </div>
          ))}
        </div>
      </article>
    </section>
  );
};

export default Banner;
