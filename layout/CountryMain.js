
import CountryInfo from "./CountryInfo"

export default function CountryMain({ dataCode }) {
   return (
      <div className="country__grid container">
         <div className="country__media">
            <img src={dataCode.flag} alt="" className="country__image" />
         </div>
         <div>
            <CountryInfo dataCode={dataCode} />
            <footer className="country__footer">
               <div
                  className="country__detail country__detail--borders"
               >
                  <span>Border Countries: </span>
                  <div className="borders__grid">
                     {dataCode.borders
                        && dataCode.borders.map(border => (
                           <div key={border}>{border}</div>
                        ))}
                  </div>
               </div>
            </footer>
         </div>
      </div>
   )
}
