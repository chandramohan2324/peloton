"use client";
import SectionTitle from '../Common/SectionTitle';
import ExpandableView from './ExpandableView';

const ExpandableContent = () => {
  return (
    <div>
      {/* <h1 style={{ textAlign: 'center',fontSize:'28px'}}>Key Benefits</h1> */}
      <SectionTitle
            title="Key Benefits"
            paragraph=" "
            center
          />
      <ExpandableView title="1. Financial Planning and Analysis (FP&A)">
        <p>Enhanced forecasting accuracy, collaborative planning, improved financial visibility, and faster decision-making.</p>
      </ExpandableView>

      <ExpandableView title="2. Financial Consolidation and Close">
        <p>Faster close cycles, automated consolidation, compliance with IFRS and GAAP standards, and real-time reporting.</p>
      </ExpandableView>

      <ExpandableView title="3. Profitability and Cost Management">
        <p>Detailed cost allocation, improved profitability insights, scenario analysis, and data-driven cost optimization.</p>
      </ExpandableView>

      <ExpandableView title="4. Narrative Reporting">
        <p>Integrated reporting, enhanced communication, improved stakeholder engagement, and reduced manual reporting effort.</p>
      </ExpandableView>

      <ExpandableView title="5. Enterprise Data Management (EDM)">
        <p>Data consistency across systems, improved governance and compliance, streamlined data integration, and better decision-making.</p>
      </ExpandableView>

      <ExpandableView title="6. Tax Reporting">
        <p>Accurate tax reporting, improved compliance, real-time tax impact analysis, and streamlined tax provision processes.</p>
      </ExpandableView>

      <ExpandableView title="7. Workforce Planning">
        <p>Optimized staffing plans, improved labor cost control, better alignment of workforce strategies with business objectives, and real-time workforce insights.</p>
      </ExpandableView>

      <ExpandableView title="8. Budgeting and Forecasting">
        <p>Real-time forecasting, enhanced budget accuracy, collaborative budget creation, and increased financial agility.</p>
      </ExpandableView>

    </div>
  );
};

export default ExpandableContent;
