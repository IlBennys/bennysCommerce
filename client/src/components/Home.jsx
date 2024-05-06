/* eslint-disable jsx-a11y/anchor-is-valid */
import "../assets/sass/Home.scss";
import Carousel from "react-bootstrap/Carousel";
import { useEffect, useState } from "react";
import {
  Animator,
  Fade,
  MoveOut,
  ScrollContainer,
  ScrollPage,
  batch,
} from "react-scroll-motion";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { GrLinkNext } from "react-icons/gr";
import { IoArrowBackOutline } from "react-icons/io5";
import { AiFillFire } from "react-icons/ai";

const Home = ({ light }) => {
  const articolo = useSelector((state) => state.articolo.articoli);

  const [index, setIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [numeriFinali, setNumeriFinali] = useState([100, 30, 200]);
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };
  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };

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
            <Animator animation={batch(Fade())}>
              <h1 className="my-5 fw-bolder text-center titotoloGrande">
                PREVIEW ARTICOLI
              </h1>
              <div className="div1">
                <Carousel
                  className="main"
                  activeIndex={index}
                  onSelect={handleSelect}
                  interval={30000}
                >
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
          <ScrollPage style={{ marginTop: "150px" }}>
            <Animator animation={batch(Fade())}>
              <div className="blocco-divisione d-flex justify-content-around position-relative">
                <div className=" position-absolute div-fix">
                  Consigliati dai Clienti{" "}
                  <span className="ms-1">
                    <AiFillFire />
                  </span>
                </div>
                <div className="d-flex flex-column justify-content-around align-items-center">
                  <h2 style={{ marginLeft: "40px" }}>MOUSE</h2>
                  <img
                    src={articolo[8].img}
                    alt="Icona mouse"
                    width={"300px"}
                    height={"240px"}
                  />

                  <div className="d-flex flex-column align-items-center justify-content-center mt-5">
                    <span class="arrow"></span>
                    <p>Il mouse più scelto!</p>
                  </div>
                </div>
                <div className="d-flex flex-column justify-content-around align-items-center">
                  <h2>MONITOR</h2>
                  <img
                    src={articolo[15].img}
                    alt="Icona monitor"
                    width={"300px"}
                    height={"240px"}
                  />
                  <div className="d-flex flex-column align-items-center justify-content-center mt-5">
                    <span class="arrow"></span>
                    <p>Il monitor più scelto</p>
                  </div>
                </div>
                <div className="d-flex flex-column justify-content-around align-items-center">
                  <h2>TASTIERA</h2>
                  <img
                    src={articolo[23].img}
                    alt="icona-tastiera"
                    width={"300px"}
                    height={"240px"}
                  />
                  <div className="d-flex flex-column align-items-center justify-content-center mt-5">
                    <span class="arrow"></span>
                    <p>la tastiera più scelta!</p>
                  </div>
                </div>
              </div>
            </Animator>
          </ScrollPage>
          {/* <ScrollPage>
            <Animator animation={batch(StickyOut(), ZoomOut(0, 30))}>
              <img src={monitor} alt="monitor Pic" width={"1000px"} />
            </Animator>}
          </ScrollPage> */}
          <ScrollPage>
            <Animator animation={batch(Fade(), MoveOut(0, -200))}>
              <div className="d-flex flex-column align-items-center mt-5">
                <h1 className="mb-5">MOUSE STATISTICHE</h1>
                <img
                  src="https://resource.logitech.com/content/dam/gaming/en/products/pro-wireless-gaming-mouse/pro-wireless-carbon-gallery-1.png"
                  alt="Monitor G7"
                  width={"600px"}
                />
                <div className="statistica d-flex justify-content-evenly mt-5 w-100">
                  <div className="d-flex flex-column align-items-center justify-content-center me-5">
                    <span className="number">{numeriFinali[0]}</span>
                    <span className="description">MOUSE VENDUTI</span>
                  </div>
                  <div className="divisore"></div>
                  <div className="d-flex flex-column align-items-center justify-content-center mx-5">
                    <span className="number">{numeriFinali[1]}</span>
                    <span className="description">
                      PRENOTAZIONI GIORNALIERE
                    </span>
                  </div>
                  <div className="divisore"></div>
                  <div className="d-flex flex-column align-items-center justify-content-center ms-5">
                    <span className="number">{numeriFinali[2]}+</span>
                    <span className="description">MOUSE PRODOTTI</span>
                  </div>
                </div>
              </div>
            </Animator>
          </ScrollPage>
          <ScrollPage>
            <Animator
              style={{
                border: light ? "2px dotted black" : "2px dotted white",
                margin: "2%",
                padding: "2%",
              }}
              animation={batch(Fade(), MoveOut(0, -200))}
            >
              <h1 className="text-center my-5 titotoloGrande">PREVIEW MOUSE</h1>
              {currentStep === 1 && (
                <div className="d-flex justify-content-around align-items-center">
                  <img
                    className="img-custom"
                    src="https://resource.logitech.com/content/dam/gaming/en/products/pro-wireless-gaming-mouse/pro-wireless-carbon-gallery-1.png"
                    alt="Mouse G-PRO"
                    style={{ objectFit: "contain" }}
                    width={"350px"}
                    height={"350px"}
                  />
                  <div>
                    <div className="d-flex flex-column align-items-center justify-content-center">
                      <p className="text-center fw-bold fs-3 ">
                        SCOPRI ALTRI PRODOTTI
                      </p>
                      <a>
                        <button
                          onClick={handleNextStep}
                          className="bn632-hover bn20"
                        >
                          AVANTI
                          <span className="ms-3">
                            <GrLinkNext />
                          </span>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              )}
              {currentStep === 2 && (
                <div className="d-flex justify-content-around align-items-center mt-5">
                  <img
                    className="img-custom"
                    src={articolo[0].img}
                    alt="mouse"
                    style={{ objectFit: "contain" }}
                    width={"350px"}
                    height={"350px"}
                  />
                  <div>
                    <span class="animate-icon"></span>
                    <a>
                      <button
                        onClick={handlePreviousStep}
                        className="bn632-hover bn20"
                      >
                        <span className="me-3">
                          <IoArrowBackOutline />
                        </span>
                        INDIETRO
                      </button>
                    </a>

                    <a>
                      <button
                        onClick={handleNextStep}
                        className="bn632-hover bn20"
                      >
                        AVANTI
                        <span className="ms-3">
                          <GrLinkNext />
                        </span>
                      </button>
                    </a>
                  </div>
                </div>
              )}
              {currentStep === 3 && (
                <div className="d-flex justify-content-around align-items-center mt-5">
                  <img
                    className="img-custom"
                    src={articolo[1].img}
                    alt="mouse"
                    style={{ objectFit: "contain" }}
                    width={"350px"}
                    height={"350px"}
                  />
                  <div>
                    <div className="d-flex flex-column align-items-center justify-content-center">
                      <p className="text-center fw-bold fs-3 ">
                        TORNA AGLI ALTRI PRODOTTI
                      </p>
                      <a>
                        <button
                          onClick={handlePreviousStep}
                          className="bn632-hover bn20"
                        >
                          <span className="me-3">
                            <IoArrowBackOutline />
                          </span>
                          INDIETRO
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </Animator>
          </ScrollPage>
          <ScrollPage>
            <Animator animation={batch(Fade(), MoveOut(0, -200))}>
              <div className="d-flex flex-column align-items-center mt-5">
                <h1 className="mb-5">MONITOR</h1>
                <img src={articolo[13].img} alt="Monitor G7" />
                <div className="statistica d-flex justify-content-evenly mt-5 w-100">
                  <div className="d-flex flex-column align-items-center justify-content-center me-5">
                    <span className="number">{numeriFinali[0]}</span>
                    <span className="description">MONITOR VENDUTI</span>
                  </div>
                  <div className="divisore"></div>
                  <div className="d-flex flex-column align-items-center justify-content-center mx-5">
                    <span className="number">{numeriFinali[1]}</span>
                    <span className="description">
                      PRENOTAZIONI GIORNALIERE
                    </span>
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
          <ScrollPage>
            <Animator
              style={{
                border: light ? "2px dotted black" : "2px dotted white",
                margin: "2%",
                padding: "2%",
              }}
              animation={batch(Fade(), MoveOut(0, -200))}
            >
              <h1 className="text-center my-5 titotoloGrande">
                PREVIEW MONITOR
              </h1>
              {currentStep === 1 && (
                <div className="d-flex justify-content-around align-items-center">
                  <img
                    className="img-custom"
                    src={articolo[17].img}
                    alt="Mouse G-PRO"
                    style={{ objectFit: "contain", padding: "1%" }}
                    width={"350px"}
                    height={"350px"}
                  />
                  <div>
                    <div className="d-flex flex-column align-items-center justify-content-center">
                      <p className="text-center fw-bold fs-3 ">
                        SCOPRI ALTRI PRODOTTI
                      </p>
                      <a>
                        <button
                          onClick={handleNextStep}
                          className="bn632-hover bn20"
                        >
                          AVANTI
                          <span className="ms-3">
                            <GrLinkNext />
                          </span>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              )}
              {currentStep === 2 && (
                <div className="d-flex justify-content-around align-items-center mt-5">
                  <img
                    className="img-custom"
                    src={articolo[16].img}
                    alt="mouse"
                    style={{ objectFit: "contain" }}
                    width={"350px"}
                    height={"350px"}
                  />
                  <div>
                    <span class="animate-icon"></span>
                    <a>
                      <button
                        onClick={handlePreviousStep}
                        className="bn632-hover bn20"
                      >
                        <span className="me-3">
                          <IoArrowBackOutline />
                        </span>
                        INDIETRO
                      </button>
                    </a>

                    <a>
                      <button
                        onClick={handleNextStep}
                        className="bn632-hover bn20"
                      >
                        AVANTI
                        <span className="ms-3">
                          <GrLinkNext />
                        </span>
                      </button>
                    </a>
                  </div>
                </div>
              )}
              {currentStep === 3 && (
                <div className="d-flex justify-content-around align-items-center mt-5">
                  <img
                    className="img-custom"
                    src={articolo[14].img}
                    alt="mouse"
                    style={{ objectFit: "contain" }}
                    width={"350px"}
                    height={"350px"}
                  />
                  <div>
                    <div className="d-flex flex-column align-items-center justify-content-center">
                      <p className="text-center fw-bold fs-3 ">
                        TORNA AGLI ALTRI PRODOTTI
                      </p>
                      <a>
                        <button
                          onClick={handlePreviousStep}
                          className="bn632-hover bn20"
                        >
                          <span className="me-3">
                            <IoArrowBackOutline />
                          </span>
                          INDIETRO
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </Animator>
          </ScrollPage>
          <ScrollPage>
            <Animator animation={batch(Fade(), MoveOut(0, -200))}>
              <div className="d-flex flex-column align-items-center mt-5">
                <h1 className="mb-5">TASTIERA</h1>
                <img src={articolo[23].img} alt="Tastiera Fnatic" />
                <div className="statistica d-flex justify-content-evenly mt-5 w-100">
                  <div className="d-flex flex-column align-items-center justify-content-center me-5">
                    <span className="number">{numeriFinali[0]}</span>
                    <span className="description">MONITOR VENDUTI</span>
                  </div>
                  <div className="divisore"></div>
                  <div className="d-flex flex-column align-items-center justify-content-center mx-5">
                    <span className="number">{numeriFinali[1]}</span>
                    <span className="description">
                      PRENOTAZIONI GIORNALIERE
                    </span>
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
          <ScrollPage>
            <Animator
              style={{
                border: light ? "2px dotted black" : "2px dotted white",
                margin: "2%",
                padding: "2%",
              }}
              animation={batch(Fade(), MoveOut(0, -200))}
            >
              <h1 className="text-center my-5 titotoloGrande">
                PREVIEW TASTIERE
              </h1>
              {currentStep === 1 && (
                <div className="d-flex justify-content-around align-items-center">
                  <img
                    className="img-custom"
                    src={articolo[24].img}
                    alt="Mouse G-PRO"
                    style={{ objectFit: "contain", padding: "1%" }}
                    width={"350px"}
                    height={"350px"}
                  />
                  <div>
                    <div className="d-flex flex-column align-items-center justify-content-center">
                      <p className="text-center fw-bold fs-3 ">
                        SCOPRI ALTRI PRODOTTI
                      </p>
                      <a>
                        <button
                          onClick={handleNextStep}
                          className="bn632-hover bn20"
                        >
                          AVANTI
                          <span className="ms-3">
                            <GrLinkNext />
                          </span>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              )}
              {currentStep === 2 && (
                <div className="d-flex justify-content-around align-items-center mt-5">
                  <img
                    className="img-custom"
                    src={articolo[25].img}
                    alt="mouse"
                    style={{ objectFit: "contain" }}
                    width={"350px"}
                    height={"350px"}
                  />
                  <div>
                    <span class="animate-icon"></span>
                    <a>
                      <button
                        onClick={handlePreviousStep}
                        className="bn632-hover bn20"
                      >
                        <span className="me-3">
                          <IoArrowBackOutline />
                        </span>
                        INDIETRO
                      </button>
                    </a>

                    <a>
                      <button
                        onClick={handleNextStep}
                        className="bn632-hover bn20"
                      >
                        AVANTI
                        <span className="ms-3">
                          <GrLinkNext />
                        </span>
                      </button>
                    </a>
                  </div>
                </div>
              )}
              {currentStep === 3 && (
                <div className="d-flex justify-content-around align-items-center mt-5">
                  <img
                    className="img-custom"
                    src={articolo[26].img}
                    alt="mouse"
                    style={{ objectFit: "contain" }}
                    width={"350px"}
                    height={"350px"}
                  />
                  <div>
                    <div className="d-flex flex-column align-items-center justify-content-center">
                      <p className="text-center fw-bold fs-3 ">
                        TORNA AGLI ALTRI PRODOTTI
                      </p>
                      <a>
                        <button
                          onClick={handlePreviousStep}
                          className="bn632-hover bn20"
                        >
                          <span className="me-3">
                            <IoArrowBackOutline />
                          </span>
                          INDIETRO
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </Animator>
          </ScrollPage>
        </ScrollContainer>
      </div>
    </>
  );
};

export default Home;
