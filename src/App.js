import './App.css';
import React from 'react';
import i1 from '../src/Images/i1.png';
import i3 from '../src/Images/i2.png';
import i2 from '../src/Images/i3.png';
import i4 from '../src/Images/i4.png';
import i5 from '../src/Images/i5.png';
import i6 from '../src/Images/i6.png';
import i7 from '../src/Images/i7.png';
import i8 from '../src/Images/i8.png';
import Card from '../src/Card'

function App() {
  return (
    <div className="container">
      <div className='title'>
        <h1>EXHIBITIONS</h1>
      </div>
      <div className='btn-box'>
        <button className='btn'>Register</button>
      </div>

      <div className='about'>
        {/* <h3>About Us</h3> */}
        <p>Shaastra Exhibitions is a platform to showcase cutting-edge technology.

          Exhibitions provide an opportunity for a large number of buyers and sellers in an industry to interact with each other. They offer an unparalleled and ideal opportunity to showcase innovative products to a broad spectrum of people.
          They are responsible for conveying the ideas of the participants from a technologically practical perspective and as well as give the audience a glimpse into the latest developments in technology.</p>
      </div>
      <div className='intro-img'>
        <img src={i1} className='i1' alt='i'></img>
      </div>

      <div className='title1'>
        <h1>CURRENT EXHIBITIONS</h1>
      </div>


      <div className='ce-content'>
        <div className='ce-firstbox'>
        {/* add css for each card */}

          <Card 
            content = ""
            title = ""
            caption1 = ""
            caption2 = ""
          />

        </div>
        <div className='ce-secondbox'></div>
        <div className='ce-thirdbox'></div>
      </div>
      <div className='title'>
        <h1>PREVIOUS EXHIBITIONS</h1>
      </div>


      <div className='pe-content'>
        <div className='pe-firstbox'>
        <Card
            id = "first" 
            content = "Shaastra 2016 unveiled the spectacular technological advancements in automobile history with its very own Vintage Car Exhibition in collaboration with the Madras Heritage Motoring Club. Presented automobiles such as Austin 8, 1952 Topolino, Morris 1000, Morris 8, which have been the marvels of technology bringing about a revolution in the automobile."
            title = "Vintage Car Exhibitions"
            caption1 = "2016"
            caption2 = "Vintage Car Exhibition"
          />
        </div>

        <div className='pe-secondbox'>
        <Card 
            id = "second"
            content = "Manav: India's first 3D printed humanoid robot was developed by Diwakar Vaish of A-SET training institutes."
            title = "NAO: Autonomous Humanoid Robot"
            caption1 = "2017"
            caption2 = "NAO: Autonomous Humanoid Robot"
          />
        </div>
        <div className='pe-thirdbox'>
        <Card 
            id = "third"
            title = "Defence and Aerospace models from ISRO"
            content = "ISRO - GSLV and PSLV models were exhibited at Shaastra Exhibitions."
            caption1 = "2018"
            caption2 = "Defence & Aerospace models from ISRO"
          />
        </div>

        <div className='pe-fourthbox'>
        <Card 
            id = "fourth"
            title = "Bike Expo"
            content = "Shaastra 2018 unveiled the spectacular technological advancements in motorcycle history with its Bike Expo."
            caption1 = "2018"
            caption2 = "Bike Expo"
          />
        </div>

        <div className='pe-fifthbox'>
        <Card 
            id = "fifth"
            title = "International Expo"
            content = "Shaastra for the first time ever, presents International Exhibitions, in association with the US Consulate General of Chennai. The International Exhibits was on three broad perspectives - Academics, Research and Business."
            caption1 = "2019"
            caption2 = "International Expo"
          />
        </div>

        <div className='pe-sixthbox'>
        <Card 
            id = "sixth"
            title = "Defence Expo"
            content = "The Defence Expo was an exhibition of the products of nascent defence technology start-ups,established manufacturers,Defence PSUs and the Indian Armed Forces.It was conducted over the course of the 4 days of Shaastra 2020. The Expo provided exposure to Defence Technology for the audience."
            caption1 = "2020"
            caption2 = "Defence Expo"
          />
      </div>
      </div>
      </div>
    // </div>
  );
}

export default App;