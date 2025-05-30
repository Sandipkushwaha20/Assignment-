import { useParams } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import PinDetail from '../components/pins/PinDetail';

const PinDetailPage = () => {
  const { pinId } = useParams();
  const { pins, users, loading, error } = useApp();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const pin = pins.find(p => p.id === pinId);
  if (!pin) return <div>Pin not found</div>;

  const user = users.find(u => u.id === pin.userId);

  return <PinDetail pin={pin} user={user} />;
};

export default PinDetailPage; 