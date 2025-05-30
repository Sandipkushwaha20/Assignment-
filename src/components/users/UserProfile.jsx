import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

const UserProfile = ({ user, pins }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* User Header */}
      <div className="flex items-center space-x-4 mb-8">
        <div className="h-24 w-24 rounded-full overflow-hidden">
          <img
            src={user.profileImage || 'https://via.placeholder.com/150'}
            alt={user.username}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold">{user.username}</h1>
          <p className="text-gray-600">{user.bio || 'No bio yet'}</p>
          <p className="text-sm text-gray-500">Joined {format(new Date(user.createdAt), 'MMMM yyyy')}</p>
        </div>
      </div>

      {/* User Stats */}
      <div className="flex space-x-8 mb-8">
        <div>
          <span className="font-bold">{pins.length}</span>
          <span className="text-gray-600 ml-2">Pins</span>
        </div>
        <div>
          <span className="font-bold">{user.followers || 0}</span>
          <span className="text-gray-600 ml-2">Followers</span>
        </div>
        <div>
          <span className="font-bold">{user.following || 0}</span>
          <span className="text-gray-600 ml-2">Following</span>
        </div>
      </div>

      {/* User's Pins Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {pins.map((pin) => (
          <Link to={`/pin/${pin.id}`} key={pin.id} className="relative group">
            <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
              <img
                src={pin.imageUrl}
                alt={pin.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-200"
              />
            </div>
            <div className="mt-2">
              <h3 className="text-sm font-medium text-gray-900 truncate">{pin.title}</h3>
              <p className="text-sm text-gray-500 truncate">{pin.description}</p>
              <p className="text-xs text-gray-400 mt-1">
                {format(new Date(pin.createdAt), 'MMM d, yyyy')}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {pins.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No pins yet</p>
        </div>
      )}
    </div>
  );
};

export default UserProfile; 