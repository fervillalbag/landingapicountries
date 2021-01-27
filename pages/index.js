
import { Fragment } from 'react';
import Seo from '../components/Seo'
import Navbar from '../layout/Navbar'
import Heading from '../layout/Heading'
import HomePage from '../layout/HomePage';

export default function Home() {
   return (
      <Fragment>
         <Seo />

         <Navbar />
         <Heading />
         <HomePage />
      </Fragment>
   )
}
