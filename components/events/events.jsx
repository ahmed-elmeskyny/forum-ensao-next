import React from "react";

//styling
import styles from "./events.module.scss";

//next
import Image from "next/image";

//react-icons
import { AiFillCaretRight } from "react-icons/ai";

const Events = () => {
  return (
    <div className={styles.actualite}>
      <div className={styles.event}>
        <h3>EVENTS</h3>
        <div className={styles.eventText}>
          <ul>
            <li>
              1-Lorem ipsum dolor sit to nihil didjisdj{" "}
              <span>
                Lorem ilit. Id, consecteturoribus ad nemo tenetur iste veritati
              </span>
            </li>
            <li>
              2-Lorem ipsum dolor sit amet c tenetur{" "}
              <span>Lorem ilit. ribus ad nemo tenetur iste veritati</span>
            </li>
            <li>
              3-Lorem ipsum dolor, sit atd dnj lqjdknd lksdlk lsk dkj .{" "}
              <span>Lorem ilit. doloribus ad nemo tenetur iste veritati</span>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.blog}>
        <Image alt="blog" src="/image1.jpg" width="250px" height="150px" />
        <h1>Titre/Question</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
          inventore rerum aliquam. Sed non nisi assumenda minus ducimus modi
          quas consequuntur odio ex laborum. Ut corrupti nto ex! Omnis,
          aspernatur quas?
        </p>
        <span>
          Lire La suite{" "}
          <AiFillCaretRight style={{ paddingTop: "5px" }}></AiFillCaretRight>
        </span>
      </div>
      <div className={styles.blog}>
        <Image alt="blog" src="/image2.jpg" width="250px" height="150px" />
        <h1>Titre/Question</h1>
        <p>
          Lorem, iasi iure autem! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Distinctio beatae reiciendis deserunt tenetur,
          provident sapiente dolore hic eos aspicabo ex! Omnis, aspernatur quas?
        </p>
        <span>
          Lire La suite{" "}
          <AiFillCaretRight style={{ paddingTop: "5px" }}></AiFillCaretRight>{" "}
        </span>
      </div>
      <div className={styles.blog}>
        <Image alt="blog" src="/image3.jpg" width="250px" height="150px" />
        <h1>Titre/Question</h1>
        <p>
          Lorem, ipsum doutem! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Distinctio beatae reiciendis deserunt tenetur,
          provident sapiente dolore hic eos asperiores licabo ex! Omnis,
          aspernatur quas?
        </p>
        <span>
          Lire La suite{" "}
          <AiFillCaretRight style={{ paddingTop: "5px" }}></AiFillCaretRight>
        </span>
      </div>
    </div>
  );
};

export default Events;
