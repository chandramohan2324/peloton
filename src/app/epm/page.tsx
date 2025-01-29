import Features from "@/components/Features";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import Testimonials from "@/components/Testimonials";
import FeaturesEPM from "@/components/FeaturesEPM";
import TestimonialsEPM from "@/components/TestimonialsEPM";
import Video from "@/components/Video";
import Brands from "@/components/Brands";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import CircleEffect from "@/components/ExpandableContent/ExpandableContent";
import ExpandableContent from "@/components/ExpandableContent/ExpandableContent";
import CardView from "@/components/CardView/CardView";
import BlogDetailsPage from "../blog-details/page";

export const metadata: Metadata = {
  title: "JKMP | EPM",
  description: "Enterprise Performance Management",
  // other metadata
};

const Blog = () => {
  return (
    <>
    <Breadcrumb
        pageName="Enterprise Performance Management"
        description="Enterprise Performance Management Cloud enables you to model and plan across finance, HR, supply chain, and sales, streamline the financial close process, and drive better decisions."
      />
      <AboutSectionTwo />
      <FeaturesEPM />
      {/* <CardView /> */}
      <BlogDetailsPage />
      <ExpandableContent />
      <TestimonialsEPM/>
    </>
  );
};

export default Blog;
