import Card from "../components/Card/Card";
import ContainerCard from "../components/Card/ContainerCard";
import MainLayout from "../Layout/MainLayout";
import { SubTitle } from "../UI/SubTitle";

const AboutUs = () => {
  return (
    <MainLayout>
      <ContainerCard className="col-span-12" />

      <section className="flex flex-col gap-[50px] md:gap-20 2xl:gap-[100px] col-span-12">
        <div className="flex flex-col items-center gap-[10px] md:gap-[14px] 2xl:gap-5">
          <SubTitle>Mission & Visions</SubTitle>
          <h2 className=" text-grey-10 text-center font-raleway text-4xl md:text-[48px] md:leading-[130%] font-bold">
            Our Mission & Visions
          </h2>
          <p className="text-grey-20 text-center font-outfit text-lg  font-medium  md:w-3/5">
            We are here to provide a nurturing and inclusive environment where
            young minds can thrive, fostering a love for learning and personal
            growth.
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:gap-10 2xl:gap-[60px] md:justify-between gap-[30px]">
          <Card />
          <Card />
        </div>
      </section>
    </MainLayout>
  );
};

export default AboutUs;
