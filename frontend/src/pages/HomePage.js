import React, { Component } from 'react';

class HomePage extends Component {
  state = {
  }

  componentDidMount() {
    this.scrollToTop();
  }

  scrollToTop() {
    this.page.scrollIntoView({ behavior: "auto", block: "start" });
  }

  render() {
    return (
      <section className="home" ref={el => this.page = el}>
        <p>Hello {this.props.currUser}</p>


      </section>
    )
  }
}

export default HomePage;
