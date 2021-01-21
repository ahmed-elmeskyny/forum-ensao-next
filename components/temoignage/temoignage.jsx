import React from "react";

//styling
import styles from "./temoignage.module.scss";
import 'react-slideshow-image/dist/styles.css';

//slideshow
import {Slide} from "react-slideshow-image";

const properties = {
    arrows:false,
}

const Temoignage = () => {

    return (
    <div className={styles.temContainer}>
        <div className={styles.container}>
            <div className={styles.temHeader}>
               <h1>CE QUE LES ETUDIANTS  DISENT DE NOUS</h1>
               <p>FeedBack des étudiants</p>
            </div>
            <Slide {...properties}>   
               <div className={styles.eachSlide}>
                   <p>Lorem ipsum d, iure molestias repudiandae commodi repellat asperiores facilis illum nisi dicta dignissimos! Nostrum repudiandae quis consequuntur culpa eius.</p>
                   <div className={styles.img}></div>
               </div>
               <div className={styles.eachSlide}>
                   <p>Lorem ipsum dolor sit ajjjjjjmkiykctq bmet, consectetur adipisicing elit. A, velit! Sunt tempore fugit, iure molestias repudiandae commodi repellat asperiores facilis illum nisi dicta dignissimos! Nostrum repudiandae quis consequuntur culpa eius.</p>
                   <div className={styles.img}></div>
               </div>
               <div className={styles.eachSlide}>
                   <p>Lorem empore fugit, iure molestias repudiandae commodi repellat asperiores facilis illum nisi dicta dignissimos! Nostrum repudiandae quis consequuntur culpa eius.</p>
                   <div className={styles.img}></div>
               </div>
            </Slide>
        </div>
    </div>
    )
}

export default Temoignage;