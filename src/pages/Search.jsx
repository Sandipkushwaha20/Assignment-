import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useApp } from '../context/AppContext';

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');
  const { pins } = useApp();

  // Filter pins based on search query
  const searchResults = pins.filter(
    (pin) =>
      pin.title.toLowerCase().includes(query?.toLowerCase() || '') ||
      pin.description.toLowerCase().includes(query?.toLowerCase() || '')
  );

  return (
    <div className="container mx-auto px-4 pt-20">
      <h1 className="text-2xl font-bold mb-6">
        Search Results for "{query}"
      </h1>

      {searchResults.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">No results found for "{query}"</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {searchResults.map((pin) => (
            <div key={pin.id} className="relative group">
              <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
                <img
                  src={pin.imageUrl}
                  alt={pin.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-200"
                />
              </div>
              <div className="mt-2">
                <h3 className="text-sm font-medium text-gray-900 truncate">
                  {pin.title}
                </h3>
                <p className="text-sm text-gray-500 truncate">
                  {pin.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search; 