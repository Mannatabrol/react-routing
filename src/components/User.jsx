import React, { useState, useEffect } from 'react';

const User = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUserData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: 'calc(100vh - 100px)', backgroundColor: 'yellow' }}>
      <h1 style={{ color: 'Red' }}>User's Page</h1>
      <h2 style={{ textAlign: 'center' }}>Here's the user data</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {userData && userData.map(user => (
            <li key={user.id}>
              <strong>Name:</strong> {user.name}, <strong>Email:</strong> {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default User;
