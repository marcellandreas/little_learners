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

      <section className="flex flex-col gap-[50px] md:gap-20 2xl:gap-[100px] col-span-12">
        <SubContainer
          heading="Our Achievements"
          title="Our Awards and Recognitions"
          description="Little Learners Academy takes pride in our commitment to delivering high-quality education and outstanding student experiences. We are honored to have received various awards and recognitions for our dedication to early childhood education. These accolades reflect our team's relentless efforts in creating an exceptional learning environment for our students."
        />
      </section>
      <section className="flex flex-col gap-[50px] md:gap-20 2xl:gap-[100px] col-span-12">
        <SubContainer
          heading="Our Progressive Journey"
          title="Our History"
          description="Founded with a passion for early education in 2005, our kindergarten school boasts a rich history of empowering young learners to reach their potential through innovative teaching methods and a supportive learning environment"
        />
      </section>
      <section className="flex flex-col gap-[50px] md:gap-20 2xl:gap-[100px] col-span-12">
        <SubContainer
          heading="Our Teachers With Experties"
          title="Our Team Members"
          description="At Little Learners Academy, our teaching team is the heart of our educational journey. We take great pride in employing highly qualified and passionate educators who possess a deep understanding of early childhood development. Our teachers create a warm and engaging atmosphere, encouraging curiosity, instilling confidence, and fostering a love for learning."
        />
      </section>
    </MainLayout>
  );
};

export default AboutUs;
