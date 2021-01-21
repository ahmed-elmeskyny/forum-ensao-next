import Head from 'next/head';

//componnets
import Layout from "../components/layout/layout";

//style
import styles from "./contact.module.scss";

//next
import Image from "next/image";



export default function Contact() {
    return (
        <>
        <Head>
            <title>Forum Ensao Entreprises || contact</title>
            <link rel="icon" href="/favicon.ico" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href={`https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap`} rel="stylesheet" />
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href={`https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap`} rel="stylesheet"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href={`https://fonts.googleapis.com/css2?family=Andika+New+Basic&display=swap`} rel="stylesheet"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href={`https://fonts.googleapis.com/css2?family=Andika+New+Basic&family=Josefin+Sans:ital,wght@1,300&display=swap`} rel="stylesheet" />
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href={`https://fonts.googleapis.com/css2?family=Work+Sans:wght@600&display=swap`} rel="stylesheet"></link>
        </Head>

        <Layout isNormal="isNormal">
        <div className={styles.pageContainer}> 
            <div className={styles.pageHeaderContainer}>
                <div className={styles.pageHeader}>
                   <h1> CONTACTEZ-NOUS </h1>
                </div>
            </div>
            <div className={styles.contact}>
                <h1><Image alt="forum" className={styles.img} src="/logoForum.png" width="100px" height="100px"/>Laissez-nous un message</h1>
                <form>
                    <div className={styles.info}>
                       <input type="text" placeholder="votre nom complet" required/>
                       <input type="numbre" placeholder="telephone" required/>
                    </div>
                    <div className={styles.email}>
                        <input type="email" placeholder="email" required/>
                        <input type="text" placeholder="objet" required/>
                    </div>
                    <textarea type="text" placeholder="Message">
                    </textarea>
                    <button> Envoyez </button>

                </form>
            </div>
        </div>
        </Layout>
        </>
    )
}

