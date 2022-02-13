import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='../../../static/videos/video-3.mov' autoPlay loop muted />
      <h1> SOLUTION <span style={{color:'rgb(255,69,0)'}}>HUB</span> </h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='sbtn'
          buttonStyle='sbtn--outline'
          buttonSize='sbtn--large'
        >
          LOGIN
        </Button>
        <Button
          className='sbtn'
          buttonStyle='sbtn--outline'
          buttonSize='sbtn--large'
        >
          SIGN UP
        </Button>

        <Button
          className='sbtn'
          buttonStyle='sbtn--outline'
          buttonSize='sbtn--large'
        >
          REGISTER YOUR ORGANIZATION
        </Button>
      { /* <Button
          className='btns'
          buttonStyle='sbtn-primary'
          buttonSize='sbtn-large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
      </Button>*/}
      </div>
    </div>
  );
}

export default HeroSection;
