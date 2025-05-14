import Card from "../components/Card/Card";
import ContainerCard from "../components/Card/ContainerCard";
import MainLayout from "../Layout/MainLayout";
import { SubContainer } from "../UI/SubContainer";

const AboutUs = () => {
  return (
    <MainLayout>
      <ContainerCard className="col-span-12" />
      <section className="flex flex-col gap-[50px] md:gap-20 2xl:gap-[100px] col-span-12">
        <SubContainer
          heading="Mission & Visions"
          title="Our Mission & Visions"
          description=" We are here to provide a nurturing and inclusive environment where
            young minds can thrive, fostering a love for learning and personal
            growth."
        />
        <div className="flex flex-col md:flex-row md:gap-10 2xl:gap-[60px] md:justify-between gap-[30px]">
          <Card />
          <Card />
        </div>
      </section>
    </MainLayout>
  );
};

export default AboutUs;
