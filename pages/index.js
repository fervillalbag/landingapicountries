
import { Fragment } from 'react';
import Head from 'next/head'
import Navbar from '../layout/Navbar'
import Heading from '../layout/Heading'

export default function Home() {
   return (
      <Fragment>
         <Head>
            <title>Landing API</title>
            <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap" rel="stylesheet" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==" crossorigin="anonymous" />
            <link rel="stylesheet" href="https://necolas.github.io/normalize.css/8.0.1/normalize.css" />
         </Head>

         <Navbar />
         <Heading />
      </Fragment>
   )
}
