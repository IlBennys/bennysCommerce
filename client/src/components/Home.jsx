import "../assets/sass/Home.scss";
import Carousel from "react-bootstrap/Carousel";
import { useEffect, useRef, useState } from "react";
import {
  Animator,
  Fade,
  Move,
  MoveIn,
  MoveOut,
  ScrollContainer,
  ScrollPage,
  Sticky,
  StickyIn,
  StickyOut,
  ZoomOut,
  batch,
} from "react-scroll-motion";

const Home = ({ light }) => {
  const [index, setIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [numeriFinali, setNumeriFinali] = useState([100, 30, 200]);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const generaNumeroCasuale = (numeroIndicato, index) => {
    const intervallo = setInterval(() => {
      const numeroCasuale = Math.floor(Math.random() * (numeroIndicato + 1));
      setNumeriFinali((prevState) => {
        const newNumeriFinali = [...prevState];
        newNumeriFinali[index] = numeroCasuale;
        return newNumeriFinali;
      });
      if (numeroCasuale === numeroIndicato) {
        clearInterval(intervallo);
      }
    }, 10);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      if (scrollY > 1600 && scrollY < 1615) {
        const spans = document.querySelectorAll(".number");
        spans.forEach((span, index) => {
          const numeroIndicato = parseInt(span.textContent);
          generaNumeroCasuale(numeroIndicato, index);
        });
      }
      console.log(scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  return (
    <>
      <div className={`mt-5 ${light ? "nero" : "bianco"} }`}>
        <ScrollContainer>
          <ScrollPage>
            <Animator animation={batch(Fade(), MoveIn(0, -200))}>
              <h1 className="my-5 fw-bolder text-center">PREVIEW ARTICOLI</h1>
              <div className="div1 mt-5">
                <Carousel className="main" activeIndex={index} onSelect={handleSelect} interval={30000}>
                  <Carousel.Item className="items">
                    <iframe
                      width="866"
                      height="555"
                      src="https://www.youtube.com/embed/H1G0T1lUhdI"
                      title="2"
                      allowFullScreen
                    ></iframe>
                  </Carousel.Item>
                  <Carousel.Item className="items">
                    <iframe
                      width="866"
                      height="555"
                      src="https://www.youtube.com/embed/fLXg2cxe6LI"
                      title="Odyssey G7 Gaming Monitor: prestazioni di ultimissima generazione | Samsung"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  </Carousel.Item>
                  <Carousel.Item className="items">
                    <iframe
                      width="866"
                      height="555"
                      src="https://www.youtube.com/embed/DxZCeQQe69c"
                      title="Video del prodotto G713  it"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  </Carousel.Item>
                </Carousel>
              </div>
            </Animator>
          </ScrollPage>
          <ScrollPage>
            <Animator animation={batch(StickyOut(), ZoomOut())}>
              <img
                src="https://freepngimg.com/thumb/monitor/4-monitor-png-image-thumb.png"
                alt="monitor Pic"
                width={"500px"}
              />
            </Animator>
          </ScrollPage>
          <ScrollPage>
            <Animator animation={batch(Fade(), Sticky(), MoveIn(0, -200))}>
              <div className="d-flex flex-column align-items-center mt-5">
                <img
                  src="https://cdn.discordapp.com/attachments/1062713292226830409/1222587789657243708/M8-removebg-preview.png?ex=66346c5b&is=66331adb&hm=3d505489ed71c288779c0c08feea4cd23a2db9160c3d066fa5267f0c8abd5f90&"
                  alt="Monitor G7"
                />
                <div className="statistica d-flex justify-content-evenly mt-5 w-100">
                  <div className="d-flex flex-column align-items-center justify-content-center me-5">
                    <span className="number">{numeriFinali[0]}</span>
                    <span className="description">MONITOR VENDUTI</span>
                  </div>
                  <div className="divisore"></div>
                  <div className="d-flex flex-column align-items-center justify-content-center mx-5">
                    <span className="number">{numeriFinali[1]}</span>
                    <span className="description">PRENOTAZIONI GIORNALIERE</span>
                  </div>
                  <div className="divisore"></div>
                  <div className="d-flex flex-column align-items-center justify-content-center ms-5">
                    <span className="number">{numeriFinali[2]}+</span>
                    <span className="description">MONITOR PRODOTTI</span>
                  </div>
                </div>
              </div>
            </Animator>
          </ScrollPage>
        </ScrollContainer>
      </div>
    </>
  );
};

export default Home;
