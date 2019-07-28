import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { BrowserRouter, HashRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';

// MAIN STORE
import store from './store/AppStore';
import actions from './store/actions';

// PAGES
import HomePage from './pages/HomePage';
import Chat from './pages/Chat';
import SignupPage from './pages/SignupPage';

//CMPS
import NavBar from './cmps/NavBar'

class Router extends Component {

  componentDidMount() {
    this.props.loadUser();
    // console.log(this.props)
  }

  render() {
    var currUserName = store.getState().userStore.currUser;
    return (
      <HashRouter>
        {/* <BrowserRouter> */}
        <div className="app-nav-route">

          <div className="nav">
            <NavBar currUserName={currUserName} />
          </div>

          <div className="route">
            <Switch>
              {!currUserName &&
                <Route path="/" component={SignupPage} />
              }

              <Route exact path="/" render={() => <HomePage currUser={this.props.currUser} />} />
              <Route exact path="/chat" render={() =>
                <Chat msgs={this.props.msgs} userTyping={this.props.userTyping} currUser={this.props.currUser} 
                dog={this.props.dog}/>
              } />
              <Route exact path="/signup" component={SignupPage} />
            </Switch>
          </div>
        </div>
        {/* </BrowserRouter> */}
      </HashRouter>
    );
  }
}

function mapStateToProps(state) {
  // console.log(state)
  return {
    msgs: state.chatStore.msgs,
    userTyping: state.chatStore.userTyping,
    currUser: state.userStore.currUser,
    dog: state.dogsStore
  }
}

export default connect(mapStateToProps, actions)(Router)