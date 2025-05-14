import React from "react";
import MainLayout from "../Layout/MainLayout";
import {
  Banner,
  FAQ,
  OurBenefits,
  OurPages,
  OurTestimonials,
} from "../components";

const LandingPage = () => {
  return (
    <MainLayout>
      <Banner />
      <OurBenefits />
      <OurTestimonials />
      <FAQ />
      {/* <OurPages /> */}
    </MainLayout>
  );
};

export default LandingPage;
