import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header'; // Adjust the path as per your folder structure

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="container">
      <h1>The Smith Agency</h1>
        <div className="logo-container" style={{ textAlign: 'center', margin: '40px 0' }}>
          <Image src="/tsa.png" alt="TSA Logo" width={500} height={300} />
        </div>
        <div className="content" style={{ padding: '0 20px', textAlign: 'center' }}>

        </div>
      </div>
    </>
  );
};


export default HomePage;
