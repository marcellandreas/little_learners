import Card from "../components/Card/Card";
import ContainerCard from "../components/Card/ContainerCard";
import MainLayout from "../Layout/MainLayout";

const AboutUs = () => {
  return (
    <MainLayout>
      <section className="col-span-12">
        <ContainerCard />
        <span className="my-20">a</span>
        <Card />
      </section>
    </MainLayout>
  );
};

export default AboutUs;
