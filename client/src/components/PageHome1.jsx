import { useEffect, useRef, useState } from "react";
import { Carousel } from "react-bootstrap";
import {
  Animator,
  Fade,
  MoveIn,
  MoveOut,
  ScrollContainer,
  ScrollPage,
  Sticky,
  Zoom,
  ZoomIn,
  ZoomOut,
  batch,
} from "react-scroll-motion";

const Prova = () => {
  const [numeriFinali, setNumeriFinali] = useState([100, 30, 200]);
  const [index, setIndex] = useState(0);

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
    }, 100);
  };

  useEffect(() => {
    const spans = document.querySelectorAll(".number");
    spans.forEach((span, index) => {
      const numeroIndicato = parseInt(span.textContent);
      generaNumeroCasuale(numeroIndicato, index);
    });
  }, []);

  return (
    <>
      <ScrollContainer>
        <ScrollPage>
          <Animator animation={batch(Sticky(), ZoomOut())}>
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
              <h1 className="my-5 fw-bolder">PREVIEW ARTICOLI</h1>
              <img
                src="https://cdn.discordapp.com/attachments/1062713292226830409/1222587789657243708/M8-removebg-preview.png?ex=66346c5b&is=66331adb&hm=3d505489ed71c288779c0c08feea4cd23a2db9160c3d066fa5267f0c8abd5f90&"
                alt="Monitor G7"
              />
              <div className="statistica d-flex justify-content-evenly mt-5 w-100">
                <div className="d-flex flex-column align-items-center justify-content-center">
                  <span className="number">{numeriFinali[0]}</span>
                  <span className="description">MONITOR VENDUTI</span>
                </div>
                <div className="divisore"></div>
                <div className="d-flex flex-column align-items-center justify-content-center">
                  <span className="number">{numeriFinali[1]}</span>
                  <span className="description">PRENOTAZIONI GIORNALIERE</span>
                </div>
                <div className="divisore"></div>
                <div className="d-flex flex-column align-items-center justify-content-center">
                  <span className="number">{numeriFinali[2]}+</span>
                  <span className="description">MONITOR PRODOTTI</span>
                </div>
              </div>
            </div>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
            <span style={{ fontSize: "30px" }}>Ecco un esempio di animazione di scorrimento! 😄</span>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
            <span style={{ fontSize: "30px" }}>Ecco un esempio di animazione di scorrimento! 😄</span>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={batch(Sticky(), ZoomOut())}>
            <img src="https://freepngimg.com/thumb/monitor/4-monitor-png-image-thumb.png" alt="monitor Pic" />
          </Animator>
        </ScrollPage>
        {/* Aggiungi altre pagine qui con diverse animazioni */}
      </ScrollContainer>
    </>
  );
};
export default Prova;
