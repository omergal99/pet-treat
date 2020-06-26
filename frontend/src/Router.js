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

  async componentDidMount() {
    this.props.loadUser();
    // console.log(this.props)
    this.check();
    await this.registerServiceWorker();
    await this.requestNotificationPermission();
    // this.showLocalNotification('This is title', 'this is the message', swRegistration);
  }

  check() {
    console.log("Doing Check")
    if (!("serviceWorker" in navigator)) {
      console.log("No Service Worker support!")
      throw new Error("No Service Worker support!");
    }
    if (!("PushManager" in window)) {
      console.log("No Push API Support!")
      throw new Error("No Push API Support!");
    }
  };

  registerServiceWorker = async () => {
    const swRegistration = await navigator.serviceWorker.register('/service-worker.js');
    return swRegistration;
  };

  requestNotificationPermission = async () => {
    const permission = await Notification.requestPermission();
    if (permission !== "granted") {
      throw new Error("Permission not granted for Notification");
    }
    console.log('Notification permission status:', permission);

    if (Notification.permission === 'granted') {
      // navigator.serviceWorker.ready.then(function(registration) {
      //   registration.showNotification('Notification with ServiceWorker');
      // });
      // new Notification('Notify you');
      navigator.serviceWorker.getRegistration().then(registration => {

        // TODO 2.4 - Add 'options' object to configure the notification
        // const options = {
        //   body: 'First notification!'
        // };

        // console.log(registration);
        // registration = registration.active;
        console.log('registration', registration.active.state);

        // registration.showNotification('Hello world!', options);
      });
    }
  };

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