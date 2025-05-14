import { SubTitle } from "./SubTitle";

export const SubContainer = ({ heading, title, description }) => {
  return (
    <div className="flex flex-col items-center gap-[10px] md:gap-[14px] 2xl:gap-5">
      <SubTitle>{heading}</SubTitle>
      <h2 className=" text-grey-10 text-center font-raleway text-4xl md:text-[48px] md:leading-[130%] font-bold">
        {title}
      </h2>
      <p className="text-grey-20 text-center font-outfit text-lg  font-medium  md:w-3/5">
        {description}
      </p>
    </div>
  );
};
