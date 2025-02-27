import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import TypewriterComponent from './components/TypewriterComponent';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Interests from './components/Interests';

function App() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const sections = [
    { id: 'about', title: 'My Journey', component: About },
    { id: 'education', title: 'Education', component: Education },
    { id: 'experience', title: 'Work Experience', component: Experience },
    { id: 'projects', title: 'Projects', component: Projects },
    { id: 'interests', title: 'Interests', component: Interests },
  ];

  // Handle "Escape" key press to close section & reset highlight
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && activeSection) {
        setActiveSection(null); // Close the active section and reset highlighting
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeSection]); // <-- Dependency ensures re-render when activeSection changes

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(./images/space-needle.jpg)',
          filter: 'brightness(0.4)',
        }}
      />

      {/* Content */}
      <div className="grid place-items-center min-h-screen bg-gray-900">
        {/* Main Content Banner */}
        <div className="bg-black/50 backdrop-blur-sm rounded-lg p-10 w-full max-w-4xl mx-auto">
          <h1 className="text-gray-300 italic font-light text-4xl md:text-6xl text-center mb-4">
            Hi, I'm Prathik Pittala.
          </h1>

          {/* Typing Animation */}
          <div className="h-8 mb-8 text-center">
            <TypewriterComponent words={['Full-stack Developer.', 'Technical Product Manager.', 'AI/ML Engineer.']} />
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {sections.map(({ id, title }) => (
              <button
                key={id}
                onClick={() => setActiveSection(activeSection === id ? null : id)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  activeSection === id
                    ? 'bg-white/20 text-white' // Highlight when section is active
                    : 'hover:bg-white/10 text-gray-300'
                }`}
              >
                {title}
              </button>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex justify-center items-center space-x-8 mt-8">
            <a href="https://www.linkedin.com/in/prathik-pittala-292434105" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="w-6 h-6 text-white/80 hover:text-white transition-colors" />
            </a>
            <a href="https://github.com/PittPrat" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="w-6 h-6 text-white/80 hover:text-white transition-colors" />
            </a>
            <a href="mailto:pittalaprathik@gmail.com" aria-label="Email">
              <Mail className="w-6 h-6 text-white/80 hover:text-white transition-colors" />
            </a>
          </div>
        </div>

        {/* Active Section Content */}
        {activeSection && (
          <div className="fixed inset-0 bg-black/90 z-20 overflow-auto">
            <div className="max-w-4xl mx-auto py-20 px-4">
              <button
                onClick={() => setActiveSection(null)}
                className="absolute top-8 right-8 text-white/80 hover:text-white"
              >
                ✕
              </button>
              {sections.find(s => s.id === activeSection)?.component && 
                React.createElement(sections.find(s => s.id === activeSection)!.component)
              }
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
