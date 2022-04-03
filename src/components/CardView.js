import React, { useEffect, useState } from 'react';
import useFetchData from '../custom-hooks/useFetchData';
import UserCard from './UserCard';
import '../styles/styles.css';
import ClipLoader from 'react-spinners/ClipLoader';
import { PulseLoader } from 'react-spinners';

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
