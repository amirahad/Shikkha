
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import About from './component/About/About'
import Home from './component/Home/Home'
import Navbar from './component/Navbar/Navbar'
import NotFound from './component/NotFound/NotFound'
import Services from './component/Services/Services'

function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  )
}

export default App
