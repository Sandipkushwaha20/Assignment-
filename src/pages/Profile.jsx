import React from 'react';
import { useAuth } from '../context/AuthContext';
import UserProfile from '../components/users/UserProfile';

const Profile = () => {
  const { currentUser } = useAuth();

  // Dummy pins data for the current user
  const userPins = [
    {
      id: 1,
      title: 'My First Pin',
      description: 'This is my first pin on Pinterest clone',
      imageUrl: 'https://via.placeholder.com/300',
      createdAt: new Date().toISOString(),
      userId: currentUser.id
    },
    {
      id: 2,
      title: 'My Second Pin',
      description: 'Another amazing pin',
      imageUrl: 'https://via.placeholder.com/300',
      createdAt: new Date().toISOString(),
      userId: currentUser.id
    }
  ];

  return <UserProfile user={currentUser} pins={userPins} />;
};

export default Profile; 