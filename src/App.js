
import './App.css';

import React, { Component } from 'react'
import NavBar from './Component/NavBar';
import NewsComponent from './Component/NewsComponent';

export default class App extends Component {
  
  

  render() {
    return (

      <div>


        <NavBar />
        
        

        <NewsComponent/>


      </div>
    )
  }
}

