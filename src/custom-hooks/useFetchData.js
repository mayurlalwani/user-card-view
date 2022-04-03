import { useState, useEffect } from 'react';

const useFetchData = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://json-faker.onrender.com/users');
        const responseData = await response.json();
        setUserData(responseData.users);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchUserData();
  }, []);

  return { userData, loading, error };
};

export default useFetchData;
