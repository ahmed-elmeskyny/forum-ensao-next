import React, { useEffect, useState } from "react";

//styles
import styles from "./menu.module.scss";

//assets



//react-icons
import {AiOutlineDown} from "react-icons/ai";
import {RiMenu2Fill} from "react-icons/ri";

//next
import Link from "next/link";
import Image from "next/image";


//redux
import { connect } from "react-redux";
import {toggle} from "../../redux/mobile-reducer/mobile-action";


const Menu = ({isNormal , toggle}) => {

    const [ open , setopen] = useState(false);
    const [ open1 , setopen1] = useState(false);
    const [scroll , setScroll] = useState(true);

    const handleScroll = ()=> {
        const offset=window.scrollY;
        if(offset > 300 ){
          setScroll(false);
        }
        else{
          setScroll(true);
        }
      }
    useEffect(() => {
        window.addEventListener('scroll',handleScroll)
      })

    return (
    <>
        <div  className={ isNormal ? styles.menuContainer  : (scroll ? styles.menuContainer : styles.fixedMenu ) }>
            <div className={styles.menu}>
                <ul> 
                    { scroll ? null : <li><Image alt="logo" src="/logoForum.png" width="60px" height="60px" /> </li>}
                    <li><Link href="/"><a className={styles.link}>ACCEUIL </a></Link></li>
                    <li><Link href="/apropos"><a className={styles.link}>A PROPOS</a></Link></li>
                    <li className={styles.dropdown} onMouseEnter={()=> setopen1(true)}>
                        <Link  href="/"> 
                        <a className={styles.link}>
                            NOS PARTENAIRES 
                            <AiOutlineDown style={{ marginLeft:"5px"}}></AiOutlineDown>
                            </a>
                        </Link>
                       { open1 ? 
                        <div onMouseLeave={()=> setopen1(false)}>
                            <ul className={styles.dropdownMenu} >
                                <li><Link href="/nospartenaires/ade" ><a className={styles.subLink}><Image alt="ade " src="/ade.png" width="40px" height="40px"/> ADE</a></Link></li>
                                <li><Link href="/nospartenaires/partenaire2"><a className={styles.subLink} >parteanaire 2</a></Link></li>
                                <li><Link href="/nospartenaires/partenaire3"><a className={styles.subLink} >partanaire 3</a></Link></li>
                            </ul>
                        </div> : null }
                    </li>
                    <li className={styles.dropdown} onMouseEnter={()=> setopen(true) } >
                        <Link  href="/"  >
                            <a className={styles.link}>
                            NOS SPONSORS 
                            <AiOutlineDown style={{ marginLeft:"5px"}}></AiOutlineDown>
                            </a>
                        </Link>
                        { open ?
                        <div  onMouseLeave={()=> setopen(false)}>
                            <ul className={styles.dropdownMenu} >
                                <li><Link href="/nossponsors/ensao" ><a className={styles.subLink} ><Image alt="ade " src="/Ensao.png" width="40px" height="40px"/> ENSAO</a></Link></li>
                                <li><Link href="/nossponsors/sponsor2" ><a className={styles.subLink} >sponsor 2 </a></Link></li>
                                <li><Link href="/nossponsors/sponsor3" ><a className={styles.subLink} >sponsor 3</a></Link></li>
                            </ul>
                        </div> : null }
                    </li>
                    <li><Link href="/contact"><a className={styles.link}>CONTACTEZ-NOUS</a></Link></li>
                </ul>
            </div>
        </div>
        {/* mobile menu */}
        <div className={ scroll ? styles.mobileMenu : styles.fixedMobileMenu }>
            <RiMenu2Fill style={{marginTop:"10px"}} onClick={()=> toggle()}></RiMenu2Fill>
           { scroll ? null : <Image alt="logo" src="/logoForum.png" width="40px" height="40px" />}
        </div>
    </>
    )
}

const mapdispatchToProps = (dispatch) => ({

    toggle : () => dispatch(toggle())
})
export default connect(null,mapdispatchToProps)(Menu);
