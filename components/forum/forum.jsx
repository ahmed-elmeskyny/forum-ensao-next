import React from "react";

//styling
import styles from "./forum.module.scss";

//next
import Image from "next/image";




const Forum = () => {

    return (
        <div className={styles.forumContainer} id="#apropos">
            <h1> A PROPOS</h1>
            <div className={styles.apropos}>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum consequatur ipsam, obcaecati aut qui praesentium, cupiditate facilis exercitationem, odit laudantium id veniam facere perspiciatis illo corrupti. Aut quia ab illo.
                   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti et animi labore! Voluptatum asperiores porro dolor maiores id similique eum maxime, quis, sapiente aspernatur obcaecati a! Similique, sed. Numquam, ullam?
                </p>
            </div>
            <h1>Videos</h1>
            <div className={styles.media}>
                <div style={{width:"400px"}}>
                    <video src="/forum.mp4" width="100%" height="300px" controls style={{outline:"none"}}>
                    </video>
                </div>
                <div className={styles.logos}>
                   <Image alt="universite" src="/Ensao.png" width="120px" height="120px" style={{marginTop:"20px"}}/>
                </div>
            </div>
        </div>
    )
}

export default Forum;