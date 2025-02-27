import TimelineSection from './TimelineSection';

const About = () => {
  const timelineItems = [
    {
      date: 'June 2024 - June 2025',
      title: 'Student @UW',
      subtitle: 'Foster School of Business',
      description: [
        ' ',
        'Mentoring junior developers',
        'Implementing best practices and architectural improvements'
      ]
    },
    {
      date: '2020 - 2023',
      title: 'Software Engineer',
      subtitle: 'Startup Inc.',
      description: [
        'Developed full-stack applications using React and Node.js',
        'Improved application performance by 40%',
        'Led team of 3 developers on key projects'
      ]
    }
  ];

  return (
    <div className="text-white">
      <h2 className="text-3xl font-bold mb-8">About Me</h2>
      <p className="text-white/80 mb-12">
        A passionate developer with expertise in full-stack development and a keen interest in building scalable applications.
        I believe in writing clean, maintainable code and creating intuitive user experiences.
      </p>
      <TimelineSection items={timelineItems} />
    </div>
  );
};

export default About;