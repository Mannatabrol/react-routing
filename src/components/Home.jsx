import React from 'react';

const Home = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 'calc(100vh - 100px)',
        backgroundColor: 'pink'
      }}
      className="home-container"
    >
      <h1
        style={{
          color: 'green',
          animation: 'moveBackAndForth 1s ease-in-out infinite alternate'
        }}
        className="animated-text"
      >
        <span role="img" aria-label="Waving Hand">👋</span> Welcome to Mannat's site
      </h1>
      <h2
        style={{ color: 'red' }}
        className="red-text"
      >
        Let's Learn React-Routing <span role="img" aria-label="Thumbs Up">👍</span>
      </h2>
    </div>
  );
};

export default Home;
