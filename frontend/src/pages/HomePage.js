import React, { Component } from 'react';

class HomePage extends Component {
  state = {
  }
  
  componentDidMount() { 
   
  }

  render() {
    return (
      <section className="home">
        <p>Hello {this.props.currUser}</p>

       
      </section>
    )
  }
}

export default HomePage;
