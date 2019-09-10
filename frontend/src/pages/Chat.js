import React, { Component } from 'react';
import { connect } from 'react-redux';

import actions from '../store/actions';
import ChatForm from '../cmps/ChatForm';

class Chat extends Component {
  state = {
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
    // this.messagesEnd.scrollIntoView({ behavior: "smooth", block: "end" });
    this.messagesEnd.scrollIntoView({ behavior: "auto", block: "end" });
  }

  usertyped = (ev) => {
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

  sendingMsg = (msg) => {
    actions.sendMsg(msg);
    // this.props.sendMsg(msg);
  }

  render() {
    var userName = this.props.currUser;
    var userTyping = this.props.userTyping;
    var massages = this.props.msgs;
    // console.log('render') // TODO: fix render problem
    const chat = massages.map((msg, idx) => (
      <li className={userName === msg.fromUserName ? 'own' : 'else'} key={idx}>
        <label className="user">{msg.fromUserName}</label>
        <label className="date">{`${new Date(Number((msg.dateCreated))).toLocaleString()}`}</label>
        {msg.dogOptions &&
          <div className="dog-doing">{msg.dogOptions.map(dogOption => {
            return dogOption ?
              <div key={dogOption._id}>
                <img src={dogOption.img} alt={dogOption.imgName} />
                <label>{dogOption.text}</label>
              </div>
              :
              ''
          })}</div>
        }
        <label className="text">{msg.text}</label>
      </li>
    ));
    var isDesktop = (window.orientation === undefined && navigator.userAgent.indexOf('Mobile') === -1);
    var family = this.props.dog.family;
    return (
      <section className="chat">

        {/* <h1>{userName}, Welcome to Chat!</h1> */}

        {/* <div className="type-area">{userTyping ? `${userTyping} typing...` : ''}</div> */}

        {family &&
          <ChatForm family={family} onSendMsg={this.sendingMsg.bind(this)} />
        }

        <ul className="msg-list" style={{ overflow: isDesktop ? '' : 'scroll' }}>
          {chat}
          <div ref={el => this.messagesEnd = el}></div>
        </ul>

      </section>
    )
  }
}

function mapStateToProps(state) {
  return {
  }
}

export default connect(mapStateToProps, actions)(Chat)