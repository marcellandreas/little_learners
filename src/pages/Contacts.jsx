import ContainerCard from "../components/Card/ContainerCard";
import MainLayout from "../Layout/MainLayout";
import { SubContainer } from "../UI/SubContainer";

const Contacts = () => {
  return (
    <MainLayout>
      <ContainerCard
        title="Feel Free To Connect With Us"
        description="We value open communication and are eager to assist you with any inquiries. Feel free to reach out to us through any of the following contact methods"
        subtitle="Contact Us"
        className="col-span-12"
        isActive={false}
      />
      <section className="flex flex-col gap-[50px] md:gap-20 2xl:gap-[100px] col-span-12">
        <SubContainer
          title="Student Information"
          description="If you have specific questions or wish to request more information about Little Learners Academy, please complete the contact form below. Kindly provide the following details to help us better understand your needs"
          heading="Contact Form"
        />
        <div className="flex relative">
          <div className="flex justify-center items-center gap-5 absolute left-1/2 -top-5 -translate-x-1/2 translate-y-2  w-full">
            <button className="flex py-4 px-6 justify-center items-center rounded-md border-2 border-grey-15 bg-orange-90">
              <img
                src="/assets/facebook.svg"
                className="h-6 w-6"
                alt="Mission"
              />
            </button>
            <button className="flex py-4 px-6 justify-center items-center rounded-md border-2 border-grey-15 bg-orange-90">
              <img src="/assets/twiter.svg" className="h-6 w-6" alt="Mission" />
            </button>
            <button className="flex py-4 px-6 justify-center items-center rounded-md border-2 border-grey-15 bg-orange-90">
              <img
                src="/assets/linkedin.svg"
                className="h-6 w-6"
                alt="Mission"
              />
            </button>
          </div>

          <form className="grid w-full grid-cols-2 pt-20 lg:pt-[100px] 2xl:pt-[120px] px-[30px] lg:px-20 2xl:px-[100px] pb-[30px] lg:pb-20 2xl:pb-[100px] gap-[30px] lg:gap-10 2xl:gap-[50px] rounded-xl border-2 border-grey-15 bg-white shadow-[4px_4px_0_1px_#1e1e1e] 2xl:shadow-[6px_6px_0_2px_#1e1e1e]">
            <div className=" col-span-2 md:col-span-1 flex flex-col gap-[10px] lg:gap-[14px] 2xl:gap-5">
              <label className=" text-grey-30 text-xl font-semibold font-outfit">
                Parent Name
              </label>
              <input
                className="flex p-5 2xl:p-[30px] items-center rounded-md border-2 border-grey-15 bg-orange-99 placeholder:text-grey-35 placeholder:text-base 2xl:placeholder:text-xl placeholder:font-medium"
                placeholder="Enter Parent Name"
                type="text"
              />
            </div>
            <div className=" col-span-2 md:col-span-1 flex flex-col gap-[10px] lg:gap-[14px] 2xl:gap-5">
              <label className=" text-grey-30 text-xl font-semibold font-outfit">
                Email Address
              </label>
              <input
                className="flex p-5 2xl:p-[30px] items-center rounded-md border-2 border-grey-15 bg-orange-99 placeholder:text-grey-35 placeholder:text-base 2xl:placeholder:text-xl placeholder:font-medium"
                placeholder="Enter Email Address"
                type="text"
              />
            </div>
            <div className=" col-span-2 md:col-span-1 flex flex-col gap-[10px] lg:gap-[14px] 2xl:gap-5">
              <label className=" text-grey-30 text-xl font-semibold font-outfit">
                Phone Number
              </label>
              <input
                className="flex p-5 2xl:p-[30px] items-center rounded-md border-2 border-grey-15 bg-orange-99 placeholder:text-grey-35 placeholder:text-base 2xl:placeholder:text-xl placeholder:font-medium"
                placeholder="Enter Phone Number"
                type="text"
              />
            </div>
            <div className=" col-span-2 md:col-span-1 flex flex-col gap-[10px] lg:gap-[14px] 2xl:gap-5">
              <label className=" text-grey-30 text-xl font-semibold font-outfit">
                Student Name
              </label>
              <input
                className="flex p-5 2xl:p-[30px] items-center rounded-md border-2 border-grey-15 bg-orange-99 placeholder:text-grey-35 placeholder:text-base 2xl:placeholder:text-xl placeholder:font-medium"
                placeholder="Enter Student Name"
                type="text"
              />
            </div>
            <div className=" col-span-2 md:col-span-1 flex flex-col gap-[10px] lg:gap-[14px] 2xl:gap-5">
              <label className=" text-grey-30 text-xl font-semibold font-outfit">
                Student Age
              </label>
              <input
                className="flex p-5 2xl:p-[30px] items-center rounded-md border-2 border-grey-15 bg-orange-99 placeholder:text-grey-35 placeholder:text-base 2xl:placeholder:text-xl placeholder:font-medium"
                placeholder="Enter Student Age"
                type="text"
              />
            </div>
            <div className="col-span-2 md:col-span-1 flex flex-col gap-[10px] lg:gap-[14px] 2xl:gap-5">
              <label className="text-grey-30 text-xl font-semibold font-outfit">
                Program of Interest
              </label>
              <div className="relative">
                <select
                  className="w-full appearance-none flex p-5 2xl:p-[30px] items-center rounded-md border-2 border-grey-15 bg-orange-99 text-grey-35 text-base 2xl:text-xl font-medium pr-12"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a program
                  </option>
                  <option value="nursery">Nursery</option>
                  <option value="kindergarten">Kindergarten</option>
                  <option value="primary">Primary</option>
                </select>

                {/* Custom Arrow */}
                <div className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-grey-35">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="col-span-2  flex flex-col gap-[10px] lg:gap-[14px] 2xl:gap-5">
              <label className=" text-grey-30 text-xl font-semibold font-outfit">
                Message
              </label>
              <textarea
                className="flex p-5 2xl:p-[30px] items-center rounded-md border-2 border-grey-15 bg-orange-99 placeholder:text-grey-35 placeholder:text-base 2xl:placeholder:text-xl placeholder:font-medium"
                placeholder="Enter your Message"
                type="text"
              />
            </div>
            <button
              type="submit"
              className="flex justify-center items-center py-4 px-[34px] rounded-lg border-2 border-grey-15 bg-orange-75 col-span-2 "
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </MainLayout>
  );
};

export default Contacts;
