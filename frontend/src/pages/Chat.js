import React, { Component } from 'react';
import { connect } from 'react-redux';

import actions from '../store/actions';

class Chat extends Component {
  state = {
    text: '',
    typeTime: null
  }

  componentDidMount() {
    // console.log(this.props)
    // actions.loadUser();
    // this.props.loadUser();
    this.props.loadDog('5d1e284dba30b944ba076387');
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }

  updateMsg = (ev) => {
    this.setState({ text: ev.target.value, typeTime: Date.now() });
    if (Date.now() - this.state.typeTime > 250) {
      actions.sendUserTyping();
      // this.props.sendUserTyping();
    }
    setTimeout(() => {
      if (Date.now() - this.state.typeTime > 1000) {
        actions.sendUserStop();
        // this.props.sendUserStop();
      }
    }, 1200)
  }

  sendingMsg = (ev) => {
    ev.preventDefault();
    if (this.state.text) {
      actions.sendMsg(this.props.currUser, this.state.text, Date.now());
      // this.props.sendMsg(this.state.text);
      this.setState({ text: '' });
    }
  }

  render() {
    var userName = this.props.currUser;
    var userTyping = this.props.userTyping;
    var massages = this.props.msgs;
    const chat = massages.map((msg, idx) => (
      <li className={userName === msg.fromUserName ? 'own' : 'else'} key={idx}>
        <label className="user">{msg.fromUserName}</label>
        <label className="text">{msg.text}</label>
        <label className="date">{`${new Date(Number((msg.dateCreated))).toLocaleString()}`}</label>
      </li>
    ));
    var isDesktop = (window.orientation === undefined && navigator.userAgent.indexOf('Mobile') === -1);
    return (
      <section className="chat">

        <h1>{userName}, Welcome to Chat!</h1>

        {userTyping &&
          <div className="type-area">{userTyping} typing...</div>
        }
        {!userTyping &&
          <div className="type-area"></div>
        }

        <form className="msg-form">
          <input value={this.state.text} onChange={this.updateMsg.bind(this)} type="text"
            autoFocus={isDesktop} onClick={this.scrollToBottom.bind(this)}
          />
          <button onClick={this.sendingMsg.bind(this)}>SEND</button>
        </form>

        <ul className="msg-list" style={{ overflow: isDesktop ? '' : 'scroll' }}>
          {chat}
          <div ref={(el) => { this.messagesEnd = el; }}></div>
        </ul>

      </section>
    )
  }
}

function mapStateToProps(state) {
  console.log(state)
  return {
    // msgs: state.chatStore.msgs,
    // userTyping: state.chatStore.userTyping,
    // currUser: state.userStore.currUser
  }
}

export default connect(mapStateToProps, actions)(Chat)