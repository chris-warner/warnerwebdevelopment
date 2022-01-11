import React from 'react';
import NavBarComponent from '../../NavBar/NavBarComponent';
import VerticleTimeline from '../../VerticleTimeline/VerticleTimeline';
import FooterComponent from '../../Footer/FooterComponent';
import ViewToggle from '../../ViewToggle/ViewToggleComponent';

function Portfolio() {
    return (     
    <div>
      <NavBarComponent />
      <center><h1 style={titleStyle}>Projects and development.</h1></center>
       <ViewToggle />
      <VerticleTimeline />
      <FooterComponent />
    </div>
  );
}

  const titleStyle = {
    marginTop:'32px'
  }
  
export default Portfolio;