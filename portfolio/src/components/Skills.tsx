import React from 'react';

const Skills = () => {
  const skills = {
    'Programming Languages': ['Python', 'SQL', 'JavaScript', 'TypeScript'],
    'Web Technologies': ['React', 'Node.js', 'HTML5', 'CSS3', 'Tailwind CSS'],
    'Data Analytics': ['Tableau', 'Power BI', 'Excel', 'Data Visualization'],
    'Tools & Platforms': ['Git', 'VS Code', 'Docker', 'AWS'],
    'Soft Skills': ['Problem Solving', 'Team Leadership', 'Communication', 'Project Management']
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{category}</h3>
              <div className="space-y-3">
                {items.map((skill) => (
                  <div key={skill} className="relative">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill}</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-blue-600 dark:bg-blue-500 h-2 rounded-full"
                        style={{ width: `${Math.random() * 40 + 60}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;