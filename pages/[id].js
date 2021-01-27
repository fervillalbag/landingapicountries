
import { Fragment, useState, useEffect } from 'react'
import Navbar from '../layout/Navbar'
import Seo from '../components/Seo'
import { useRouter } from 'next/router'
import CountryHeader from '../layout/CountryHeader'
import CountryMain from '../layout/CountryMain'

export default function Country() {

   const { query } = useRouter()
   const { id } = query

   const [dataCode, setDataCode] = useState({})

   useEffect(() => {
      (async () => {
         if (!id) return
         const url = `https://restcountries.eu/rest/v2/alpha/${id}`
         const res = await fetch(url)
         const data = await res.json()
         setDataCode(data)
      })()
   }, [id])

   console.log(dataCode)

   return (
      <Fragment>
         <Seo />
         <Navbar />
         <CountryHeader />
         <CountryMain dataCode={dataCode} />
      </Fragment>
   )
}
