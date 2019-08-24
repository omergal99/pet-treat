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
    const swRegistration = await this.registerServiceWorker();
    const permission = await this.requestNotificationPermission();
    this.showLocalNotification('This is title', 'this is the message', swRegistration);
  }

  urlB64ToUint8Array(base64String) {
    const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
    const base64 = (base64String + padding)
      .replace(/\-/g, "+")
      .replace(/_/g, "/");
    const rawData = atob(base64);
    const outputArray = new Uint8Array(rawData.length);
    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  };

  showLocalNotification(title, body, swRegistration) {
    // const options = {
    //   body,
    //   // here you can add more properties like icon, image, vibrate, etc.
    // };


    // swRegistration.pushManager.getSubscription()
    //   .then(function (subscription) {
    //     console.log(subscription)
    //   });

    // const applicationServerKey = this.urlB64ToUint8Array(
    //   "BHaWtColOLuUSXSfNcqASqQ7QCKQvcBH9N9KBUgoXN4ihfrLaY_7vWPQ9TjKYyghAdAE-H34S4mbwH-jPu_hyaM"
    // );
    // const options = { applicationServerKey, userVisibleOnly: true };
    // console.log(applicationServerKey)

    // swRegistration.pushManager.subscribe(options);

    // console.log(swRegistration.pushManager)
    // console.log(swRegistration.pushManager.subscribe)
    // swRegistration.pushManager.subscribe(options);
    // swRegistration.showNotification(title, options);


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
    // value of permission can be 'granted', 'default', 'denied'
    // granted: user has accepted the request
    // default: user has dismissed the notification permission popup by clicking on x
    // denied: user has denied the request.
    if (permission !== "granted") {
      throw new Error("Permission not granted for Notification");
    }
    console.log('Permission:', permission);
    console.log('Notification permission status:', permission);

    if (Notification.permission === 'granted') {
      // navigator.serviceWorker.ready.then(function(registration) {
      //   registration.showNotification('Notification with ServiceWorker');
      // });
      // new Notification('Notify you');
      navigator.serviceWorker.getRegistration().then(registration => {

        // TODO 2.4 - Add 'options' object to configure the notification
        const options = {
          body: 'First notification!'
        };

        console.log(registration);
        // registration = registration.active;
        console.log(registration.active.state);

        registration.showNotification('Hello world!', options);
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