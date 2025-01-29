import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import Image from "next/image";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Details Page | Free Next.js Template for Startup and SaaS",
  description: "This is Blog Details Page for Startup Nextjs Template",
  // other metadata
};

const BlogDetailsPage = () => {
  return (
    <>
      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
                  <div className="flex flex-wrap items-center">
                    <div className="mb-5 mr-10 flex items-center">
                      <div className="mr-4">
                      </div>
                                          </div>
                    <div className="mb-5 flex items-center">
                    </div>
                  </div>
                </div>
                <div>
                  <div className="mb-10 w-full overflow-hidden rounded">
                    <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                      <Image
                        src="/images/blog/blog-details-02.jpg"
                        alt="image"
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                  </div>
                  <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                  Enterprise Performance Management
                  </h3>
                  <p className="mb-10 text-justify text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  Oracle EPM’s <b style={{color:'black'}}>Tax Reporting and Compliance Suite (TRCS) </b> simplifies the tax reporting process, ensuring businesses comply with global tax regulations while reducing risk and increasing efficiency. With automation, real-time reporting, and seamless integration with Oracle’s broader EPM ecosystem, TRCS is the ideal solution for organizations looking to streamline their tax compliance efforts.
                  </p>
                  <p className="mb-10 text-justify text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  Oracle Cloud <b style={{color:'black'}}>ARCS</b> is a powerful tool for businesses looking to simplify and automate their account reconciliation processes. With its advanced features, real-time insights, and seamless integration with Oracle’s broader cloud solutions, ARCS enables organizations to achieve greater efficiency, accuracy, and compliance in their financial operations.
                  </p>
                  <p className="mb-10 text-justify text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Oracle EPM <b style={{color:'black'}}>Financial Consolidation and Close</b> is an essential solution for organizations looking to simplify and accelerate their financial close process. With automation, real-time reporting, and compliance support, Oracle EPM helps businesses achieve faster, more accurate financial consolidation, reduce operational risk, and meet regulatory requirements with ease.
                  </p>
                  <p className="mb-10 text-justify text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Oracle EPM <b style={{color:'black'}}>Planning</b> is the ultimate solution for organizations looking to improve their financial planning, budgeting, and forecasting processes. With its integration capabilities, advanced analytics, and real-time insights, Oracle EPM Planning empowers businesses to make smarter, data-driven decisions and achieve their strategic objectives more efficiently.
                  </p>
                  <p className="mb-10 text-justify text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Oracle EPM <b style={{color:'black'}}>Profitability and Cost Management</b> empowers businesses to take control of their financial performance by providing actionable insights into costs and profitability. With its advanced features, real-time data, and seamless integration with other EPM modules, this solution helps organizations optimize their cost structure, enhance profitability, and drive smarter financial decisions.
                  </p>
                  <p className="mb-10 text-justify text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Oracle EPM <b style={{color:'black'}}>Narrative Reporting</b> helps businesses elevate their financial reporting by combining detailed financial data with rich, contextual commentary. With customizable templates, real-time integration, and collaborative features, Oracle EPM Narrative Reporting empowers organizations to produce more insightful, accurate, and impactful reports, supporting better decision-making at all levels of the business.
                  </p>
                  <p className="mb-10 text-justify text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Oracle EPM <b style={{color:'black'}}>Enterprise Data Management</b> helps businesses streamline their data governance and integration efforts by centralizing and managing master data. With its powerful features for data consistency, governance, real-time visibility, and seamless integration, Oracle EPM EDM empowers organizations to improve data quality, reduce risks, and make more informed, data-driven decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsPage;
