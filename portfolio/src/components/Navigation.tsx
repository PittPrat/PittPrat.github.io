import React from 'react';

const Navigation = () => {
  const sections = ['About', 'Skills', 'Experience', 'Education', 'Projects', 'Interests', 'Contact'];

  return (
    <nav className="hidden md:block">
      <ul className="flex space-x-4">
        {sections.map((section) => (
          <li key={section}>
            <a
              href={`#${section.toLowerCase()}`}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 text-sm font-medium"
            >
              {section}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;