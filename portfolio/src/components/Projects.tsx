import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'iCARE - AI-Based Vision Testing Platform',
      description: 'Led development of an AI-powered vision testing tool, supporting multilingual and offline functionality.',
      technologies: ['Python', 'TensorFlow', 'React', 'Azure'],
      image: '',
      link: 'https://github.com/PittPrat/iCare_AIVisionTesting'
    },
    {
      title: 'FaceEx - Computer Vision Game',
      description: 'Built an interactive game using real-time facial tracking with MediaPipe and Next.js for an engaging experience.',
      technologies: ['Next.js', 'MediaPipe', 'TensorFlow.js'],
      image: '',
      link: 'https://github.com/PittPrat/FaceExGame'
    },
    {
      title: 'Financial Transaction Data Analysis',
      description: 'Conducted comprehensive analysis of financial transactions using advanced SQL queries to identify spending patterns and detect anomalies.',
      technologies: ['SQL', 'PostgreSQL', 'Data Analysis'],
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop',
      link: 'https://github.com/PittPrat/FinancialTransactionAnalysis'
    },
    {
      title: 'YouTube Trends Data Mining',
      description: 'Performed advanced data mining on YouTube trends in the USA to uncover insights into viewer preferences and content performance.',
      technologies: ['Python', 'Pandas', 'Data Mining', 'Visualization'],
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=500&fit=crop',
      link: 'https://github.com/PittPrat/YouTubeTrendsAnalysis'
    },
    {
      title: 'AtlasAI - Itinerary Planner',
      description: 'Developed an AI-driven itinerary planning application that customizes travel plans based on user preferences and real-time data.',
      technologies: ['JavaScript', 'Python', 'React', 'FastAPI'],
      image: './images/AtlasAI.png',
      link: 'https://github.com/PittPrat/AtlasAI_ItineraryPlanner'
    },
    {
      title: 'Deep Learning Image Composition Detection',
      description: 'Implemented a deep learning model to assess image composition quality, aiding photographers in enhancing visual aesthetics.',
      technologies: ['Python', 'Keras', 'Computer Vision'],
      image: '',
      link: 'https://github.com/PittPrat/DeepLearningImageCompositionDetection'
    }
  ];

   // Default placeholder image
  const defaultImage = 'https://dummyimage.com/800x500/333/aaa.png&text=Work+In+Progress';

  return (
    <section id="projects" className="py-20 bg-black/50 backdrop-blur-md text-white">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={project.image || defaultImage}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    View Project →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
