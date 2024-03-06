import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {

    let {title , description , imgurl , newsurl} = this.props
    return (
      
      <>
      
      <div className="card my-3  " style={{width: "20rem"}}>
  <img src={imgurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">An item</li>
    <li className="list-group-item">A second item</li>
    <li className="list-group-item">A third item</li>
  </ul>
  <div className="card-body">
    <a href={newsurl} target='_blank' rel='norefer' className="card-link">Read More</a>
    
  </div>
</div>

      </>
    )
  }
}
