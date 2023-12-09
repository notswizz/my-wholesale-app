import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header'; // Adjust the path as per your folder structure

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="logo-container" style={{ textAlign: 'center', margin: '40px 0' }}>
          <Image src="/tsa.png" alt="TSA Logo" width={150} height={75} />
        </div>
        <div className="content" style={{ padding: '0 20px', textAlign: 'center' }}>
          <h1>Welcome to TSA Staffing</h1>
          <p>
            At TSA Staffing, we connect talented individuals with the organizations that need them. 
            Our expertise in the staffing industry ensures we match the right person to the right role. 
            Explore our site to find out more about our services and how we can help you or your business grow.
          </p>
        </div>
      </div>
    </>
  );
};

export default HomePage;
