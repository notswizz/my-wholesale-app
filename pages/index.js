import React, { useEffect } from 'react';
import Image from 'next/image';
import Header from '../components/Header'; // Adjust the path as per your folder structure

const HomePage = () => {
  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement('script');
    script.async = true;
    script.src = "//www.instagram.com/embed.js";
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <Header />
      <div style={{ fontFamily: 'Arial, sans-serif', color: '#333', padding: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ flex: 1, marginRight: '10px' }}>
            <h2 style={{ color: '#E91E63' }}>Welcome to The Smith Agency</h2>
            <p>The Smith Agency offers specialized, market boutique staffing for wholesale apparel and gift exhibitors during Atlanta, Dallas, and New York Markets. We provide bright and local sales professionals who are trained to understand the wholesale industry. You can count on our reliable, skilled salespeople, for all of your temporary staffing needs. The Smith Agency gives you peace of mind with a worry-free solution that saves you time and money!</p>
          </div>
          <div style={{ flex: 1, marginLeft: '10px', textAlign: 'center' }}>
            <Image src="/tsalogoai2.png" alt="TSA Logo" width={300} height={300} />
          </div>
          <div style={{ flex: 1, marginLeft: '10px' }}>
            {/* Instagram Embed Block */}
            <blockquote className="instagram-media" data-instgrm-permalink="https://www.instagram.com/the_smithagency/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style={{ background: '#FFF', border: '0', borderRadius: '3px', boxShadow: '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)', margin: '1px', maxWidth: '540px', minWidth: '326px', padding: '0', width: '99.375%', width: '-webkit-calc(100% - 2px)', width: 'calc(100% - 2px)' }}>
              {/* The rest of the provided Instagram embed code goes here */}
            </blockquote>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
