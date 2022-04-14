
import React, { Component } from 'react'
import Header from '../../common/header/Header'
import './Home.css'
import './home/ImageList'
import SingleLineImageList from './home/ImageList'
import asset from 'movies-app/src/Assets/vic.jpg'




export default class Home extends Component {
  render() {
    return (
      <div>
          <Header/>
          <div id='Upcoming'>Upcoming Movies</div>
          <img src={asset} alt='logo' height='500px' width='500px'
          />
        
      </div>
    )
  }
}
