import ContainerCard from "../components/Card/ContainerCard";
import MainLayout from "../Layout/MainLayout";
import { SubContainer } from "../UI/SubContainer";
import AdmissionsData from "../data/Admissions.json";

const Admissions = () => {
  const TheadTable1 = [
    "Program",
    "Age Group",
    "Annual Tuition",
    "Registration Fee",
    "Activity Fee",
  ];

  const TableData_1 = AdmissionsData.feeStructure;
  const TableData_2 = AdmissionsData.additionalServices;
  return (
    <MainLayout>
      <ContainerCard
        title="Join Our Family of Young Learners"
        description="At Little Learners Academy, we welcome you to embark on an exciting educational journey for your child. Our admission process is designed to be transparent, straightforward, and inclusive. Here's a step-by-step guide to joining our school"
        subtitle="Admissions"
        className="col-span-12"
      />
      <section className="flex flex-col gap-[50px] md:gap-20 2xl:gap-[100px] col-span-12">
        <SubContainer
          title="Admission Process"
          heading="Process"
          description="Embark on a remarkable educational journey with us! Our Admission and Enrollment process is the gateway to providing your child with an exceptional learning experience at our kindergarten school"
        />
        {/* cards */}
        <section className="grid grid-cols-3 md:gap-y-20 md:gap-x-10   2xl:gap-[50px]">
          {[1, 2, 3, 4, 5, 6].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center col-span-3 md:col-span-1 "
            >
              {/* angka */}
              <div className="flex flex-col">
                <button className="flex py-[10px] px-6 items-center gap-[10px] rounded-lg border-2 border-grey-15 bg-white shadow-[4px_4px_0_1px_#1e1e1e] 2xl:shadow-[6px_6px_0_2px_#1e1e1e] ">
                  <span className=" text-grey-10 font-raleway text-4xl font-extrabold">
                    0{item}
                  </span>
                </button>
                <div className="flex h-[63px] flex-col items-center justify-center relative ">
                  <img
                    className=" absolute top-[-10px] z-50"
                    src="/assets/circle.svg"
                    alt=""
                  />
                  <div className="flex px-[6px] w-2 flex-col  justify-center items-center flex-1 bg-orange-80 relative">
                    <div className="h-[50px] w-[2px] top-3 bg-black z-30 absolute"></div>
                  </div>
                </div>
              </div>
              {/* text container */}
              <div className="flex p-[30px] flex-col gap-[14px] lg:gap-4 lg:p-10 2xl:gap-5 2xl:p-[50px] rounded-lg border-2 border-grey-15 bg-white shadow-[4px_4px_0_1px_#1e1e1e] 2xl:shadow-[6px_6px_0_2px_#1e1e1e]">
                <h3 className=" text-grey-10 font-raleway text-2xl lg:text-3xl 2xl:text-4xl font-bold">
                  Inquiry
                </h3>
                <p
                  className="text-grey-30 font-outfit text-base 2xl:text-xl
                 font-medium"
                >
                  Submit an inquiry form through our website or contact our
                  admissions office to express your interest in Little Learners
                  Academy.
                </p>
              </div>
              <div className="flex px-[6px] md:hidden w-2 flex-col -z-10  justify-center items-center flex-1 bg-orange-80 ">
                <div className="h-[50px] w-[2px] top-3 bg-black z-30 "></div>
              </div>
            </div>
          ))}
        </section>
      </section>
      <section className="flex flex-col gap-[50px] md:gap-20 2xl:gap-[100px] col-span-12">
        <SubContainer
          title="Fee Structure"
          heading="Our Features"
          description="Our fee structure is transparent, and we strive to keep our fees competitive within the education sector. The fees vary based on the program, age group, and any additional services chosen."
        />
        <div className="flex flex-col 2xl:gap-20 lg:gap-[60px] gap-10 ">
          <table className="flex overflow-x-auto 2xl:p-[60px] lg:p-[50px] px-[30px] pb-[50px] py-[30px] flex-col gap-[30px]   rounded-xl border-2 border-grey-15 bg-white shadow-[4px_4px_0_1px_#1e1e1e] 2xl:shadow-[6px_6px_0_2px_#1e1e1e] custom-scrollbar">
            <thead className=" 2xl:h-20 flex items-center rounded-xl  bg-white">
              <tr className="flex justify-between  w-full bg-orange-95">
                {TheadTable1.map((item, index) => (
                  <th
                    key={index}
                    className="flex justify-center items-center py-[18px] px-[30px] border border-grey-15 flex-1"
                  >
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="flex flex-col rounded-xl">
              {TableData_1.map((item, index) => (
                <tr key={index} className="flex items-center justify-between ">
                  <td className="flex  justify-center px-[30px] py-6 gap-[10px] border border-grey-15 flex-1 ">
                    <p className=" text-grey-15 font-outfit text-lg font-medium">
                      {item.program}
                    </p>
                  </td>
                  <td className="flex justify-center px-[30px] py-6 gap-[10px] border border-grey-15 flex-1">
                    <p className=" text-grey-15 font-outfit text-lg font-medium">
                      {item.ageGroup}
                    </p>
                  </td>
                  <td className="flex justify-center px-[30px] py-6 gap-[10px] border border-grey-15 flex-1">
                    <p className=" text-grey-15 font-outfit text-lg font-medium">
                      {item.annualTuition}
                    </p>
                  </td>
                  <td className="flex justify-center px-[30px] py-6 gap-[10px] border border-grey-15 flex-1">
                    <p className=" text-grey-15 font-outfit text-lg font-medium">
                      {item.registrationFee}
                    </p>
                  </td>
                  <td className="flex justify-center px-[30px] py-6 gap-[10px] border border-grey-15 flex-1  ">
                    <p className=" text-grey-15 font-outfit text-lg font-medium ">
                      {item.activityFee}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <table className="flex overflow-x-auto 2xl:p-[60px] lg:p-[50px] px-[30px] pb-[50px] py-[30px] flex-col gap-[30px]   rounded-xl border-2 border-grey-15 bg-white shadow-[4px_4px_0_1px_#1e1e1e] 2xl:shadow-[6px_6px_0_2px_#1e1e1e] custom-scrollbar">
            <thead className=" 2xl:h-20 flex items-center rounded-xl  bg-white">
              <tr className="flex w-full bg-orange-95 ">
                <th className="flex items-center py-[18px] px-[30px] border border-grey-15 flex-1 rounded-xl ">
                  <p className=" text-grey-10 font-raleway text-2xl font-bold">
                    Additional Services
                  </p>
                </th>
              </tr>
            </thead>
            <tbody className="flex flex-col rounded-xl">
              {TableData_2.map((item, index) => (
                <tr key={index} className="flex items-center justify-between ">
                  <td className="flex  justify-center px-[30px] py-6 gap-[10px] border border-grey-15 flex-1 ">
                    <p className=" text-grey-15 font-outfit text-lg font-medium">
                      {item.service}
                    </p>
                  </td>
                  <td className="flex justify-center px-[30px] py-6 gap-[10px] border border-grey-15 flex-1">
                    <p className=" text-grey-15 font-outfit text-lg font-medium">
                      {item.fee}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </MainLayout>
  );
};

export default Admissions;
