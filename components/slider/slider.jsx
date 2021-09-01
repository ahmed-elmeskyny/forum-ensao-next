import React from "react";
import { Slide } from "react-slideshow-image";

//styling
import styles from "./slider.module.scss";
import "react-slideshow-image/dist/styles.css";

//react-icons
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";

const slides = ["/slide5.jpeg", "/slide7.jpg", "/slide8.jpg"];

const properties = {
  prevArrow: (
    <AiOutlineLeft
      style={{
        fontSize: "40px",
        cursor: "pointer",
        position: "absolute",
        color: "white",
      }}
    ></AiOutlineLeft>
  ),
  nextArrow: (
    <AiOutlineRight
      style={{
        fontSize: "40px",
        cursor: "pointer",
        position: "absolute",
        right: "0px",
        color: "white",
      }}
    ></AiOutlineRight>
  ),
  duration: 2000,
};

const Slider = () => {
  return (
    <Slide {...properties}>
      <div className={styles.eachSlide}>
        <div
          style={{
            background: `url(${slides[0]}) no-repeat`,
            backgroundSize: "cover",
            height: "500px",
          }}
        >
          <div className={styles.slideText}>
            <div className={styles.textContainer}>
              <h1>Forum Ensao Entreprises</h1>
              <span>
                Lorem ipsum dolor sit amet cone repudiandae libero, quasi,
                facere voluptates distinctio vitae mollitia eos illo aliquam
                ducimus perferendis in itaque iure exercitationem laborum enim
                eveniet nihil! Itaque deleniti reiciendis placeat qui expedita?
                Fugiat nostrum eum harum quod et est minima dolor vero sed
                blanditiis.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.eachSlide}>
        <div style={{ backgroundImage: `url(${slides[1]}) `, height: "500px" }}>
          <div className={styles.slideText}>
            <div className={styles.textContainer}>
              <h1>Titre</h1>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                ratione quia error. Itaque deleniti reiciendis placeat qui
                expedita? Fugiat nostrum eum harum quod et est minima dolor vero
                sed blanditiis.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.eachSlide}>
        <div style={{ backgroundImage: `url(${slides[2]}) `, height: "500px" }}>
          <div className={styles.slideText}>
            <div className={styles.textContainer}>
              <h1>Titre</h1>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                ratione quia error. Itaque deleniti reiciendis placeat qui
                expedita? Fugiat nostrum eum harum quod et est minima dolor vero
                sed blanditiis.
              </span>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
};
export default Slider;
