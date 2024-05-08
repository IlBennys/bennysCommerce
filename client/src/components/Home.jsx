/* eslint-disable jsx-a11y/anchor-is-valid */
import "../assets/sass/Home.scss";
import Carousel from "react-bootstrap/Carousel";
import { useEffect, useState } from "react";
import {
  Animator,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  ScrollContainer,
  ScrollPage,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut,
  batch,
} from "react-scroll-motion";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { GrLinkNext, GrLinkPrevious, GrZoomOut } from "react-icons/gr";
import { IoArrowBackOutline } from "react-icons/io5";
import { AiFillFire } from "react-icons/ai";
import mouse from "../assets/img/Mouse-icona.png";
import monitor from "../assets/img/Monitor-icona.png";
import tastiera from "../assets/img/Tastiera-icona.png";
import { getArticoli } from "../redux/actions/articoliActions";
import { TbClick } from "react-icons/tb";
import spia from "../assets/img/light-mode.png";

const Home = ({ light }) => {
  const articolo = useSelector((state) => state.articolo.articoli);
  const dispatch = useDispatch();

  const [index, setIndex] = useState(0);
  const [scrollY, setScrollY] = useState(false);
  const [numeriFinali, setNumeriFinali] = useState([100, 30, 200]);
  const [specificheMouse, setSpecificheMouse] = useState(1);
  const [previewMouse, setPreviewMouse] = useState(1);
  const [specificheMonitor, setSpecificheMonitor] = useState(1);
  const [previewMonitor, setPreviewMonitor] = useState(1);
  const [specificheTastiera, setSpecificheTastiera] = useState(1);
  const [previewTastiera, setPreviewTastiera] = useState(1);

  const specificheMouseNextStep = () => {
    setSpecificheMouse(specificheMouse + 1);
  };
  const specificheMousePreviousStep = () => {
    setSpecificheMouse(specificheMouse + -1);
  };
  const previewMouseNextStep = () => {
    setPreviewMouse(previewMouse + 1);
  };
  const previewMousePreviousStep = () => {
    setPreviewMouse(previewMouse + -1);
  };
  const specificheMonitorNextStep = () => {
    setSpecificheMonitor(specificheMonitor + 1);
  };
  const specificheMonitorPreviousStep = () => {
    setSpecificheMonitor(specificheMonitor + -1);
  };
  const previewMonitorNextStep = () => {
    setPreviewMonitor(previewMonitor + 1);
  };
  const previewMonitorPreviousStep = () => {
    setPreviewMonitor(previewMonitor + -1);
  };
  const specificheTastieraNextStep = () => {
    setSpecificheTastiera(specificheTastiera + 1);
  };
  const specificheTastieraPreviousStep = () => {
    setSpecificheTastiera(specificheTastiera + -1);
  };
  const previewTastieraNextStep = () => {
    setPreviewTastiera(previewTastiera + 1);
  };
  const previewTastieraPreviousStep = () => {
    setPreviewTastiera(previewTastiera + -1);
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

  const handleScroll = (p) => {
    setScrollY(p);
    if (scrollY) {
      const spans = document.querySelectorAll(".number");
      spans.forEach((span, index) => {
        const numeroIndicato = parseInt(span.textContent);
        generaNumeroCasuale(numeroIndicato, index);
      });
    }
  };

  useEffect(() => {
    dispatch(getArticoli());
  }, []);

  return (
    <>
      <div className={`mt-5 ${light ? "white-mod" : "dark-mod"} }`}>
        <ScrollContainer>
          <ScrollPage>
            <Animator animation={batch(Fade(), MoveOut(0, -200))}>
              <h1 className="my-5 fw-bolder text-center titoloGrande">PREVIEW ARTICOLI</h1>
              <div className="div-carosello">
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
          <ScrollPage style={{ marginTop: "150px" }}>
            <Animator animation={batch(Fade(), MoveOut(0, -200))}>
              <div className="d-flex flex-column align-items-center">
                <div
                  className={`blocco-divisione d-flex justify-content-around align-items-center position-relative ${
                    light ? "bordo-nero" : "bordo-bianco"
                  } }`}
                >
                  <div className="position-absolute div-fix">
                    Consigliati
                    <span className="ms-1">
                      <AiFillFire />
                    </span>
                  </div>
                  <div className="d-flex flex-column justify-content-around align-items-center">
                    <h2>MOUSE</h2>
                    <a href="#mouse">
                      <img
                        src="https://resource.logitech.com/content/dam/gaming/en/products/pro-wireless-gaming-mouse/pro-wireless-carbon-gallery-1.png"
                        alt="Icona mouse"
                        width={"300px"}
                        height={"240px"}
                      />
                    </a>
                    <div className="d-flex flex-column align-items-center justify-content-center mt-5">
                      <span class="arrow"></span>
                      <p>Il mouse più scelto!</p>
                    </div>
                  </div>
                  <div className="d-flex flex-column justify-content-around align-items-center">
                    <h2>MONITOR</h2>
                    <a href="#monitor">
                      <img src={articolo[15].img} alt="Icona monitor" width={"300px"} height={"240px"} />
                    </a>
                    <div className="d-flex flex-column align-items-center justify-content-center mt-5">
                      <span class="arrow"></span>
                      <p>Il monitor più scelto!</p>
                    </div>
                  </div>
                  <div className="d-flex flex-column justify-content-around align-items-center">
                    <h2>TASTIERA</h2>
                    <a href="#tastiera">
                      <img src={articolo[25].img} alt="icona-tastiera" width={"300px"} height={"240px"} />
                    </a>
                    <div className="d-flex flex-column align-items-center justify-content-center mt-5">
                      <span class="arrow"></span>
                      <p>La tastiera più scelta!</p>
                    </div>
                  </div>
                </div>
              </div>
            </Animator>
          </ScrollPage>
          <ScrollPage>
            <Animator animation={batch(Fade(), MoveIn(-2000, 0), Sticky(50, 30), MoveOut(0, -2000))}>
              <h1 className="titolo mouse">MOUSE</h1>
            </Animator>
            <Animator animation={batch(Fade(), MoveIn(-2000, 200), Sticky(50, 70), MoveOut(0, -2000))}>
              <img src="https://i.postimg.cc/gkfWZb1T/output-onlinegiftools-2.gif" alt="Mouse icona" width={"500px"} />
            </Animator>
            <Animator animation={batch(Fade(), MoveIn(2000, 200), Sticky(42, 55), MoveOut(0, -2000))}>
              <img
                src="https://i.postimg.cc/Y2GDmLkt/output-onlinegiftools-1.gif"
                alt="Mouse Gif"
                width={"300px"}
                style={{ transform: "rotate(135deg)" }}
              />
            </Animator>
          </ScrollPage>
          <div id="mouse">
            <ScrollPage>
              <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
                <div
                  className="d-flex flex-column align-items-center mt-5"
                  onMouseEnter={() => handleScroll(true)}
                  onMouseLeave={() => handleScroll(false)}
                >
                  <h1 className="mb-5 titoloGrande">STATISTICHE</h1>
                  <img
                    src="https://resource.logitech.com/content/dam/gaming/en/products/pro-wireless-gaming-mouse/pro-wireless-carbon-gallery-1.png"
                    alt="Mouse Logitech"
                    width={"400px"}
                  />
                  <div className="statistica d-flex justify-content-evenly mt-5 w-100">
                    <div className="d-flex flex-column align-items-center justify-content-center me-5">
                      <span className="number">{numeriFinali[0]}</span>
                      <span className="description">MOUSE VENDUTI</span>
                    </div>
                    <div className="divisore"></div>
                    <div className="d-flex flex-column align-items-center justify-content-center mx-5">
                      <span className="number">{numeriFinali[1]}</span>
                      <span className="description">PRENOTAZIONI GIORNALIERE</span>
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
          </div>
          <ScrollPage>
            <Animator animation={batch(Fade(), MoveOut(0, -50))}>
              <div className="d-flex flex-column align-items-center">
                <div className="div-specifiche">
                  <h1 className="text-center titoloGrande">SPECIFICHE</h1>
                  {specificheMouse === 1 && (
                    <div className="d-flex justify-content-around align-items-center">
                      <div className="img">
                        <img
                          src="https://i.postimg.cc/HLD58bvq/pro-wireless-feature-1-desktop-removebg-preview-1.png"
                          alt="Mouse Logitech"
                        />
                      </div>
                      <div className="d-flex flex-column justify-content-center paragrafo">
                        <h4 className="fw-bold">Il nostro sensore più preciso per il gaming</h4>
                        <span></span>
                        <p>
                          I professionisti degli eSport puntano sempre a una velocità e una precisione maggiori, così
                          come Logitech G. Con l'invenzione di HERO 25K, il sensore per il gaming di ultima generazione,
                          il mondo ha ora un nuovo leader. In PRO Wireless, HERO 25K è stato ottimizzato per tracciare
                          movimenti assurdi a velocità superiori a 400 IPS senza perdere un colpo. HERO 25K offre
                          prestazioni di punta a qualsiasi sensibilità senza smoothing, accelerazione o filtraggio da
                          100 a 25.600 DPI. HERO 25K, inoltre, consuma 10 volte meno energia rispetto ai predecessori,
                          come PMW3366, consentendo di utilizzare una batteria più leggera e di maggiore durata. I
                          professionisti vogliono il meglio, vogliono HERO 25K.
                        </p>
                      </div>
                      <div onClick={specificheMouseNextStep} className="button">
                        <GrLinkNext className="icona" />
                      </div>
                    </div>
                  )}
                  {specificheMouse === 2 && (
                    <div className="d-flex justify-content-between align-items-center">
                      <div onClick={specificheMousePreviousStep} className="button">
                        <GrLinkPrevious className="icona" />
                      </div>
                      <div className="d-flex flex-column justify-content-center paragrafo">
                        <h4 className="fw-bold">LIGHTSPEED wireless</h4>
                        <span></span>
                        <p>
                          Per i professionisti, è fondamentale liberarsi del cavo che produce attriti e distrazioni
                          inaccettabili negli eSport professionali. Questa innovativa tecnologia wireless end-to-end
                          supera le limitazioni di latenza, connettività e potenza per offrire una connessione costante,
                          senza ritardi e con una frequenza di aggiornamento di 1 ms. Senza cavo.
                        </p>
                      </div>
                      <div className="img">
                        <img
                          src="https://i.postimg.cc/Njrm0dD8/pro-wireless-feature-2-desktop-removebg-preview.png"
                          alt="Mouse Logitech"
                        />
                      </div>
                      <div onClick={specificheMouseNextStep} className="button">
                        <GrLinkNext className="icona" />
                      </div>
                    </div>
                  )}
                  {specificheMouse === 3 && (
                    <div className="d-flex justify-content-between align-items-center">
                      <div onClick={specificheMousePreviousStep} className="button">
                        <GrLinkPrevious className="icona" />
                      </div>
                      <div className="img">
                        <img
                          src="https://i.postimg.cc/FKySy127/pro-wireless-feature-3-desktop-removebg-preview-1.png"
                          alt="Mouse Logitech"
                        />
                      </div>
                      <div className="d-flex flex-column justify-content-center paragrafo">
                        <h4 className="fw-bold">Ultraleggero</h4>
                        <span></span>
                        <p>
                          Il design del più recente endoscheletro di Logitech G raggiunge il peso irreale di 80 grammi.
                          Il guscio esterno incredibilmente sottile, fino a 1 mm, sfrutta un'innovativa struttura a
                          scala per la massima resistenza e il supporto durante i tornei.
                          <br />
                          <br />
                          L'avanzata batteria ai polimeri di litio è straordinariamente duratura e leggera per un gaming
                          wireless senza problemi né preoccupazioni. Ricarica prima di un torneo e puoi dimenticarti
                          della batteria durante la competizione.
                        </p>
                      </div>
                      <div onClick={specificheMouseNextStep} className="button">
                        <GrLinkNext className="icona" />
                      </div>
                    </div>
                  )}
                  {specificheMouse === 4 && (
                    <div className="d-flex justify-content-between align-items-center">
                      <div onClick={specificheMousePreviousStep} className="button">
                        <GrLinkPrevious className="icona" />
                      </div>
                      <div className="d-flex flex-column justify-content-center paragrafo">
                        <h4 className="fw-bold">4-8 pulsanti programmabili</h4>
                        <span></span>
                        <p>
                          I pulsanti laterali sinistro e destro rimovibili rendono PRO Wireless realmente ambidestro e
                          consentono ai professionisti di decidere quanti pulsanti laterali utilizzare, da zero a
                          quattro. Il pulsante DPI è collocato nella parte inferiore del mouse per evitare le modifiche
                          di DPI non volontarie durante il gioco. Logitech G PRO Wireless Gaming Mouse è subito pronto
                          per l'uso con le impostazioni predefinite per i pulsanti, che puoi anche personalizzare
                          completamente in base alle tue preferenze con Logitech G HUB.
                        </p>
                      </div>
                      <div className="img">
                        <img
                          src="https://i.postimg.cc/Pr71hgWr/pro-wireless-feature-4-desktop-removebg-preview.png"
                          alt="Mouse Logitech"
                        />
                      </div>
                      <div onClick={specificheMouseNextStep} className="button">
                        <GrLinkNext className="icona" />
                      </div>
                    </div>
                  )}
                  {specificheMouse === 5 && (
                    <div className="d-flex justify-content-between align-items-center">
                      <div onClick={specificheMousePreviousStep} className="button">
                        <GrLinkPrevious className="icona" />
                      </div>
                      <div className="img">
                        <img
                          src="https://i.postimg.cc/9F0y6mqn/pro-wireless-feature-5-desktop-removebg-preview.png"
                          alt="Mouse Logitech"
                        />
                      </div>
                      <div className="d-flex flex-column justify-content-center paragrafo">
                        <h4 className="fw-bold">LIGHTSYNC RGB</h4>
                        <span></span>
                        <p>
                          PRO Wireless è offre una personalizzazione di circa 16,8 milioni di colori1, perfetta per
                          rappresentare i colori della tua squadra, adattare la configurazione o sincronizzarsi con
                          altri prodotti G. LIGHTSYNC offre inoltre effetti di illuminazione basati sul gioco che
                          rispondono all'azione di gioco, alla visualizzazione dell'audio, al campionamento dei colori
                          dello schermo e altro ancora. Programma tutto con G HUB.
                        </p>
                      </div>
                      <div onClick={specificheMouseNextStep} className="button">
                        <GrLinkNext className="icona" />
                      </div>
                    </div>
                  )}
                  {specificheMouse === 6 && (
                    <div className="d-flex justify-content-evenly align-items-center">
                      <div onClick={specificheMousePreviousStep} className="button">
                        <GrLinkPrevious className="icona" />
                      </div>
                      <div className="img">
                        <img
                          src="https://i.postimg.cc/7hs05cj9/pro-wireless-feature-7-desktop-removebg-preview.png"
                          alt="Mouse Logitech"
                        />
                      </div>
                      <div className="d-flex flex-column justify-content-center paragrafo">
                        <h4 className="fw-bold">Sistema meccanico di tensionamento dei pulsanti</h4>
                        <span></span>
                        <p>
                          PRO Wireless è dotato della più recente tecnologia dei pulsanti principali. Grazie a una molla
                          metallica per tendere le piastre separate per il pulsante destro e sinistro, la distanza di
                          spostamento e la forza di attuazione (la forza necessaria al clic) sono state ridotte e
                          perfezionate. Ogni clic offrirà una sensazione tattile incredibilmente precisa, costante e
                          definita.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Animator>
          </ScrollPage>
          <ScrollPage>
            <Animator animation={batch(Fade(), MoveIn(-2000, 0))}>
              <div className="d-flex flex-column align-items-center">
                <div className="div-preview">
                  <h1 className="text-center my-5 titoloGrande">PREVIEW</h1>
                  {previewMouse === 1 && (
                    <div className="d-flex justify-content-around align-items-center">
                      <div className="img-custom">
                        <img src={articolo[6]?.img} alt="Mouse HP" width={"300px"} height={"300px"} />
                      </div>
                      <div>
                        <div className="d-flex flex-column align-items-center justify-content-center">
                          <p className="text-center fw-bold fs-3 ">SCOPRI ALTRI PRODOTTI</p>
                          <a>
                            <button onClick={previewMouseNextStep} className="bn632-hover bn20">
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
                  {previewMouse === 2 && (
                    <div className="d-flex justify-content-around align-items-center mt-5">
                      <div className="img-custom">
                        <img src={articolo[0]?.img} alt="Mouse Logitech" width={"300px"} height={"300px"} />
                      </div>
                      <div>
                        <span class="animate-icon"></span>
                        <a>
                          <button onClick={previewMousePreviousStep} className="bn632-hover bn20">
                            <span className="me-3">
                              <IoArrowBackOutline />
                            </span>
                            INDIETRO
                          </button>
                        </a>

                        <a>
                          <button onClick={previewMouseNextStep} className="bn632-hover bn20">
                            AVANTI
                            <span className="ms-3">
                              <GrLinkNext />
                            </span>
                          </button>
                        </a>
                      </div>
                    </div>
                  )}
                  {previewMouse === 3 && (
                    <div className="d-flex justify-content-around align-items-center mt-5">
                      <div className="img-custom">
                        <img src={articolo[1]?.img} alt="Mouse HP" width={"300px"} height={"300px"} />
                      </div>
                      <div>
                        <div className="d-flex flex-column align-items-center justify-content-center">
                          <p className="text-center fw-bold fs-3 ">TORNA AGLI ALTRI PRODOTTI</p>
                          <a>
                            <button onClick={previewMousePreviousStep} className="bn632-hover bn20">
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
                </div>
              </div>
            </Animator>
          </ScrollPage>
          <ScrollPage>
            <Animator animation={batch(Fade(), MoveIn(-2000, 0), Sticky(50, 35), MoveOut(0, -2000))}>
              <h1 className="titolo monitor">MONITOR</h1>
            </Animator>
            <Animator animation={batch(Fade(), MoveIn(-2000, 0), Sticky(50, 70), MoveOut(0, -2000))}>
              <div className="d-flex justify-content-center">
                <img src="https://i.postimg.cc/ZnVLzjZk/output-onlinegiftools.gif" alt="monitor Pic" />
              </div>
            </Animator>
          </ScrollPage>
          <div id="monitor">
            <ScrollPage>
              <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
                <div
                  className="d-flex flex-column align-items-center mt-5"
                  onMouseEnter={() => handleScroll(true)}
                  onMouseLeave={() => handleScroll(false)}
                >
                  <h1 className="mb-5 titoloGrande">STATISTICHE</h1>
                  <img src={articolo[15]?.img} width={"400px"} alt="Monitor G7" />
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
          </div>
          <ScrollPage>
            <Animator animation={batch(Fade(), MoveOut(0, -50))}>
              <div className="d-flex flex-column align-items-center">
                <div className="div-specifiche">
                  <h1 className="text-center titoloGrande">SPECIFICHE</h1>
                  {specificheMouse === 1 && (
                    <div className="d-flex justify-content-around align-items-center">
                      <div className="img">
                        <img
                          src="https://i.postimg.cc/FFZZtCC7/it-feature-the-curve-revolution-535155159-1.png"
                          alt="Monitor G7"
                        />
                      </div>
                      <div className="d-flex flex-column justify-content-center paragrafo">
                        <h4 className="fw-bold">La rivoluzione della curva</h4>
                        <span></span>
                        <p>
                          La curvatura 1000R, l’ultima frontiera della tecnologia dei monitor curvi, si adatta ai
                          contorni dell’occhio umano per un realismo inimmaginabile.
                        </p>
                      </div>
                      <div onClick={specificheMouseNextStep} className="button">
                        <GrLinkNext className="icona" />
                      </div>
                    </div>
                  )}
                  {specificheMouse === 2 && (
                    <div className="d-flex justify-content-between align-items-center">
                      <div onClick={specificheMousePreviousStep} className="button">
                        <GrLinkPrevious className="icona" />
                      </div>
                      <div className="d-flex flex-column justify-content-center paragrafo">
                        <h4 className="fw-bold">Immagini ultra-definite</h4>
                        <span></span>
                        <p>
                          QLED, HDR600 e risoluzione WQHD, insieme per dare vita a colori spettacolari con un
                          eccezionale livello di dettaglio e profondità.
                        </p>
                      </div>
                      <div className="img">
                        <img
                          src="https://i.postimg.cc/rwdCrVVr/it-feature-crystal-clear-picture-535155153.png"
                          alt="Monitor G7"
                        />
                      </div>
                      <div onClick={specificheMouseNextStep} className="button">
                        <GrLinkNext className="icona" />
                      </div>
                    </div>
                  )}
                  {specificheMouse === 3 && (
                    <div className="d-flex justify-content-between align-items-center">
                      <div onClick={specificheMousePreviousStep} className="button">
                        <GrLinkPrevious className="icona" />
                      </div>
                      <div className="img">
                        <img
                          src="https://i.postimg.cc/1t6ynNTj/it-feature-core-lighting-design-535155157.png"
                          alt="Monitor G7"
                        />
                      </div>
                      <div className="d-flex flex-column justify-content-center paragrafo">
                        <h4 className="fw-bold">Core Lighting Design</h4>
                        <span></span>
                        <p>
                          L’elegante pannello esterno in nero opaco presenta, al centro, un accattivante inserto
                          luminoso di richiamo futuristico.
                        </p>
                      </div>
                      <div onClick={specificheMouseNextStep} className="button">
                        <GrLinkNext className="icona" />
                      </div>
                    </div>
                  )}
                  {specificheMouse === 4 && (
                    <div className="d-flex justify-content-evenly align-items-center">
                      <div onClick={specificheMousePreviousStep} className="button">
                        <GrLinkPrevious className="icona" />
                      </div>
                      <div className="img">
                        <img
                          src="https://i.postimg.cc/Bnd55rbw/it-feature-engineered-for-victory-535155155.png"
                          alt="Monitor G7"
                        />
                      </div>
                      <div className="d-flex flex-column justify-content-center paragrafo">
                        <h4 className="fw-bold">Progettato per vincere</h4>
                        <span></span>
                        <p>
                          240Hz RapidCurve, tempo di risposta di 1 ms e compatibilità G-Sync per conquistare la vetta
                          della classifica.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Animator>
          </ScrollPage>
          <ScrollPage>
            <Animator animation={batch(Fade(), MoveIn(-2000, 0))}>
              <div className="d-flex flex-column align-items-center">
                <div className="div-preview">
                  <h1 className="text-center my-5 titoloGrande">PREVIEW</h1>
                  {previewMonitor === 1 && (
                    <div className="d-flex justify-content-around align-items-center">
                      <div className="img-custom">
                        <img src={articolo[10]?.img} alt="Monitor MSI" width={"300px"} height={"300px"} />
                      </div>
                      <div>
                        <div className="d-flex flex-column align-items-center justify-content-center">
                          <p className="text-center fw-bold fs-3 ">SCOPRI ALTRI PRODOTTI</p>
                          <a>
                            <button onClick={previewMonitorNextStep} className="bn632-hover bn20">
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
                  {previewMonitor === 2 && (
                    <div className="d-flex justify-content-around align-items-center mt-5">
                      <div className="img-custom">
                        <img src={articolo[16]?.img} alt="Monitor G9" width={"300px"} height={"300px"} />
                      </div>
                      <div>
                        <span class="animate-icon"></span>
                        <a>
                          <button onClick={previewMonitorPreviousStep} className="bn632-hover bn20">
                            <span className="me-3">
                              <IoArrowBackOutline />
                            </span>
                            INDIETRO
                          </button>
                        </a>
                        <a>
                          <button onClick={previewMonitorNextStep} className="bn632-hover bn20">
                            AVANTI
                            <span className="ms-3">
                              <GrLinkNext />
                            </span>
                          </button>
                        </a>
                      </div>
                    </div>
                  )}
                  {previewMonitor === 3 && (
                    <div className="d-flex justify-content-around align-items-center mt-5">
                      <div className="img-custom">
                        <img src={articolo[14]?.img} alt="Monitor 180hz" width={"300px"} height={"300px"} />
                      </div>
                      <div>
                        <div className="d-flex flex-column align-items-center justify-content-center">
                          <p className="text-center fw-bold fs-3 ">TORNA AGLI ALTRI PRODOTTI</p>
                          <a>
                            <button onClick={previewMonitorPreviousStep} className="bn632-hover bn20">
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
                </div>
              </div>
            </Animator>
          </ScrollPage>
          <ScrollPage>
            <Animator animation={batch(Fade(), MoveIn(3000, -500), Sticky(), MoveOut(0, -2000))}>
              <h1 className="titolo">TASTIERE</h1>
            </Animator>
            <Animator animation={batch(Fade(), MoveIn(-3000, -500), Sticky(50, 75), MoveOut(0, -2000))}>
              <div className="d-flex justify-content-center">
                <img
                  src="https://i.postimg.cc/rFXWnBLB/keyboard.png"
                  alt="tastiera icona"
                  width={"500px"}
                  style={{ filter: "drop-shadow(5px 5px 10px black)" }}
                />
              </div>
            </Animator>
          </ScrollPage>
          <div id="tastiera">
            <ScrollPage>
              <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
                <div
                  className="d-flex flex-column align-items-center mt-5"
                  onMouseEnter={() => handleScroll(true)}
                  onMouseLeave={() => handleScroll(false)}
                >
                  <h1 className="mb-5 titoloGrande">STATISTICHE</h1>
                  <img src={articolo[25]?.img} width={"400px"} alt="Tastiera Fnatic" />
                  <div className="statistica d-flex justify-content-evenly mt-5 w-100">
                    <div className="d-flex flex-column align-items-center justify-content-center me-5">
                      <span className="number">{numeriFinali[0]}</span>
                      <span className="description">TASTIERE VENDUTE</span>
                    </div>
                    <div className="divisore"></div>
                    <div className="d-flex flex-column align-items-center justify-content-center mx-5">
                      <span className="number">{numeriFinali[1]}</span>
                      <span className="description">PRENOTAZIONI GIORNALIERE</span>
                    </div>
                    <div className="divisore"></div>
                    <div className="d-flex flex-column align-items-center justify-content-center ms-5">
                      <span className="number">{numeriFinali[2]}+</span>
                      <span className="description">TASTIERE PRODOTTE</span>
                    </div>
                  </div>
                </div>
              </Animator>
            </ScrollPage>
          </div>
          <ScrollPage>
            <Animator animation={batch(Fade(), MoveOut(0, -50))}>
              <div className="d-flex flex-column align-items-center">
                <div className="div-specifiche">
                  <h1 className="text-center titoloGrande">SPECIFICHE</h1>
                  {specificheMouse === 1 && (
                    <div className="d-flex justify-content-around align-items-center">
                      <div className="img">
                        <img
                          src="https://i.postimg.cc/bJqt3phL/d780afe220b45d76a2a914f8f0cee2437af381b5-1920x1080-removebg-preview.png"
                          alt="Tastiera Fnatic"
                        />
                      </div>
                      <div className="d-flex flex-column justify-content-center paragrafo">
                        <h4 className="fw-bold">TASTI TEXTURED</h4>
                        <span></span>
                        <p>
                          Ti dà una sensazione ancora migliore quando giochi o digita quel rapporto KPI che era dovuto
                          la scorsa settimana.
                        </p>
                      </div>
                      <div onClick={specificheMouseNextStep} className="button">
                        <GrLinkNext className="icona" />
                      </div>
                    </div>
                  )}
                  {specificheMouse === 2 && (
                    <div className="d-flex justify-content-between align-items-center">
                      <div onClick={specificheMousePreviousStep} className="button">
                        <GrLinkPrevious className="icona" />
                      </div>
                      <div className="d-flex flex-column justify-content-center paragrafo">
                        <h4 className="fw-bold">Build superiore</h4>
                        <span></span>
                        <p>
                          <span className="fw-bold">Costruzione di alluminio</span>
                          <br />
                          La costruzione in metallo in alluminio massiccio mentre pesa 420 grammi di piume garantisce
                          durata e portabilità.
                          <br />
                          <br />
                          <span className="fw-bold">L'acustica ottimizzata</span>
                          <br />
                          Abbiamo aggiunto un ulteriore livello di schiuma di smorzamento del suono per aiutare con
                          l'acustica complessiva della tastiera.
                          <br />
                          <br />
                          <span className="fw-bold">Stabilizzatori lubrificati personalizzati</span>
                          <br />I nostri stabilizzatori personalizzati vengono pre-lubrificati, riducendo il suono e le
                          incongruenze, migliorando l'acustica della tastiera.
                        </p>
                      </div>
                      <div className="img">
                        <img
                          src="https://i.postimg.cc/fyTYTZqk/8776567c3e8897ee770d6cff10d5ca79ef37b25a-1080x1080-removebg-preview.png"
                          alt="Tastiera Fnatic"
                        />
                      </div>
                      <div onClick={specificheMouseNextStep} className="button">
                        <GrLinkNext className="icona" />
                      </div>
                    </div>
                  )}
                  {specificheMouse === 3 && (
                    <div className="d-flex justify-content-between align-items-center">
                      <div onClick={specificheMousePreviousStep} className="button">
                        <GrLinkPrevious className="icona" />
                      </div>
                      <div className="img">
                        <img
                          src="https://i.postimg.cc/fLsxpYxc/2fbaf83e0a41238b4f4ea61dfd89de6cfa189f3a-1080x1080-removebg-preview.png"
                          alt="Tastiera Fnatic"
                        />
                      </div>
                      <div className="d-flex flex-column justify-content-center paragrafo">
                        <h4 className="fw-bold">Il brillante RGB</h4>
                        <span></span>
                        <p>
                          <span className="fw-bold">Illuminazione immersiva</span>
                          <br />
                          16,8 milioni di colori tra cui scegliere. Personalizzabile nel software OP e salvato
                          direttamente nello storage di bordo. Due LED di spazio extra che fiancheggiano i lati
                          dell'interruttore.
                          <br />
                          <br />
                          <span className="fw-bold">Meno keycap, più luce</span>
                          <br />
                          Il profilo di keycap personalizzato progettato da FNATIC espelle più illuminazione dal lato
                          dell'interruttore e lo diffonde su tutta la tastiera per illuminare l'allestimento della
                          scrivania.
                        </p>
                      </div>
                      <div onClick={specificheMouseNextStep} className="button">
                        <GrLinkNext className="icona" />
                      </div>
                    </div>
                  )}
                  {specificheMouse === 4 && (
                    <div className="d-flex justify-content-between align-items-center">
                      <div onClick={specificheMousePreviousStep} className="button">
                        <GrLinkPrevious className="icona" />
                      </div>
                      <div className="img">
                        <img
                          src="https://i.postimg.cc/qMDxqhTr/857d5ef52fa848f972f8ace7b6c97f2efd9f1044-1080x1080-removebg-preview.png"
                          alt="Tastiera Fnatic"
                        />
                      </div>
                      <div className="d-flex flex-column justify-content-center paragrafo">
                        <h4 className="fw-bold">Cavo di alimentazione USB-C</h4>
                        <span></span>
                        <p>
                          <span className="fw-bold">Bobiled e pronto</span>
                          <br />
                          Arrivando a un totale di 1,8 metri di lunghezza, il cavo esterno intrecciato siederà
                          abbastanza sulla scrivania riducendo al minimo il disordine del cavo grazie alla bobina ben
                          imballata, ma estensibile da 16 centimetri.
                          <br />
                          <br />
                          <span className="fw-bold">È semplice come A a C</span>
                          <br />E a differenza di alcune altre aziende che sono ancora bloccate in passato, sappiamo
                          cosa vogliono le persone, quindi ovviamente il nostro cavo di alimentazione ha connettori
                          USB-A USB-C standard e non proprietari.
                        </p>
                      </div>
                      <div onClick={specificheMouseNextStep} className="button">
                        <GrLinkNext className="icona" />
                      </div>
                    </div>
                  )}
                  {specificheMouse === 5 && (
                    <div className="d-flex justify-content-evenly align-items-center">
                      <div onClick={specificheMousePreviousStep} className="button">
                        <GrLinkPrevious className="icona" />
                      </div>
                      <div className="img">
                        <img
                          src="https://i.postimg.cc/hGTL2274/cd7660f3eba78759960258d6ed66a12de524c438-1920x1080-removebg-preview.png"
                          alt="Tastiera Fnatic"
                        />
                      </div>
                      <div className="d-flex flex-column justify-content-center paragrafo">
                        <h4 className="fw-bold">Basso profilo degli switches</h4>
                        <span></span>
                        <p>
                          <span className="fw-bold">L'ultimo interruttore eSports</span>
                          <br />
                          Dotato di interruttori a basso profilo FNATIC, l'SREAK65 LP offre la massima velocità con un
                          pre-viaggio da 1,0 mm. Ciò offre una battitura fluida e impeccabile quando si gioca,
                          consentendo di concentrarsi sulle prestazioni.
                          <br />
                          <br />
                          <span className="fw-bold">Ergonomia di commutazione perfezionata</span>
                          <br />
                          L'interruttore FNATIC a basso profilo è inferiore del 35% rispetto agli interruttori meccanici
                          tradizionali. L’altezza dei tasti è ridotta, consentendo una posizione del polso più sana e
                          naturale, anche senza l’uso di un poggiapolsi.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Animator>
          </ScrollPage>
          <ScrollPage>
            <Animator animation={batch(Fade(), MoveIn(-2000, 0))}>
              <div className="d-flex flex-column align-items-center">
                <div className="div-preview">
                  <h1 className="text-center my-5 titoloGrande">PREVIEW</h1>
                  {previewTastiera === 1 && (
                    <div className="d-flex justify-content-around align-items-center">
                      <div className="img-custom">
                        <img src={articolo[24]?.img} alt="Tastiera Logitech" width={"300px"} height={"300px"} />
                      </div>
                      <div>
                        <div className="d-flex flex-column align-items-center justify-content-center">
                          <p className="text-center fw-bold fs-3 ">SCOPRI ALTRI PRODOTTI</p>
                          <a>
                            <button onClick={previewTastieraNextStep} className="bn632-hover bn20">
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
                  {previewTastiera === 2 && (
                    <div className="d-flex justify-content-around align-items-center mt-5">
                      <div className="img-custom">
                        <img src={articolo[23]?.img} alt="Tastiera Fnatic" width={"300px"} height={"300px"} />
                      </div>
                      <div>
                        <span class="animate-icon"></span>
                        <a>
                          <button onClick={previewTastieraPreviousStep} className="bn632-hover bn20">
                            <span className="me-3">
                              <IoArrowBackOutline />
                            </span>
                            INDIETRO
                          </button>
                        </a>
                        <a>
                          <button onClick={previewTastieraNextStep} className="bn632-hover bn20">
                            AVANTI
                            <span className="ms-3">
                              <GrLinkNext />
                            </span>
                          </button>
                        </a>
                      </div>
                    </div>
                  )}
                  {previewTastiera === 3 && (
                    <div className="d-flex justify-content-around align-items-center mt-5">
                      <div className="img-custom">
                        <img src={articolo[26]?.img} alt="Tastiera Corsair" width={"300px"} height={"300px"} />
                      </div>
                      <div>
                        <div className="d-flex flex-column align-items-center justify-content-center">
                          <p className="text-center fw-bold fs-3 ">TORNA AGLI ALTRI PRODOTTI</p>
                          <a>
                            <button onClick={previewTastieraPreviousStep} className="bn632-hover bn20">
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
