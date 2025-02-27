import React from 'react';
import TimelineSection from './TimelineSection';

const Experience = () => {
  const timelineItems = [
    {
      date: '2023 - 2024',
      title: 'Senior Consultant',
      subtitle: 'Deloitte',
      description: [
        'Led the development of Shell’s EV & Fuel Pricing system across 5 European markets, reducing compute costs by 90%',
        'Designed and deployed an AI-driven demand forecasting model, predicting a 12% revenue increase',
        'Optimized multi-database architecture (PostgreSQL, Azure Storage, SQL Server), reducing storage costs by 30%',
        'Implemented Power BI automation, increasing business intelligence adoption by 35%',
        'Managed cross-functional collaboration between engineering, data science, and business teams to define roadmap strategy'
      ]
    },
    {
      date: '2020 - 2022',
      title: 'Senior Consultant',
      subtitle: 'Concentrix Catalyst',
      description: [
        'Architected event-driven microservices, improving system scalability by 40% and reducing operational costs',
        'Led AI-driven risk intelligence platform strategy, detecting 300K+ additional critical events per month',
        'Developed a custom ElasticSearch cluster, reducing infrastructure costs by 35% while enhancing search speed by 40%',
        'Owned key features in MCI’s enterprise resource management software used by Fortune 500 organizations',
        'Optimized cloud infrastructure (Azure Kubernetes & Terraform), streamlining deployments with zero downtime'
      ]
    },
    {
      date: '2017 - 2020',
      title: 'Consultant',
      subtitle: 'Infosys',
      description: [
        'Developed and modernized cloud-based APIs for Charles Schwab, transitioning legacy financial systems to scalable cloud solutions',
        'Reduced database query execution time by 30% across SQL & NoSQL databases, improving transaction speeds',
        'Created AKKA.NET-based performance benchmarking tool, adopted company-wide for REST API validation',
        'Executed Blue-Green deployments ensuring zero downtime for critical financial applications serving millions',
        'Implemented security best practices with SonarQube & Veracode, ensuring 90%+ code coverage and zero vulnerabilities'
      ]
    }
  ];

  return (
    <div className="text-white">
      <h2 className="text-3xl font-bold mb-8">Work Experience</h2>
      <TimelineSection items={timelineItems} />
    </div>
  );
};

export default Experience;
