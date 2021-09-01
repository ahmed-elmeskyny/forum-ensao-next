import React from "react";

//styling
import styles from "./footer.module.scss";

//next
import Link from "next/link";
import Image from "next/image";

//react_icons
import { MdLocationOn } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className={styles.footerContainer}>
        <div className={styles.footerHero}>
          <div className={styles.logoSection}>
            <Image
              alt="logo"
              src="/logoForum.png"
              width="100px"
              height="100px"
            />
            <div className={styles.logoText}>
              <h3>Forum Ensao</h3>
              <h4>entreprises</h4>
              <h6>10éme édition</h6>
            </div>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero,
            voluptatem harum uadipisicing elit. Corporis est porro at repellat
            magnam? Aut officiis quia voluptate unde nemo laboriosam dolore
            labore autem quae deserunt? Distinctio voluptatum nostrum a.
          </p>
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.info}>
            <ul>
              <li>
                {" "}
                <MdLocationOn
                  style={{ color: "#17B27A", marginRight: "10px" }}
                ></MdLocationOn>{" "}
                BP 669 Quartier Alquodss, Oujda 60000{" "}
              </li>
              <li>
                {" "}
                <FiPhone
                  style={{ color: "#17B27A", marginRight: "10px" }}
                ></FiPhone>{" "}
                (+212) 698357894{" "}
              </li>
              <li>
                {" "}
                <FiMail
                  style={{ color: "#17B27A", marginRight: "10px" }}
                ></FiMail>{" "}
                forumensao@gmail.com{" "}
              </li>
            </ul>
          </div>
          <div className={styles.contact}>
            <p>Contact Us</p>
            <div className={styles.contactButton}>
              <span>
                Pour plus d'information , n'hésitez pas de nous contacter
              </span>
              <Link href="/contact">
                <a className={styles.link}> CONTACTEZ-NOUS !</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <span>
          {" "}
          Copyright © 2020 | Forum Ensao Entreprises || By{" "}
          <span style={{ color: "#11b67a", textDecoration: "underline" }}>
            <Link href="http://ahmed-elmeskyny.herokuapp.com/">
              <a>Ahmed El Meskyny</a>
            </Link>
          </span>
        </span>
        <div className={styles.social}>
          <FaFacebookF className={styles.icon}></FaFacebookF>
          <FaLinkedinIn className={styles.icon}></FaLinkedinIn>
        </div>
      </div>
    </>
  );
};

export default Footer;
