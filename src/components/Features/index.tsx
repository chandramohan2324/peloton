import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Oracle Fusion ERP: Empowering Businesses with Integrated, Scalable Solutions"
            paragraph="Oracle Fusion ERP (Enterprise Resource Planning) is a cloud-based, comprehensive solution that integrates financial, procurement, supply chain, and project management processes into one seamless system. Designed to help businesses of all sizes improve operational efficiency, Oracle Fusion ERP provides real-time insights, enhances collaboration, and supports smarter decision-making."
            center
          />
          <SectionTitle
            title="Key Features"
            paragraph=" "
            center
          />
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
