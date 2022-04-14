
import React, { Component } from 'react'
import Header from '../../common/header/Header'
import './Home.css'
import './ImageList'
import SingleLineImageList from './ImageList'
import InputsFunction, { MuiImageList } from './MuiImageList'


// import SingleLineImageList from './ImageList'


// import asset from '../Assets'




export default class Home extends Component {
  render() {
    return (
      <div>
          <Header/>
          <div id='Upcoming'>Upcoming Movies</div>
          <div>
          <SingleLineImageList/>
          </div>
        
          <div id='flex-container' > 
              <div id='left' >
              <MuiImageList />
              </div>
              <div id='right'>
               
              </div>
                <InputsFunction/>
          </div>
          
      </div>
    )
  }
}
