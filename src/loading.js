// LoadingPage.js
import React from 'react';

const LoadingPage = () => {
  return (
    <div style={styles.container}>
      <h2>Loading...</h2>
      <div className="spinner"></div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh', // Full viewport height
    fontSize: '24px'
  }
};

export default LoadingPage;
