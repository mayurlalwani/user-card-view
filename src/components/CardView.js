import React from 'react';
import { PulseLoader } from 'react-spinners';
import useFetchData from '../custom-hooks/useFetchData';
import '../styles/styles.css';
import UserCard from './UserCard';

const CardView = () => {
  const { userData, loading, error } = useFetchData();

  return (
    <>
      <div className={!loading ? 'hide-loader' : 'show-loader'}>
        {loading && <PulseLoader />}
      </div>

      <div className="user-data">
        {error && <p>{error.message}</p>}

        {userData?.map((user) => (
          <UserCard userData={user} />
        ))}
      </div>
    </>
  );
};

export default CardView;
