import React from "react";

//styling
import styles from "./partenaire.module.scss";


//next
import Image from "next/image";




const Partenaire= ()=> {

    return (
        <div className={styles.partenaireContainer}>
            <h1>NOS PARTENAIRES</h1>
            <div className={styles.partenaire}>
                <Image className={styles.img} alt="partenaire" src="/ade.png" width="100px" height="100px"></Image>
                <Image className={styles.img} alt="partenaire" src="/Ensao.png" width="100px" height="100px"></Image>
            </div>
        </div>
    )
}

export default Partenaire;