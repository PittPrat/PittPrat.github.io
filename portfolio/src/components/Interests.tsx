import React from 'react';

const Interests = () => {
  const interests = {
    Movies: [
      { title: 'Inception', comment: 'Mind-bending sci-fi at its best' },
      { title: 'The Social Network', comment: 'Inspiring tech startup story' },
      { title: 'A Beautiful Mind', comment: 'Fascinating mathematical journey' }
    ],
    Sports: [
      { name: 'Basketball', involvement: 'Weekend league player' },
      { name: 'Running', involvement: 'Completed two half marathons' },
      { name: 'Rock Climbing', involvement: 'Indoor climbing enthusiast' }
    ],
    Books: [
      { title: 'Clean Code', author: 'Robert C. Martin', comment: 'Changed my approach to programming' },
      { title: 'Deep Learning', author: 'Ian Goodfellow', comment: 'Essential AI reference' },
      { title: 'Zero to One', author: 'Peter Thiel', comment: 'Valuable startup insights' }
    ]
  };

  return (
    <section id="interests" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Personal Interests
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Favorite Movies</h3>
            <div className="space-y-4">
              {interests.Movies.map((movie, index) => (
                <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-4 last:border-0">
                  <h4 className="font-semibold text-gray-900 dark:text-white">{movie.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{movie.comment}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Sports</h3>
            <div className="space-y-4">
              {interests.Sports.map((sport, index) => (
                <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-4 last:border-0">
                  <h4 className="font-semibold text-gray-900 dark:text-white">{sport.name}</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{sport.involvement}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Book Recommendations</h3>
            <div className="space-y-4">
              {interests.Books.map((book, index) => (
                <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-4 last:border-0">
                  <h4 className="font-semibold text-gray-900 dark:text-white">{book.title}</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">by {book.author}</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{book.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interests;