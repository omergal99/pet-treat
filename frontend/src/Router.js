import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { BrowserRouter, HashRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';

// MAIN STORE
import store from './store/AppStore';
import actions from './store/actions';

// PAGES
import Home from './pages/Home';
import Chat from './pages/Chat';
import Gallery from './pages/Gallery';
import ForbiddenFood from './pages/ForbiddenFood';
import DogLove from './pages/DogLove';
import Signup from './pages/Signup';

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
                <Route path="/" component={Signup} />
              }

              <Route exact path="/" render={() => <Home currUser={this.props.currUser} />} />
              <Route exact path="/chat" render={() =>
                <Chat msgs={this.props.msgs}
                  userTyping={this.props.userTyping}
                  currUser={this.props.currUser}
                  dog={this.props.dog} />
              } />
              <Route exact path="/gallery" component={Gallery} />
              <Route exact path="/forbidden-food" component={ForbiddenFood} />
              <Route exact path="/dog-love" component={DogLove} />
              <Route exact path="/signup" component={Signup} />
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