import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import NavBarComponent from '../../NavBar/NavBarComponent';

function About() {
  return (
    <div>
      <header className="App-header">
        <NavBarComponent />
      </header>
      <Jumbotron style={jumbotronStyle}>
        <h1 style={centerText}>Chris Warner</h1>
        <p style={centerText}>I am a Full Stack Developer and a graduate of Columbia University. I have a strong commitment to teamwork and highly motivated to help others succeed. Highly creative in regards to problem-solving and innovation development. My skills include HTML5, CSS, M.E.R.N development stack, MySQL, MongoDB, React, JavaScript, HandleBars, MVC, and the ability to learn new languages quickly. During my studies, I have developed an app that generates a personalized investing strategy (MindStock) and another that allows you find top notch restaurants (ZipCrunch). For my final project I developed a platform that allows you to rent dogs from local shelter’s. </p>
      </Jumbotron>
    </div>
  );
}

const centerText = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  align: 'center',
  marginTop: '50px',
  textAlign: 'center',
  color: 'black'
}

const jumbotronStyle = {
  height: '400px',
  backgroundSize: 'cover',
  align: 'center',
  color: 'white',
  backgroundColor: 'silver',
}

export default About;