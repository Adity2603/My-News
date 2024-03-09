import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class NewsComponent extends Component {

  constructor() {
    super()
    console.log("I am News Component Constructor");
    this.state = {
      articles: [],
      loading: false,
      page: 1


    }
  }
  async componentDidMount() {

    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=1bb7fd4ea2d040159c32133d67a6d2dd&page=1&pagesize=9"
    let data = await fetch(url)
    let response = await data.json()
    console.log(response);
    this.setState({
      articles: response.articles,
      totalresults: response.totalResults
    })

  }

  prevpage = async () => {

    console.log("Previous Button");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=1bb7fd4ea2d040159c32133d67a6d2dd&page=${this.state.page - 1}&pagesize=9`
    let data = await fetch(url)
    let response = await data.json()
    console.log(response);
    this.setState({
      articles: response.articles,
      page: this.state.page - 1

    })

  }

  nextpage = async () => {
    console.log("Next Button");

    if (this.state.page + 1 >= Math.ceil(this.state.totalresults / 9)) {



    }
    else {

      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=1bb7fd4ea2d040159c32133d67a6d2dd&page=${this.state.page + 1}&pagesize=9`
      let data = await fetch(url)
      let response = await data.json()
      console.log(response);
      this.setState({
        articles: response.articles,
        page: this.state.page + 1
      })
    }

  }
  

  render() {


    
  

    return (
      <>
        <h1  className='my-3 text-center '  >Top Headlines - NEWS</h1>

        <div className="container">
          <div className="row">
            {this.state.articles.map((element) => {

              return <div className="col-md-4 col-s-1" key={element.url} >

                <NewsItem imgurl={element.urlToImage} title={element.title} description={element.description} newsurl={element.url} newsdate={element.publishedAt} newssource={element.source.name} />
              </div>

            })}


          </div>

          <div className="container d-flex justify-content-between my-3  ">
            <button disabled={this.state.page <= 1} type="button" className="btn btn-danger" onClick={this.prevpage} >Previous</button>
            <button type="button" className="btn btn-danger" onClick={this.nextpage} >Next</button>
          </div>
        </div>

      </>
    )
  }
}
