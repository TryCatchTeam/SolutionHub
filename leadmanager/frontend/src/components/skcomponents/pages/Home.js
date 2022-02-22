
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import ProjectDetails from '../Project';


  import React from 'react'
  
  const Home = () => {
    return (
      <div>
      <HeroSection />
      {/*<ProjectDetails/>*/}
      <Cards/>
      <Footer/>
      </div>
    )
  }
  
  

export default Home;
