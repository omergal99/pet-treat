import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { BrowserRouter, HashRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import HttpService from './services/HttpService';

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

    this.check();
    await this.registerServiceWorker();
    await this.requestNotificationPermission();
  }

  registerServiceWorker = async () => {
    const swUrl = (process.env.NODE_ENV !== 'development')
      ? `/service-worker.js`
      : `//localhost:3000/service-worker.js`;
    return navigator.serviceWorker.register(swUrl)
      .then(function (registration) {
        console.log('Service worker successfully registered.');
        return registration;
      })
      .catch(function (err) {
        console.error('Unable to register service worker.', err);
      });
  };

  requestNotificationPermission = async () => {
    // if (Notification.permission !== 'default') return;
    const permission = await Notification.requestPermission();
    console.log('Notification permission status:', permission);

    if (Notification.permission === 'granted') {
      navigator.serviceWorker.getRegistration()
        .then(registration => {
          const subscribeOptions = {
            userVisibleOnly: true,
            applicationServerKey: this.urlBase64ToUint8Array(
              'BNtJVAmG8R8yjP6YAlKF3FT0kJkE7P4UscJpDG2sfOMqowF1qzN_HGq2fpBhTIXQAqBcAgcdks5EJcbVEo-XwOs'
            )
          };
          return registration.pushManager.subscribe(subscribeOptions);
        })
        .then(pushSubscription => {
          // console.log('Received PushSubscription: ', JSON.stringify(pushSubscription));
          this.sendSubscriptionToBackEnd(pushSubscription);
          return pushSubscription;
        });
    }

    if (Notification.permission !== 'granted') {
      throw new Error("Permission not granted for Notification");
    }
  };

  sendSubscriptionToBackEnd(subscription) {
    const url = HttpService.getUrl('push/save-subscription');
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(subscription)
    })
      .then(function (response) {
        if (!response.ok) {
          throw new Error('Bad status code from server.');
        }

        return response.json();
      })
      .then(function (responseData) {
        if (!(responseData.data && responseData.data.success)) {
          throw new Error('Bad response from server.');
        }
      });
  }

  check() {
    if (!("serviceWorker" in navigator)) {
      console.log("No Service Worker support!")
      throw new Error("No Service Worker support!");
    }
    if (!("PushManager" in window)) {
      console.log("No Push API Support!")
      throw new Error("No Push API Support!");
    }
  };

  urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
      .replace(/-/g, '+')
      .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
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