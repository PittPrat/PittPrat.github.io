import React from 'react';

const Interests = () => {
  const interests = {
    FoodAndTravel: [
      { name: 'Trying new vegetarian foods', detail: 'Exploring different cuisines from Indian street food to European delicacies.' },
      { name: 'European cuisine', detail: 'Love tasting Italian, Spanish, and Mediterranean dishes.' },
      { name: 'Traveling', detail: 'Enjoy exploring new cultures, especially food markets & local delicacies.' }
    ],
    Movies: [
      { title: 'Fight Club', comment: 'David Fincher’s mind-blowing masterpiece.' },
      { title: 'Zodiac', comment: 'One of the best true crime thrillers ever made.' },
      { title: 'The Grand Budapest Hotel', comment: 'A hilarious and beautifully crafted comedy.' }
    ],
    Sports: [
      { name: 'Football (Soccer)', involvement: 'Die-hard Real Madrid fan, following La Liga & Champions League.' },
      { name: 'Badminton', involvement: 'Regular club player, enjoy fast-paced rallies.' },
      { name: 'Table Tennis', involvement: 'Casual but competitive player.' }
    ],
    PodcastsAndYouTube: [
      { title: 'The Tim Dillon Show', comment: 'Hilarious takes on current events with dark humor.' },
      { title: 'Dave Chappelle & George Carlin', comment: 'Comedy legends with the best stand-up sets.' },
      { title: 'Kill Tony', comment: 'A wild mix of stand-up and brutal comedy roasts.' }
    ]
  };

  return (
    <section id="interests" className="py-20 bg-black/50 backdrop-blur-md text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Personal Interests
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Food & Travel */}
          <div className="bg-gray-800/70 backdrop-blur-lg rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4">Food & Travel</h3>
            <div className="space-y-4">
              {interests.FoodAndTravel.map((item, index) => (
                <div key={index} className="border-b border-gray-700 pb-4 last:border-0">
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-gray-400 text-sm">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Movies */}
          <div className="bg-gray-800/70 backdrop-blur-lg rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4">Favorite Movies</h3>
            <div className="space-y-4">
              {interests.Movies.map((movie, index) => (
                <div key={index} className="border-b border-gray-700 pb-4 last:border-0">
                  <h4 className="font-semibold">{movie.title}</h4>
                  <p className="text-gray-400 text-sm">{movie.comment}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sports */}
          <div className="bg-gray-800/70 backdrop-blur-lg rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4">Sports</h3>
            <div className="space-y-4">
              {interests.Sports.map((sport, index) => (
                <div key={index} className="border-b border-gray-700 pb-4 last:border-0">
                  <h4 className="font-semibold">{sport.name}</h4>
                  <p className="text-gray-400 text-sm">{sport.involvement}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Podcasts & YouTube */}
          <div className="bg-gray-800/70 backdrop-blur-lg rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4">Podcasts & YouTube</h3>
            <div className="space-y-4">
              {interests.PodcastsAndYouTube.map((content, index) => (
                <div key={index} className="border-b border-gray-700 pb-4 last:border-0">
                  <h4 className="font-semibold">{content.title}</h4>
                  <p className="text-gray-400 text-sm">{content.comment}</p>
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
