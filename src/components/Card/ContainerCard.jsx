import {
  ClockIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/20/solid";

const ContainerCard = ({
  className,
  subtitle,
  title,
  description,
  isActive = true,
}) => {
  return (
    <section
      className={`flex relative py-[50px] md:pt-[100px] 2xl:pt-[150px] 2xl:px-[120px] md:px-20 px-[30px] flex-col md:flex-row justify-center items-center gap-5 md:gap-[50px] rounded-xl border-2 border-grey-15 shadow-[6px_6px_0px_1px_#1E1E1E] bg-white w-full ${className}`}
    >
      <article className="absolute top-0  left-0 ">
        <img src="/AbstractDesign.svg" alt="abstrak image" />
      </article>
      <div className="flex flex-col items-center md:items-start gap-[10px] self-stretch md:flex-1">
        <button className="flex py-2 2xl:py-[10px] px-4 2xl:px-[20px] items-start gap-[10px] rounded-md border-2 border-grey-15 bg-white">
          <span className=" text-grey-20 text-center font-outfit text-sm md:text-base 2xl:text-lg font-medium">
            {subtitle}
          </span>
        </button>
        <h2 className=" text-grey-10 text-center md:text-left font-raleway text-3xl md:text-[38px] md:leading-[130%] 2xl:text-[48px] font-bold">
          {title}
        </h2>
      </div>
      {isActive ? (
        <p className="text-grey-20 text-center font-outfit text-base 2xl:text-xl font-medium self-stretch md:flex-1">
          {description}
        </p>
      ) : (
        <div className="flex flex-col justify-center gap-[30px] md:flex-1">
          <p className="text-grey-20 text-center font-outfit text-base 2xl:text-xl font-medium self-stretch md:flex-1">
            {description}
          </p>
          {/* buttons */}
          <div className="grid grid-cols-2 gap-5">
            <button className="flex p-4 col-span-2 md:col-span-1 items-center gap-2 rounded-xl border-2 border-grey-15 bg-orange-99">
              <div className="flex p-[6px] gap-[10px] rounded bg-orange-97 border-2 border-grey-15">
                <EnvelopeIcon className="h-5 w-5" />
              </div>
              <p className="text-grey-20 text-center font-outfit text-base 2xl:text-xl font-medium">
                hello@littlelearners.com
              </p>
            </button>
            <button className="flex p-4 col-span-2 md:col-span-1 items-center gap-2 rounded-xl border-2 border-grey-15 bg-orange-99">
              <div className="flex p-[6px] gap-[10px] rounded bg-orange-97 border-2 border-grey-15">
                <PhoneIcon className="h-5 w-5" />
              </div>
              <p className="text-grey-20 text-center font-outfit text-base 2xl:text-xl font-medium">
                +91 91813 23 2309
              </p>
            </button>
            <button className="flex p-4 col-span-2 md:col-span-1 items-center gap-2 rounded-xl border-2 border-grey-15 bg-orange-99">
              <div className="flex p-[6px] gap-[10px] rounded bg-orange-97 border-2 border-grey-15">
                <MapPinIcon className="h-5 w-5" />
              </div>
              <p className="text-grey-20 text-center font-outfit text-base 2xl:text-xl font-medium">
                Somewhere in the World
              </p>
            </button>
            <button className="flex p-4 col-span-2 md:col-span-1 items-center gap-2 rounded-xl border-2 border-grey-15 bg-orange-99">
              <div className="flex p-[6px] gap-[10px] rounded bg-orange-97 border-2 border-grey-15">
                <ClockIcon className="h-5 w-5" />
              </div>
              <p className="text-grey-20 text-center font-outfit text-base 2xl:text-xl font-medium">
                Office Hours - 9am - 6 pm
              </p>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContainerCard;
