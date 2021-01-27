
import { useEffect, useState } from 'react'
import CountryItem from './CountryItem'

export default function HomePage() {

   const [data, setData] = useState([])

   useEffect(() => {
      (async () => {
         const url = `https://restcountries.eu/rest/v2/all`
         const res = await fetch(url)
         const data = await res.json()
         setData(data)
      })()
   }, [])

   return (
      <div className="home">
         <div className="container">
            {data.map(info => (
               <CountryItem key={info.name} info={info} />
            ))}
         </div>
      </div>
   )
}
