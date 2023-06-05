import React, { useEffect } from "react";
import "./main.scss";
import img from "../../Assests/img(1).jpg";
import img2 from "../../Assests/img(2).jpg";
import img3 from "../../Assests/img(3).jpg";
import img4 from "../../Assests/img(4).jpg";
import img5 from "../../Assests/img(5).jpg";
import img6 from "../../Assests/img(6).jpg";
import img7 from "../../Assests/img(7).jpg";
import img8 from "../../Assests/img(8).jpg";
import img9 from "../../Assests/img(9).jpg";
import img10 from "../../Assests/img(10).jpg";
import img11 from "../../Assests/img(11).jpg";
import img12 from "../../Assests/img(12).jpg";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";

import Aos from "aos";
import "aos/dist/aos.css";

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "The epitome of romance, Bora Bora is one of the best travel destination in the world. This place is known for its luxurious stays add adventurous activities.",
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: "Machu Picchu",
    location: "Peru",
    grade: "CULTURAL RELAX",
    fees: "$600",
    description:
      "The epitome of romance, Bora Bora is one of the best travel destination in the world. This place is known for its luxurious stays add adventurous activities.",
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: "Great Barrier Reef",
    location: "Australia",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "The epitome of romance, Bora Bora is one of the best travel destination in the world. This place is known for its luxurious stays add adventurous activities.",
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: "Coppandocia",
    location: "Turkey",
    grade: "CULTURAL RELAX",
    fees: "$800",
    description:
      "The epitome of romance, Bora Bora is one of the best travel destination in the world. This place is known for its luxurious stays add adventurous activities.",
  },
  {
    id: 5,
    imgSrc: img5,
    destTitle: "Guanajuato",
    location:"Mexico",
    grade: "CULTURAL RELAX",
    fees: "$1100",
    description:
      "The epitome of romance, Bora Bora is one of the best travel destination in the world. This place is known for its luxurious stays add adventurous activities.",
  },
  {
    id: 6,
    imgSrc: img6,
    destTitle: "Chinque Terre",
    location: "Italy",
    grade: "CULTURAL RELAX",
    fees: "$840",
    description:
      "The epitome of romance, Bora Bora is one of the best travel destination in the world. This place is known for its luxurious stays add adventurous activities.",
  },
  {
    id: 7,
    imgSrc: img7,
    destTitle: "Taj Mahal ",
    location: "India",
    grade: "CULTURAL RELAX",
    fees: "$790",
    description:
      "The epitome of romance, Bora Bora is one of the best travel destination in the world. This place is known for its luxurious stays add adventurous activities.",
  },
  {
    id: 8,
    imgSrc: img8,
    destTitle: "Angkor Wat",
    location: "Combodia",
    grade: "CULTURAL RELAX",
    fees: "$900",
    description:
      "The epitome of romance, Bora Bora is one of the best travel destination in the world. This place is known for its luxurious stays add adventurous activities.",
  },
  {
    id: 9,
    imgSrc: img9,
    destTitle: "Bali Island",
    location: "Indonesia",
    grade: "CULTURAL RELAX",
    fees: "$500",
    description:
      "The epitome of romance, Bora Bora is one of the best travel destination in the world. This place is known for its luxurious stays add adventurous activities.",
  },
  {
    id: 10,
    imgSrc: img10,
    destTitle: "Bangkok",
    location: "Thailand",
    grade: "CULTURAL RELAX",
    fees: "$900",
    description:
      "The epitome of romance, Bora Bora is one of the best travel destination in the world. This place is known for its luxurious stays add adventurous activities.",
  },
  {
    id: 11,
    imgSrc: img11,
    destTitle: "Yellow Stone Park",
    location: "New York",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "The epitome of romance, Bora Bora is one of the best travel destination in the world. This place is known for its luxurious stays add adventurous activities.",
  },
  {
    id: 12,
    imgSrc: img12,
    destTitle: "The Sunrise Point",
    location: "Finland",
    grade: "CULTURAL RELAX",
    fees: "$1000",
    description:
      "The epitome of romance, Bora Bora is one of the best travel destination in the world. This place is known for its luxurious stays add adventurous activities.",
  },
];

const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most visited destination
        </h3>
      </div>

      <div className="secContent grid">
        {Data.map(
          ({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div key={id} data-aos="fade-up" className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {grade}
                        <small>+1</small>
                      </span>
                    </div>

                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className="btn flex">
                    DETAILS
                    <HiOutlineClipboardCheck className="icon" />
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};
export default Main;
