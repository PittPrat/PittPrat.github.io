import React from 'react';
import TimelineSection from './TimelineSection';

const Experience = () => {
  const timelineItems = [
    {
      date: '2021 - Present',
      title: 'Senior Software Engineer',
      subtitle: 'Tech Corp',
      description: [
        'Leading a team of 5 developers on a major platform redesign',
        'Implemented microservices architecture reducing system latency by 60%',
        'Mentored 3 junior developers to senior positions'
      ]
    },
    {
      date: '2018 - 2021',
      title: 'Software Engineer',
      subtitle: 'Innovation Labs',
      description: [
        'Developed and maintained multiple full-stack applications',
        'Reduced deployment time by 70% through CI/CD implementation',
        'Received Outstanding Performance Award in 2020'
      ]
    },
    {
      date: '2016 - 2018',
      title: 'Junior Developer',
      subtitle: 'StartUp Co',
      description: [
        'Built responsive web applications using React',
        'Contributed to open-source projects',
        'Improved test coverage from 40% to 85%'
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