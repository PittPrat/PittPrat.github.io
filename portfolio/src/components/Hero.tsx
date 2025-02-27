import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-8">
          <img
            src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop"
            alt="Your Name"
            className="w-32 h-32 rounded-full mx-auto shadow-lg"
          />
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
          Hi, I'm <span className="text-blue-600 dark:text-blue-400">Your Name</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8">
          Data Enthusiast, Developer, and Storyteller
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
          Transforming data into insights, building intuitive solutions, and exploring creative possibilities
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            <Github className="h-8 w-8" />
          </a>
          <a
            href="https://linkedin.com"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            <Linkedin className="h-8 w-8" />
          </a>
          <a
            href="mailto:your.email@example.com"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            <Mail className="h-8 w-8" />
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-1 h-8 bg-gray-300 dark:bg-gray-700 rounded-full mx-auto"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;