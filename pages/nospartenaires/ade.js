import React from 'react';

//styling
import styles from './partenaire.module.scss';

//next
import Image from "next/image";
import Head from "next/head";

//component
import Layout from "../../components/layout/layout";



const Ade = ()=> {


    return (
        <>
        <Head>
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
        <Layout>
        <div className={styles.pageContainer}>
            <div className={styles.pageHeaderContainer}>
                <div className={styles.pageHeader}>
                   <h1>Ade</h1>
                </div>
            </div>
            <div className={styles.description}>
                <div style={{float:"left" , margin: "10px"}}>
                <Image alt="ade"  src="/ade.png" width="150px" height="150px"></Image>
                </div>
                <p>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, accusantium. Magni libero officia sed omnis cupiditate. Est eveniet consequatur totam ut cupiditate quia id et dolor enim. Asperiores, ea voluptaLorem ipsum dolor sit amet consectetur adipisicing elit. Fuga similique impedit corporis deserunt dolore iste tempora ex eum rem molestias reiciendis ullam quasi voluptatem, ducimus quod itaque, enim distinctio! Natus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis repellat cum corrupti dolor laboriosam magni dolores, alias laborum veritatis eum eos amet soluta distinctio placeat. Dolores eligendi recusandae facilis aliquam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ad ut accusamus obcaecati voluptatibus, ducimus cumque nihil delectus repudiandae molestias aperiam fugiat nostrum velit aliquid accusantium laudantium quasi commodi facilis.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta quod ad, sequi corporis quos quis, dolorum, voluptatibus assumenda deleniti illum harum ea quasi eius sunt omnis consequuntur illo a reprehenderit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque deleniti amet laudantium repudiandae exercitationem, aut, cupiditate atque ipsam sequi suscipit, quisquam dolorem blanditiis aperiam voluptates assumenda? Ad nam adipisci temporibus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quae ea hic in cupiditate! Ipsum ipsam ea dolores recusandae ducimus, quas rerum doloremque nulla, quod rem consectetur cum laudantium expedita"
                </p>
            </div>

        </div>
        </Layout>
        </>
    )
};



export default Ade;