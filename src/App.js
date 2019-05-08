import React from 'react';
import './App.css';
import Home from './Home/Home.js';
import Header from './Header/Header.js';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import NotFound from './NotFound/NotFound.js';
import Movie from './Movie/Movie.js';
import Footer from './Footer/Footer.js';

const App=()=>{
  return (
    <BrowserRouter>
      <div>
        <Header/>
        <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/:movieID' component={Movie} exact/>
          <Route component={NotFound} />
        </Switch>
      </div>
      <div>
      
      </div>
    </BrowserRouter>
  )
}

export default App;
