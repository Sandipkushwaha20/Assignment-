import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'demo',
      email: 'demo@example.com',
      password: 'demo123',
      profileImage: 'https://via.placeholder.com/150',
      bio: 'Demo user account',
      createdAt: new Date().toISOString(),
      followers: 100,
      following: 50
    }
  ]);

  const login = (email, password) => {
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      setCurrentUser(user);
      return true;
    }
    return false;
  };

  const signup = (username, email, password) => {
    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
      return false;
    }

    const newUser = {
      id: users.length + 1,
      username,
      email,
      password,
      profileImage: 'https://via.placeholder.com/150',
      bio: '',
      createdAt: new Date().toISOString(),
      followers: 0,
      following: 0
    };

    setUsers([...users, newUser]);
    setCurrentUser(newUser);
    return true;
  };

  const logout = () => {
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}; 