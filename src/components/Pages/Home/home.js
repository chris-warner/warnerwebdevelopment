import React from "react";
import Tilt from "react-parallax-tilt";
import NavBarComponent from "../../NavBar/NavBarComponent";
import FooterComponent from "../../Footer/FooterComponent";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import heroImage from '../../../assets/images/hero.jpg';
import Container from "react-bootstrap/Container";
import me from "../../../assets/images/me.png";
import "./home.css";

function Home() {
  return (
    <div>
      <NavBarComponent />
      <div className="container d-flex align-items-center flex-column">
        <Jumbotron style={{ height:'500px', backgroundImage: `url(${heroImage})`, backgroundSize: 'cover' }}>
          <div className="jumbotronContent">
              <div className="jumobtronSubContent">
          <h1>Warner Web Development</h1>
          <p>This is a simple Jumbotron example.</p>
          </div>
          <p>
            <Button variant="primary">Primary Button</Button>
          </p>
          </div>
        </Jumbotron>
        <br />
        <div className="divider-custom divider-light">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>
        <p className="masthead-subheading font-weight-light mb-0">
          Chris Warner - Web Designer - Full Stack Development
        </p>
        <p style={centerText}></p>
        <br></br>
        <br></br>
        <br></br>
        {/* <Button style={btnStyle}>Portfolio</Button> */}{" "}
      </div>
      <FooterComponent />
    </div>
  );
}

const centerText = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "50px",
  textAlign: "center",
  color: "black",
};

export default Home;
