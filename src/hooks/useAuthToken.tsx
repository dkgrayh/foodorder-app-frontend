import { useState } from 'react';

// Custom hook to manage JWT token
const useAuthToken = () => {
  // State to store the JWT token
  const [authToken, setAuthToken] = useState(() => {
    // Retrieve token from local storage on initial render
    return localStorage.getItem('jwtToken') || '';
  });

  // Function to set JWT token in local storage and state
  const setToken = (token) => {
    localStorage.setItem('jwtToken', token);
    setAuthToken(token);
  };

  // Function to clear JWT token from local storage and state
  const clearToken = () => {
    localStorage.removeItem('jwtToken');
    setAuthToken('');
  };

  // Function to retrieve JWT token
  const getToken = () => {
    return authToken;
  };

  return { setToken, clearToken, getToken };
};

export default useAuthToken;
