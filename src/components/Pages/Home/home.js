import React from "react";
import NavBarComponent from "../../NavBar/NavBarComponent";
import StatusComponent from "../../Status/StatusComponent";
import FooterComponent from "../../Footer/FooterComponent";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import heroImage from "../../../assets/images/hero.jpg";
import Container from "react-bootstrap/Container";
import me from "../../../assets/images/me.png";
import "./home.css";

function Home() {
  return (
    <div>
      <NavBarComponent />
      <StatusComponent />
      <div className="container d-flex align-items-center flex-column">
        <Jumbotron
          style={{
            height: "500px",
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
          }}
        >
          <div className="jumbotronContent">
            <div className="jumobtronSubContent">
              <h1>Warner Web Development</h1>
            </div>
            <p>
              <Button href="mailto: chris@warnerwebdevelopment.com" variant="primary">Contact</Button>
            </p>
          </div>
        </Jumbotron>
        {/* <Button style={btnStyle}>Portfolio</Button> */}{" "}
        <section className="services">
          <div className="container">
            <div className="section-title">
              <h2>Services</h2>
            </div>
            <br></br>
            <div className="row">
              <div className="col-lg-4 col-md-6" data-aos="fade-up">
                <div className="service-box">
                  <div className="spacer"></div>
                  <h4>
                    <a href="">Web Design</a>
                  </h4>
                  <p>
                    Build a customized website design that's perfect for your
                    business or personal site.
                  </p>
                  <br></br>
                  <a
                    href="mailto: chris@warnerwebdevelopment.com"
                    className="btn btn-success center-block mt-2 mb-2"
                  >
                    Contact »
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6" data-aos="fade-up">
                <div className="service-box">
                  <div className="spacer"></div>
                  <h4>
                    <a href="">Consultation</a>
                  </h4>
                  <p>Improve your Search Engine Optimization (SEO) or plan a new website or upgrade.</p>
                  <br></br>
                  <a
                    href="mailto: chris@warnerwebdevelopment.com"
                    className="btn btn-success center-block mt-2 mb-2"
                  >
                    Contact »
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6" data-aos="fade-up">
                <div className="service-box">
                    <div className="spacer"></div>
                    <h4>
                      <a href="">Website Updates and Upgrades</a>
                    </h4>
                    <p>Update or upgrade your existing website.</p>
                    <br></br>
                    <a
                      href="mailto: chris@warnerwebdevelopment.com"
                      className="btn btn-success center-block mt-2 mb-2"
                    >
                      Contact »
                    </a>
                </div>
              </div>
            </div>
          </div>
        </section>
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
