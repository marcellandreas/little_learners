import React from "react";

const CardContent = ({ classNameCard, icon, title, description }) => {
  return (
    <section className={`flex flex-col relative  h-[280px] ${classNameCard}`}>
      <div className="flex pl-6 -top-7 absolute">
        <div className="p-4 rounded-lg border-grey-15 bg-orange-90  border-2">
          <img src={icon} alt={`icon`} className="w-5 h-5 2xl:w-6 2xl:h-6" />
        </div>
      </div>
      <section className="flex h-full pt-[50px] lg:pt-[60px] 2xl:pt-20 px-[30px] lg:px-10 pb-[30px] 2xl:px-[50px] lg:pb-10 2xl:pb-[50px] flex-col gap-4 2xl:gap-5 rounded-xl border-2 border-grey-15 bg-white shadow-[4px_4px_0px_1px_#1E1E1E] 2xl:shadow-[6px_6px_0px_2px_#1E1E1E]">
        <h2 className=" text-grey-15 font-raleway text-[22px] lg:text-2xl 2xl:text-3xl leading-[130%] font-bold">
          {title}
        </h2>
        <p className=" text-grey-30 font-outfit text-base 2xl:text-xl font-medium">
          {description}
        </p>
      </section>
    </section>
  );
};

export default CardContent;
