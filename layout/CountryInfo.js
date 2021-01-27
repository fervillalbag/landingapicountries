
import React from 'react'

export default function CountryInfo({ dataCode }) {
   return (
      <div className="country__info">
         <span className="country__heading">
            {dataCode.name}
         </span>
         <div className="country-data">
            <div className="country-data__left">
               <p className="country__detail">
                  <span>Native name: </span>
                  {dataCode.nativeName}
               </p>
               <p className="country__detail">
                  <span>Population: </span>
                  {dataCode.population}
               </p>
               <p className="country__detail">
                  <span>Region: </span>
                  {dataCode.region}
               </p>
               <p className="country__detail">
                  <span>Sub Region: </span>
                  {dataCode.subregion}
               </p>
               <p className="country__detail">
                  <span>Capital: </span>
                  {dataCode.capital}
               </p>
            </div>
            <div className="country-data__right">
               <p className="country__detail">
                  <span>Top Level Domain: </span>
                  {dataCode.topLevelDomain}
               </p>
               <p className="country__detail">
                  <span>Currencies: </span>
                  {dataCode.currencies
                     && (
                        dataCode.currencies.map(currencie => (
                           <span key={currencie.code}>{currencie.name}</span>
                        ))
                     )}
               </p>
               <p className="country__detail">
                  <span>Languages: </span>
                  {dataCode.languages
                     && (
                        dataCode.languages.map(language => (
                           <span key={language.name}>{language.name}</span>
                        ))
                     )}
               </p>
            </div>
         </div>
      </div>
   )
}
