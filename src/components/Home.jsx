import React, { Component } from 'react'

import HowTo from './HowTo'

export default class Home extends Component {
  render() {
    return (
      <div className="homeP">
        <h5 className="homeP__deck">
          Say Hello, to <b>Samaritan</b>, analize your blog entries and get
        </h5>
        <h1 className="homeP__slogan">Pictures & Inspiration Royalty Free</h1>

        <form action="search/" className="homeP__form">
          <input
            type="text"
            name="q"
            placeholder="Paste your blog entry URL"
            className="homeP__input"
            ref={node => { this.input = node; }}
          />
          <br />
          <button className="homeP__eg" onClick={event => {
            this.input.value = 'https://www.washingtonpost.com/news/innovations/wp/2017/02/24/listen-technology-holdouts-enough-is-enough/'
          }}>
            e.g. https://www.washingtonpost.com/news/innovations/wp/2017/02/24/listen-technology-holdouts-enough-is-enough/
          </button>
        </form>


        <HowTo />
      </div>
    )
  }
}
