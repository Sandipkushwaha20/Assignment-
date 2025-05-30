import { Link } from 'react-router-dom';
import { HeartIcon, BookmarkIcon } from '@heroicons/react/24/outline';

const PinCard = ({ pin }) => {
  return (
    <div className="relative group">
      <Link to={`/pin/${pin.id}`}>
        <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
          <img
            src={pin.imageUrl}
            alt={pin.title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-200"
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-200">
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <h3 className="font-semibold">{pin.title}</h3>
            <p className="text-sm">{pin.description}</p>
          </div>
        </div>
      </Link>
      <div className="absolute top-2 right-2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <button className="p-2 bg-white rounded-full shadow hover:bg-gray-100">
          <HeartIcon className="h-5 w-5 text-gray-600" />
        </button>
        <button className="p-2 bg-white rounded-full shadow hover:bg-gray-100">
          <BookmarkIcon className="h-5 w-5 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default PinCard; 