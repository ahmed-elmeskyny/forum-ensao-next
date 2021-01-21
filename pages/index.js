import Head from 'next/head';

//componnets
import Layout from "../components/layout/layout";
import Slider from "../components/slider/slider";
import Events from "../components/events/events";
import Forum from "../components/forum/forum";
import Partenaire from '../components/partenaire/partenaire';
import Temoignage from '../components/temoignage/temoignage';




export default function Home() {
  return (
    <div>
      <Head>
        <title>Forum Ensao Entreprises || 10 éme édition</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="description" content="forum Ensao Entreprises 10 eme edition page d'acceuil"/>
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
        <Slider></Slider>
        <Events></Events>
        <Forum></Forum>
        <Partenaire></Partenaire>
        <Temoignage></Temoignage>
      </Layout>
    </div>
  )
}
