import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {

    let {title , description , imgurl , newsurl , newssource, newsdate} = this.props
    return (
      
      <>
      
      <div className="card my-3  " style={{width: "20rem"}}>
  <img src={imgurl?imgurl:"https://img.freepik.com/free-photo/3d-rendering-illustration-letter-blocks-forming-word-news-white-background_181624-60840.jpg"} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title?title:"No Title......"}</h5>
    <p className="card-text">{description?description:"No Description"}</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item"> <b> Source :- {newssource} </b>  </li>
    <li className="list-group-item"> <b> Date :- {newsdate} </b>  </li>
    
  </ul>
  <div className="card-body">
    <a rel="noreferrer" href={newsurl} target='_blank'  className="card-link">Read More</a>
    
  </div>
</div>

      </>
    )
  }
}
