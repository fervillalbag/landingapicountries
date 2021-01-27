
export default function Navbar() {
   return (
      <nav className="navbar">
         <div className="container">
            <span className="navbar__heading">Where in the world?</span>
            <button className="navbar__button">
               <i className="fas fa-moon"></i>
               <span className="navbar__text">Dark Mode</span>
            </button>
         </div>
      </nav>
   )
}
