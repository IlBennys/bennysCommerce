import "../assets/sass/About.scss";
import Footer from "../components/Footer";
import { Button, Card, Container } from "react-bootstrap";
import logo from "../assets/img/login.png";
import js from "../assets/img/js.png";
import html from "../assets/img/html-5.png";
import css from "../assets/img/css-3.png";
import sass from "../assets/img/sass.png";
import react from "../assets/img/react.png";
import java from "../assets/img/java.png";
import boostrap from "../assets/img/bootstrap.png";
import { FaAngular, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiSpring } from "react-icons/si";
import { useEffect, useState } from "react";

const About = ({ light }) => {
  const [scrollY, setScrollY] = useState(0);

  const cvBenny = () => {
    let link = document.createElement("a");
    link.href =
      "https://drive.google.com/file/d/1Kz1Ek4-dO7R3qvxpUJpGpZfCMkF5Z4uG/view?usp=sharing";
    link.download = "IlMioCV.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const cvLuca = () => {
    let link = document.createElement("a");
    link.href =
      "https://drive.google.com/file/d/1PH61vFA0j3MfQH9kmICwEGFDwe0orET2/view?usp=sharing";
    link.download = "IlMioCV.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  return (
    <>
      <Container className="p-2">
        <div className="my-5">
          <div className="div-pic  ">
            <img
              className="rounded-4 img-uno"
              width={"400px"}
              src={logo}
              alt="pic"
            />
            <p className={`ms-3 para-uno ${light ? "nero" : "bianco"}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              iste, laborum eligendi sunt tenetur tempora id eum, veniam labore
              maxime deleniti, consequuntur soluta asperiores rerum
              necessitatibus? Ipsum in sit minus. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Officia fugit nesciunt corrupti
              soluta, a, beatae culpa velit iste unde eligendi exercitationem
              quo quod officiis. Aut commodi laboriosam explicabo perspiciatis
              aspernatur?
            </p>
          </div>

          <div className="div-pic ">
            <p className={`me-3 para-due ${light ? "nero" : "bianco"}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              iste, laborum eligendi sunt tenetur tempora id eum, veniam labore
              maxime deleniti, consequuntur soluta asperiores rerum
              necessitatibus? Ipsum in sit minus. Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Neque voluptates ratione unde nulla
              assumenda recusandae, at molestiae distinctio voluptatibus odio
              ipsam quibusdam deleniti voluptatum nam vel tenetur cupiditate!
              Blanditiis, accusantium.
            </p>

            <img
              className="rounded-4 img-due"
              width={"400px"}
              src={logo}
              alt="pic"
            />
          </div>
        </div>
        <p className={`titolo-barra text-center ${light ? "nero" : "bianco"}`}>
          LINGUAGGI STUDIATI
        </p>
        <div className="barra-cod rounded-3 d-flex flex-row align-items-center justify-content-evenly">
          <p>
            <img src={js} alt="js-logo" />
          </p>
          <p>
            <img src={html} alt="html-logo" />
          </p>
          <p>
            <img src={css} alt="css-logo" />
          </p>
          <p>
            <img src={sass} alt="sass-logo" />
          </p>
          <p>
            <img src={react} alt="react-logo" />
          </p>
          <p>
            <FaAngular />
          </p>
          <p>
            <img src={boostrap} alt="boostrap-logo" />
          </p>
          <p>
            <img src={java} alt="java-logo" />
          </p>
          <p>
            <SiSpring />
          </p>
        </div>
        <div className="div-card my-5">
          <Card
            className={`mainCard rounded-4 p-1 bg-dark ${
              scrollY >= 550 ? "animate-1" : ""
            }`}
          >
            <Card.Title className="titoloCard m-3 text-white">
              BENEDETTO MANFRE' 💻 FULL-STACK WEB DEVELOPER
            </Card.Title>
            <Card.Body className="d-flex justify-content-around">
              <div className="me-3">
                <Card.Img
                  className="imgCard rounded-3"
                  variant="top"
                  src={logo}
                />
              </div>
              <div className="div-btn-group ">
                <div className="d-flex flex-column align-items-center">
                  <span className="titoloBtn fw-bold text-white">GITHUB</span>
                  <Button
                    className="btn-uno"
                    href="https://github.com/IlBennys"
                    variant="dark"
                  >
                    <FaGithub className="fs-3" />
                  </Button>
                </div>
                <div className="d-flex flex-column align-items-center">
                  <span className="titoloBtn fw-bold text-white">LINKEDIN</span>
                  <Button
                    className="btn-due"
                    href="https://www.linkedin.com/in/benedetto-manfr%C3%A9/"
                  >
                    <FaLinkedin className="fs-3" />
                  </Button>
                </div>
                <div className="d-flex flex-column align-items-center">
                  <span className="titoloBtn fw-bold text-white">SHOOT CV</span>
                  <Button onClick={cvBenny} className="btn-tre">
                    CV
                  </Button>
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card
            className={`mainCard rounded-4 p-1 bg-dark ${
              scrollY >= 550 ? "animate-2" : ""
            }`}
          >
            <Card.Title className="titoloCard m-3 text-white">
              LUCA SCOMAZZON 💻 FULL-STACK WEB DEVELOPER
            </Card.Title>
            <Card.Body className="d-flex justify-content-around">
              <div className="me-3">
                <Card.Img
                  className="imgCard rounded-3"
                  variant="top"
                  src={logo}
                />
              </div>
              <div className="div-btn-group ">
                <div className="d-flex flex-column align-items-center">
                  <span className="titoloBtn fw-bold text-white">GITHUB</span>
                  <Button
                    className="btn-uno"
                    href="https://github.com/Luke-WB"
                    variant="dark"
                  >
                    <FaGithub className="fs-3" />
                  </Button>
                </div>
                <div className="d-flex flex-column align-items-center">
                  <span className="titoloBtn fw-bold text-white">LINKEDIN</span>
                  <Button
                    className="btn-due"
                    href="https://www.linkedin.com/in/luca-scomazzon-618b9b267/"
                  >
                    <FaLinkedin className="fs-3" />
                  </Button>
                </div>
                <div className="d-flex flex-column align-items-center">
                  <span className="titoloBtn fw-bold text-white">SHOOT CV</span>
                  <Button className="btn-tre" onClick={cvLuca}>
                    CV
                  </Button>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
        <Footer />
      </Container>
    </>
  );
};

export default About;
