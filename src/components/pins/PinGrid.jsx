import PinCard from './PinCard';

const PinGrid = ({ pins }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {pins.map(pin => (
        <PinCard key={pin.id} pin={pin} />
      ))}
    </div>
  );
};

export default PinGrid; 