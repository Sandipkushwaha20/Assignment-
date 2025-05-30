import React from 'react';
import { Link } from 'react-router-dom';
import { HeartIcon, BookmarkIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon, BookmarkIcon as BookmarkSolidIcon } from '@heroicons/react/24/solid';
import { useApp } from '../context/AppContext';
import { useAuth } from '../context/AuthContext';

const Home = () => {
  const { pins, getUserById, likePin, savePin } = useApp();
  const { currentUser } = useAuth();

  return (
    <div className="container mx-auto px-4 pt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {pins.map((pin) => {
          const author = getUserById(pin.userId);
          const isSaved = pin.savedBy.includes(currentUser?.id);

          return (
            <div key={pin.id} className="relative group">
              <Link to={`/pin/${pin.id}`}>
                <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
                  <img
                    src={pin.imageUrl}
                    alt={pin.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
              </Link>

              {/* Pin Info Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-200">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="flex items-center space-x-2 mb-2">
                    <img
                      src={author?.avatar}
                      alt={author?.name}
                      className="h-8 w-8 rounded-full"
                    />
                    <span className="font-medium">{author?.name}</span>
                  </div>
                  <h3 className="font-semibold mb-1">{pin.title}</h3>
                  <p className="text-sm line-clamp-2">{pin.description}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="absolute top-4 right-4 flex space-x-2">
                <button
                  onClick={() => likePin(pin.id)}
                  className="p-2 bg-white dark:bg-gray-800 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                >
                  <HeartIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                </button>
                <button
                  onClick={() => savePin(pin.id, currentUser?.id)}
                  className="p-2 bg-white dark:bg-gray-800 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                >
                  {isSaved ? (
                    <BookmarkSolidIcon className="h-6 w-6 text-red-500" />
                  ) : (
                    <BookmarkIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                  )}
                </button>
              </div>

              {/* Like Count */}
              <div className="absolute bottom-4 left-4 flex items-center space-x-1 text-white">
                <HeartSolidIcon className="h-5 w-5" />
                <span>{pin.likes}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home; 