export const CardContent = ({ id, icon, title, description }) => {
  return (
    <section className="flex relative flex-col min-h-36  items-start self-stretch md:col-span-4 ">
      <div className="flex pl-6 -top-7 gap-[10px] absolute">
        <div className="p-4 rounded-lg border-grey-15 bg-orange-90  border-2">
          <img src={icon} alt={`${id}-${title} icon`} className="w-6 h-6" />
        </div>
      </div>
      <div className="flex h-full pt-[50px] pb-[30px] px-[30px] md:px-10 md:pt-[60px] md:pb-10  flex-col gap-4 rounded-xl border-2 border-grey-15 shadow-[4px_4px_0px_1px_#1E1E1E]">
        <h3 className=" text-[22px] md:text-[24px] 2xl:text-[28px] md:leading-[130%]  font-raleway text-grey-10 font-bold">
          {title}
        </h3>
        <p className=" text-grey-30 font-outfit text-base 2xl:text-xl font-medium">
          {description}
        </p>
      </div>
    </section>
  );
};
