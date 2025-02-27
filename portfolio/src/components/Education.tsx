import React from 'react';
import TimelineSection from './TimelineSection';

const Education = () => {
  const timelineItems = [
    {
      date: '2018 - 2020',
      title: 'Master of Science in Computer Science',
      subtitle: 'University of Technology',
      description: [
        'Specialized in Machine Learning and AI',
        'GPA: 3.9/4.0',
        'Research Assistant in Natural Language Processing Lab'
      ]
    },
    {
      date: '2014 - 2018',
      title: 'Bachelor of Science in Computer Science',
      subtitle: 'State University',
      description: [
        'Dean\'s List all semesters',
        'Led Computer Science Student Association',
        'Completed honors thesis on distributed systems'
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