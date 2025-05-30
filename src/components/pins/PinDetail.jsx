import { HeartIcon, BookmarkIcon, ShareIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import PinGrid from '../pins/PinGrid';

const PinDetail = ({ pin, user }) => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          {/* Image Section */}
          <div className="md:w-1/2">
            <img
              src={pin.imageUrl}
              alt={pin.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-bold text-gray-900">{pin.title}</h1>
              <div className="flex space-x-2">
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <HeartIcon className="h-6 w-6 text-gray-600" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <BookmarkIcon className="h-6 w-6 text-gray-600" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <ShareIcon className="h-6 w-6 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-600 mb-6">{pin.description}</p>

            {/* User Info */}
            <div className="flex items-center mb-6">
              <Link to={`/profile/${user.id}`} className="flex items-center">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <p className="font-semibold text-gray-900">{user.name}</p>
                  <p className="text-sm text-gray-500">{user.followers} followers</p>
                </div>
              </Link>
            </div>

            {/* Tags */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-900 mb-2">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {pin.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="border-t pt-4">
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center">
                  <HeartIcon className="h-5 w-5 mr-1" />
                  <span>{pin.likes} likes</span>
                </div>
                <div className="flex items-center">
                  <BookmarkIcon className="h-5 w-5 mr-1" />
                  <span>{pin.savedBy.length} saves</span>
                </div>
                <div>
                  Posted {format(new Date(pin.createdAt), 'MMM d, yyyy')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PinDetail; 