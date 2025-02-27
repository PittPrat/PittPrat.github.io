import React from 'react';

const About = () => {
  return (
    <div className="text-white flex flex-col items-center text-center">
      {/* Profile Image */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-6">
        {/* Childhood Photo */}
        <div>
          <img 
            src="./images/Young-Prathik.png" 
            alt="Young Prathik" 
            className="w-80 h-56 rounded-lg border-4 border-gray-300 shadow-lg object-cover"
          />
          <p className="mt-2 text-sm text-gray-400">Me as a kid, dreaming of becoming a superhero!</p>
        </div>

        {/* Latest Professional Photo */}
        <div>
          <img 
            src="./images/Prathik.jpeg" 
            alt="Prathik Pittala" 
            className="w-80 h-56 rounded-lg border-4 border-gray-300 shadow-lg object-cover"
          />
          <p className="mt-2 text-sm text-gray-400">Now, building AI & cloud solutions.</p>
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      
      <p className="text-white/80 max-w-3xl">
        I was born in <strong>Hyderabad, India</strong>, a city rich with history and technology. Growing up, I was surrounded by computers thanks to my older siblings who worked in IT. 
        My fascination with technology started when I first opened up a CPU cabinet, eager to understand how the components connected. But back then, my time was mostly spent playing video games and exploring software.
      </p>

      <p className="text-white/80 max-w-3xl mt-4">
        Initially, I wanted to pursue a different engineering field, but my curiosity about how things work led me to software development.  
        During my college years at <strong>Osmania University</strong>, I actively participated in robotics competitions, programming battle bots and line-following robots. That was my first hands-on experience with Python.
      </p>

      <p className="text-white/80 max-w-3xl mt-4">
        After college, I started my professional journey at Infosys, transitioning from an Electrical Engineering background to Information Technology. 
        Over the years, I have found joy in building software solutions that impact millions of users.
        The recent trends in AI/ML have really piqued my interest and I am eager to explore these new opportunities that lie ahead.
        My excitement for what's to come and my passion for learning new technologies drove me to pursue a Master's degree.
      </p>

      <p className="text-white/80 max-w-3xl mt-4">
        In 2024, I moved to the United States to pursue my Master’s at the University of Washington, focusing on AI/ML, product development, product strategy, cybersecurity, and cloud computing.  
        I’m always excited about building scalable applications, leading innovative projects, and leveraging AI to solve real-world problems.
      </p>

      <p className="text-white/80 max-w-3xl mt-4">       
        I truly believe that recent trends in AI have blurred the boundaries within the tech industry where each individual is empowered to take on multiple roles and become a jack of all trades.
        I am eager to explore new opportunities this new journey has to offer and make the most of my skills.
      </p>

      <p className="text-white/80 max-w-3xl mt-4">
        Outside of tech, I love cycling, playing chess, and exploring new places. Feel free to connect with me!
      </p>
    </div>
  );
};

export default About;
