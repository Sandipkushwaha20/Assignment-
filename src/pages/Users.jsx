import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';

const Users = () => {
  const { getTopUsers } = useApp();
  const topUsers = getTopUsers();

  return (
    <div className="container mx-auto px-4 pt-20">
      <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Top Users</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {topUsers.map((user, index) => (
          <Link
            key={user.id}
            to={`/profile/${user.id}`}
            className="block bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            <div className="p-4">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="h-16 w-16 rounded-full object-cover"
                  />
                  <div className="absolute -top-2 -left-2 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                    #{index + 1}
                  </div>
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {user.name}
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {user.followers} followers
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 line-clamp-2">
                    {user.bio}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Users; 