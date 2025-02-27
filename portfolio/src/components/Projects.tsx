import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'AI-Powered Analytics Dashboard',
      description: 'Built a real-time analytics dashboard using React and Python, incorporating machine learning models for predictive insights.',
      technologies: ['React', 'Python', 'TensorFlow', 'AWS'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop'
    },
    {
      title: 'E-commerce Data Pipeline',
      description: 'Developed an automated data pipeline processing millions of transactions daily, improving data accuracy by 99%.',
      technologies: ['Apache Airflow', 'PostgreSQL', 'Python', 'Docker'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop'
    },
    {
      title: 'Customer Segmentation Tool',
      description: 'Created a machine learning model to segment customers based on behavior patterns, increasing marketing ROI by 40%.',
      technologies: ['Python', 'scikit-learn', 'Tableau', 'SQL'],
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=500&fit=crop'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;