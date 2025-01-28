import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const FeaturesEPM = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Oracle Cloud EPM: Empower Your Business with Seamless Financial Planning and Performance Management"
            paragraph="In today's fast-paced business environment, organizations need advanced tools to ensure they are making data-driven decisions, optimizing their financial performance, and responding swiftly to market changes. Oracle Cloud EPM (Enterprise Performance Management) is the solution that provides a unified platform for managing your organization’s financial processes and performance management needs."
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

export default FeaturesEPM;
