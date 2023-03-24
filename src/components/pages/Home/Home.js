import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className='homepage-container'>
      <h1>Welcome to my portfolio page!</h1>
      <h2>LALY FIROZE</h2>
      <img src="" alt="Laly" className='headshot-image' />
      <p className="brand-statement">
        As a web developer, I am dedicated to creating elegant and functional
        web solutions that provide seamless user experiences. My passion for
        learning and creativity helps me to stay updated with the latest web
        technologies and create unique designs that exceed expectations.
      </p>
      <p className="site-indication">This is my portfolio site where you can explore my projects, learn more about my skills and experience, and connect with me for potential collaborations.</p>
    </div>
  );
}

export default Home;