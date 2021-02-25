import "./header.css"
import Logo from "../../img/logo.svg"

function Header(){
  return(
    <>
      <header className = "site-header">
        <div className="container site-header__container">
          <nav className="sitenav">
            <a className="logo" href="">
              <img className="logo__img" src={Logo} alt="site logo" width="71" height="44"/>
            </a>

            <ul className="sitenav__list">
              <li className="sitenav__item">
                <a className="sitenav__link" href="">Portfolio</a>
              </li>

              <li className="sitenav__item">
                <a className="sitenav__link" href="">About</a>
              </li>

              <li className="sitenav__item">
                <a className="sitenav__link" href="">Blog</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header