
import './App.css';

import React, { Component } from 'react'
import NavBar from './Component/NavBar';
import NewsComponent from './Component/NewsComponent';
import {
  BrowserRouter as Router,
  
  Route,
  Routes,

} from "react-router-dom";

export default class App extends Component {
  
  

  render() {
    return (

      <div>

<Router>

        <NavBar />
        
        <Routes>
          <Route path="/" element = {<NewsComponent key="general"  country= "in" category = "general" />} >
          
          </Route>

          <Route path="/sports" element = {<NewsComponent key="sports"  country= "in" category = "sports" />} >
          
          </Route>

          <Route path="/science" element = {<NewsComponent key="science"  country= "in" category = "science" />} >
          
          </Route>

          <Route path="/entertainment" element = {<NewsComponent key="entertainment"  country= "in" category = "entertainment" />} >
          
          </Route>

          
           
        </Routes>

        

        </Router>
      </div>
    )
  }
}

