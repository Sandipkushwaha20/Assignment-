import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const useApp = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [pins, setPins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://9d5s0yptka.execute-api.ap-south-1.amazonaws.com/dev/mock-data');
        const data = await response.json();
        setUsers(data.users);
        setPins(data.pins);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch data');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const likePin = (pinId) => {
    setPins(pins.map(pin => 
      pin.id === pinId ? { ...pin, likes: pin.likes + 1 } : pin
    ));
  };

  const savePin = (pinId, userId) => {
    setPins(pins.map(pin => {
      if (pin.id === pinId) {
        const savedBy = pin.savedBy.includes(userId)
          ? pin.savedBy.filter(id => id !== userId)
          : [...pin.savedBy, userId];
        return { ...pin, savedBy };
      }
      return pin;
    }));
  };

  const getTopUsers = () => {
    return [...users].sort((a, b) => b.followers - a.followers);
  };

  const getUserPins = (userId) => {
    return pins.filter(pin => pin.userId === userId);
  };

  const getUserById = (userId) => {
    return users.find(user => user.id === userId);
  };

  return (
    <AppContext.Provider
      value={{
        users,
        pins,
        loading,
        error,
        darkMode,
        toggleDarkMode,
        likePin,
        savePin,
        getTopUsers,
        getUserPins,
        getUserById
      }}
    >
      {children}
    </AppContext.Provider>
  );
}; 