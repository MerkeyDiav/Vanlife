import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import {store} from './app/Store';
//import {Provider} from 'react-redux';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom"

/* Components*/
import App from './App.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'

/* Components*/

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
        <header>
          <Link className="site-logo" to="">#vanlife</Link>
          <nav>
            <Link className="" to="/about">About</Link>
          </nav>
        </header>
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/home' element={<Home />}/>
            <Route path='/about' element={<About />} />
            
        </Routes>
      </BrowserRouter>
  </React.StrictMode>,
)
