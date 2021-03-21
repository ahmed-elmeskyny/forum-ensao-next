import React, { useState } from "react";

//styling
import styles from  "./mobile-menu.module.scss";

//next
import Link  from "next/link";

//react_icons
import {AiOutlineDown} from "react-icons/ai";
import {RiDeleteBackFill} from "react-icons/ri";

//redux
import {connect} from "react-redux";
import { toggle } from "../../redux/mobile-reducer/mobile-action";



const MobileMenu = ( { isToggle , toggle}) => { 

    const [open , setOpen] = useState(false);
    const  [open1 , setOpen1] = useState(false);
    
        return  isToggle ? (
        <div className={styles.mobileMenuContainer}>
            <div className={styles.slideMenu}>
                <div className={styles.closeSlide} >
                   <RiDeleteBackFill onClick={() => toggle()}></RiDeleteBackFill>
                </div>
                <ul>
                    <li><Link href="/"><a className={styles.link} >ACCEUIL </a></Link></li>
                    <li><Link href="/apropos "><a className={styles.link}> A PROPOS</a></Link></li>
                    <li onClick={()=> setOpen(!open)}>
                            NOS PARTENAIRES
                            <AiOutlineDown style={{ marginLeft:"5px"}}></AiOutlineDown>
                        {open ? <div>
                            <ul className={styles.dropdownMenu}>
                                <li><Link href="/nospartenaires/ade"><a className={styles.subLink}>ade</a></Link></li>
                                <li><Link href="/nospartenaire/partenaire2"><a className={styles.subLink}> partenaire 2</a></Link></li>
                                <li><Link href="/nospartenaire/partenare3"><a className={styles.subLink}> partenaire 3</a></Link></li>
                            </ul>
                        </div> : null}
                    </li>
                    <li onClick={() => setOpen1(!open1)}>
                            NOS SPONSORS 
                            <AiOutlineDown style={{ marginLeft:"5px"}}></AiOutlineDown>
                        {open1 ? <div>
                            <ul className={styles.dropdownMenu}>
                                <li><Link href="/nospartenaires/ade"><a className={styles.subLink} >ensao</a></Link></li>
                                <li><Link href="/nospartenaire/partenaire2"><a className={styles.subLink} >sponsor 2</a></Link></li>
                                <li><Link href="/nospartenaire/partenare3"><a className={styles.subLink} >sponsor 3</a></Link></li>
                            </ul>
                        </div> : null }
                    </li>
                    <li><Link href="/contact"><a className={styles.link }>Contactez-nous</a></Link></li>
                </ul>
            </div>
        </div>) : null 
     }

const mapStateToProps = (state) => ( {
    isToggle : state.toggle.isToggle,
})

const mapDispatchToProps = (dispatch) => ({
    toggle : ()=> dispatch(toggle())
})
export default connect(mapStateToProps,mapDispatchToProps)(MobileMenu);