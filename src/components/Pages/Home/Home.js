import React from "react";
import Place from "./Place";
const DATA = [
  {
    date: "JUL 19",
    place: "Delhi",
    specPlace: "Lal Darawaja",
  },
  {
    date: "AUG 29",
    place: "Mumbai",
    specPlace: "Taj Hotel",
  },
  {
    date: "SEP 30",
    place: "Ahmedabad",
    specPlace: "Kakriya lake",
  },
  {
    date: "JUN 30",
    place: "Patan",
    specPlace: "Raniki vav",
  },
  {
    date: "JUL 19",
    place: "Delhi",
    specPlace: "Lal Darawaja",
  },
];

const Home = () => {
  const Places = DATA.map((d) => {
    return <Place place={d.place} date={d.date} specPlace={d.specPlace} key={d.place} />;
  });

  return (
    <React.Fragment>
      <div className="d-flex justify-content-center" style={{ backgroundColor: "rgb(66, 63, 63)", padding: "15px" }}>
        <button className="fs-2">Get our Latest Album</button>
      </div>

      <div className="d-flex justify-content-center" style={{ backgroundColor: "rgb(66, 63, 63)", padding: "10px" }}>
        <button className="btn btn-primary" style={{ padding: "15px" }}>
          ►
        </button>
      </div>

      <h2 className="d-flex justify-content-center mb-5 mt-5" style={{ fontWeight: "bold" }}>
        TOURS
      </h2>

      <div className="container d-flex justify-content-center">
        <div className="list-group">{Places}</div>
      </div>
    </React.Fragment>
  );
};

export default Home;
