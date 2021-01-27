
import Link from 'next/link'

export default function CountryHeader() {
   return (
      <header className="country__header">
         <div className="container">
            <Link href="/">
               <a className="back__link">
                  <i className="fas fa-long-arrow-alt-left"></i>
                  <span>Back</span>
               </a>
            </Link>
         </div>
      </header>
   )
}
