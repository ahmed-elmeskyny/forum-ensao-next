import React from "react";

//styling
import styles from "./header.module.scss";

//next
import Image from "next/image";
import Link from "next/link";

//react-icons
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import { HiOutlineMailOpen } from "react-icons/hi";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.topSection}>
        <div className={styles.locationFAQ}>
          <div className={styles.location}>
            <span>
              <MdLocationOn style={{ color: "#11B67A" }}></MdLocationOn> BP 669
              Quartier Alquodss, Oujda 60000{" "}
            </span>
          </div>
          <div className={styles.faq}>
            <span>
              <Link href="/faq">
                <a>F.A.Q ?</a>
              </Link>
            </span>
          </div>
        </div>
        <div className={styles.socialMedia}>
          <FaFacebookF className={styles.icon}></FaFacebookF>
          <FaLinkedinIn className={styles.icon}></FaLinkedinIn>
          <FaInstagram className={styles.icon}></FaInstagram>
        </div>
      </div>

      <div className={styles.heroSection}>
        <div className={styles.logo}>
          <Image alt="logo" src="/logoForum.png" width="80px" height="80px" />
          <div className={styles.logoText}>
            <h3>Forum Ensao</h3>
            <h4>entreprises</h4>
            <h6>10éme édition</h6>
          </div>
        </div>
        <div className={styles.contactHeader}>
          <div className={styles.telephone}>
            <BiPhoneCall className={styles.phoneIcon}></BiPhoneCall>
            <div>
              <p style={{ fontSize: "14px", color: "#aaaaa4" }}>
                Nous contacter
              </p>
              <p>(+212) 698357894</p>
            </div>
          </div>
          <div className={styles.email}>
            <HiOutlineMailOpen className={styles.emailIcon}></HiOutlineMailOpen>
            <div>
              <p style={{ fontSize: "14px", color: "#aaaaa4" }}>nous emailer</p>
              <p>forumensao@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
