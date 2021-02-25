import Header from "./components/header/header"
import Main from "./components/main/main"
import Footer from "./components/footer/footer"
import Home from "./components/pages/home"
import About from "./components/pages/about"
import Portfolio from "./components/pages/portfolio"

import {Switch, Route} from "react-router-dom"

import "./general.css"

function App(){
  return(
    <>
      <Header /> 
      <Main>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/about" exact>
            <About />
          </Route>

          <Route path="/portfolio" exact>
            <Portfolio />
          </Route>
        </Switch>
      </Main> 
      <Footer />
    </>
    )
  }
  
  export default App
  
  
  
  