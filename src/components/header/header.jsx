import "./header.css"
import Logo from "../../img/logo.svg"

import {Link} from "react-router-dom"

function Header(){
  return(
    <>
      <header className = "site-header">
        <div className="container site-header__container">
          <nav className="sitenav">
            <Link className="logo" to="/">
              <img className="logo__img" src={Logo} alt="site logo" width="71" height="44"/>
            </Link>

            <ul className="sitenav__list">
              <li className="sitenav__item">
                <Link className="sitenav__link" to="/portfolio">Portfolio</Link>
              </li>

              <li className="sitenav__item">
                <Link className="sitenav__link" to="/about">About</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header