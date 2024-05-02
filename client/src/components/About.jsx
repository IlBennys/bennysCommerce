import "../assets/sass/About.scss";
import { Button, Card, Container } from "react-bootstrap";
import bennyPic from "../assets/img/fotoBenny.png";
import lucaPic from "../assets/img/fotoluca.png";
import img1 from "../assets/img/img-para1.jpg";
import img2 from "../assets/img/img-para2.jpg";
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
              src={img2}
              alt="pic"
            />
            <p className={`p-3 ms-3 para-uno ${light ? "nero" : "bianco"}`}>
              L'e-commerce è stato sviluppato da due Full Stack Developer,
              Benedetto e Luca. Entrambi abbiamo esperienza di due anni in
              questo campo e siamo noti per la nostra velocità nel automatizzare
              i codici. Abbiamo lavorato insieme per creare un'esperienza utente
              fluida e intuitiva, implementando soluzioni innovative e
              ottimizzando continuamente le performance del sito.
              <br />
              Per il frontend del nostro e-commerce, abbiamo utilizzato una
              serie di tecnologie e librerie avanzate. Abbiamo impiegato
              JavaScript come linguaggio principale, insieme a React e Redux per
              gestire lo stato dell'applicazione in modo efficiente. Abbiamo
              integrato Axios per le chiamate API, Stripe per il sistema di
              pagamento sicuro e SASS per il layout responsive e flessibile.
            </p>
          </div>

          <div className="div-pic ">
            <p className={`p-3 me-3 para-due ${light ? "nero" : "bianco"}`}>
              Inoltre, abbiamo sfruttato librerie esterne come React Router DOM
              per il routing dinamico, React Slider per la gestione del prezzo
              tramite API e Bootstrap per un design coerente ed elegante. Per
              garantire la sicurezza dei dati sensibili, abbiamo implementato
              Persist Encrypt per la crittografia dei dati. Sul lato backend,
              abbiamo adottato una solida architettura basata su Java e Spring
              Boot. Utilizziamo Spring Security per garantire un'autenticazione
              e un'autorizzazione robuste, e PostgreSQL con PGAdmin come
              database per gestire in modo efficiente i dati. Abbiamo integrato
              diverse librerie esterne, tra cui Lombok per la riduzione della
              verbosità del codice, JDBC per l'accesso ai dati, JPA per la
              persistenza dei dati e JWT Token per l'autenticazione basata su
              token. Inoltre, abbiamo integrato Stripe nel backend per gestire
              la struttura del pagamento in modo sicuro e affidabile.
            </p>

            <img
              className="rounded-4 img-due"
              width={"400px"}
              src={img1}
              alt="pic"
            />
          </div>
        </div>
        <p className={`titolo-barra text-center ${light ? "nero" : "bianco"}`}>
          LINGUAGGI STUDIATI
        </p>
        <div className="barra-cod rounded-3 d-flex flex-row align-items-center justify-content-evenly">
          <a href="https://www.html.it/guide/guida-javascript-di-base/">
            <img src={js} alt="js-logo" />
          </a>
          <a href="https://www.html.it/">
            <img src={html} alt="html-logo" />
          </a>
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
            <img src={css} alt="css-logo" />
          </a>
          <a href="https://sass-lang.com/">
            <img src={sass} alt="sass-logo" />
          </a>
          <a href="https://react-redux.js.org/introduction/getting-started">
            <img src={react} alt="react-logo" />
          </a>
          <a href="https://angular.io/guide/setup-local">
            <FaAngular />
          </a>
          <a href="https://react-bootstrap.github.io/">
            <img src={boostrap} alt="boostrap-logo" />
          </a>
          <a href="https://www.oracle.com/it/java/">
            <img src={java} alt="java-logo" />
          </a>
          <a href="https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/">
            <SiSpring />
          </a>
        </div>
        <div className="div-card my-5">
          <Card
            className={`mainCard rounded-4 p-1 bg-dark ${
              scrollY >= 500 ? "animate-1" : ""
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
                  src={bennyPic}
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
                    <FaGithub className="Fagit fs-3" />
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
              scrollY >= 500 ? "animate-2" : ""
            }`}
          >
            <Card.Title className="titoloCard m-3 text-white">
              LUCA SCOMAZZON 💻 FULL-STACK WEB DEVELOPER
            </Card.Title>
            <Card.Body className="d-flex justify-content-around">
              <div className="me-3">
                <Card.Img
                  className="imgCard rounded-3 bg-light"
                  variant="top"
                  src={lucaPic}
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
      </Container>
    </>
  );
};

export default About;
