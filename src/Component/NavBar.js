import React, { Component } from 'react'

export default class NavBar extends Component {
  render() {
    return (
      <>
      <nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href='/' >My-News App</a>
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
      </>
    )
  }
}
