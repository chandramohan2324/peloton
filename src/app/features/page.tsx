import Features from "@/components/Features";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "JKMP | ERP",
  description: "Enterprice Resource Planning",
  // other metadata
};

const Blog = () => {
  return (
    <>
    <Breadcrumb
        pageName="Enterprice Resource Planning"
        description="Oracle Cloud ERP is a complete, modern, cloud ERP suite that provides your teams with advanced capabilities, such as AI to automate the manual processes that slow them down, analytics to react to market shifts in real time, and automatic updates to stay current and gain a competitive advantage."
      />
      <Features />
      <Testimonials />
    </>
  );
};

export default Blog;
