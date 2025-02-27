import React from 'react';
import TimelineSection from './TimelineSection';

const Education = () => {
  const timelineItems = [
    {
      date: 'June 2024 - June 2025',
      title: 'Master of Science in Information Systems',
      subtitle: 'University of Washington, Foster School of Business',
      description: [
        'Focus: AI/ML, Cybersecurity, Cloud Computing, IT Strategy & Business Analytics',
        'Selected Courses: Data Mining, Machine Learning Applications, Advanced Databases, IT Project Management',
        'Building expertise in AI-driven decision-making & cloud-native architectures'
      ]
    },
    {
      date: 'Sep 2013 - May 2017',
      title: 'Bachelor of Engineering in Electrical & Electronics Engineering',
      subtitle: 'Osmania University, India',
      description: [
        'Graduated with First Class Distinction (Top 10% of Class)',
        'Organized biennial renewable energy conference – Akshay Urja',
        'Developed projects in C, Python, MATLAB & Arduino for Robot wars, Line follwer robots.'
      ]
    }
  ];

  return (
    <div className="text-white">
      <h2 className="text-3xl font-bold mb-8">Education</h2>
      <TimelineSection items={timelineItems} />
    </div>
  );
};

export default Education;
