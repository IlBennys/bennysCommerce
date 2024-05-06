import "../assets/sass/PageNotFound.scss";

const PageNotFound = ({ light }) => {
  return (
    <div className="titleError">
      <div className="sottoTitleError">
        <p
          id="accaUno"
          style={{
            filter: light
              ? "drop-shadow(5px 5px 5px black)"
              : "drop-shadow(5px 5px 5px white)",
          }}
          className={`position-relative ${light ? "nero" : "bianco"}`}
        >
          ERROR 404
        </p>
        <div
          className="position-absolute sottoH1"
          style={{
            backgroundColor: light ? "black" : "white",
            color: light ? "white" : "black",
          }}
        >
          LA PAGINA NON ESISTE
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
