export const SubTitle = ({ children }) => {
  return (
    <button className="flex py-2 2xl:py-[10px] px-4 2xl:px-[20px] items-start gap-[10px] rounded-md border-2 border-grey-15 bg-white">
      <span className=" text-grey-20 text-center font-outfit text-sm md:text-base 2xl:text-lg font-medium">
        {children}
      </span>
    </button>
  );
};
