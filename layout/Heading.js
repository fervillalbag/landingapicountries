
export default function Heading() {

   const handleSearch = e => {
      e.preventDefault()
   }

   return (
      <section className="heading">
         <form className="form">
            <div className="container">
               <div className="form__group">
                  <input type="text"
                     className="form__input" />
                  <button
                     className="form__button"
                     onClick={handleSearch}
                     type="submit"
                  >
                     <i className="fas fa-search"></i>
                  </button>
               </div>
               <div className="form-select">
                  <select
                     className="input__select"
                  >
                     <option className="form__option" value="">
                        -- Filter by Region --
                     </option>
                     <option className="form__option" value="1">
                        -- 1 --
                     </option>
                     <option className="form__option" value="2">
                        -- 2 --
                     </option>
                     <option className="form__option" value="3">
                        -- 3 --
                     </option>
                     <option className="form__option" value="4">
                        -- 4 --
                     </option>
                  </select>
               </div>
            </div>
         </form>
      </section>
   )
}
