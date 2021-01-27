
export default function CountrieItem({ info }) {
   return (
      <div>
         <img className="card__image" src={info.flag} />
         <div className="card__info">
            <span className="card__heading">
               {info.name}
            </span>
            <p className="card__detail">
               <span>Population: </span>
               {info.population}
            </p>
            <p className="card__detail">
               <span>Region: </span>
               {info.region}
            </p>
            <p className="card__detail">
               <span>Capital: </span>
               {info.capital}
            </p>
         </div>
      </div>
   )
}
