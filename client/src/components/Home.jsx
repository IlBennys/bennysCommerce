import "../assets/sass/Home.scss";
import Carousel from "react-bootstrap/Carousel";
import { useEffect, useState } from "react";
import mouse from "../assets/img/mousee.png";
const Home = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <div className="div1 my-4">
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
      <div style={{ width: "200px", height: "200px" }}>
        <img src={mouse} alt="" />
      </div>
    </>
  );
};

export default Home;
