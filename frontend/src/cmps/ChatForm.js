import React, { Component } from 'react';

class ChatForm extends Component {

  constructor() {
    super();
    this.personSelected = this.personSelected.bind(this);
  }

  state = {
    text: 'fdhfdh',
    level: 1,
    buttonTexts: ['level 1', 'level 2', 'level 3', 'level 4'],
    msg: {
      who: '',
      messyOptions: [false, false, false, false, false, false],
      text: ''
    }
  }

  componentDidMount() {
    console.log(this.props.family)
  }

  emitSendingMsg = (ev) => {
    ev.preventDefault();
    this.props.onSendMsg(this.state.text);
    this.setState({ text: '' });
  }

  levelUp() {
    const copy = this.state.level;
    if (copy === 1) {
      let level = copy < 4 ? copy + 1 : copy;
      this.setState({ level });
    }
  }

  personSelected(name) {
    var msg = this.state.msg;
    msg.who = name;
    this.setState({ level: ++this.state.level, msg });
  }

  render() {
    var level = this.state.level;
    var btnText = this.state.buttonTexts[this.state.level - 1];
    var grid4 = ['1 / 1 / 1 / 1', '1 / 2 / 1 / 2', '2 / 1 / 2 / 1', '2 / 2 / 2 / 2'];
    var familyList = this.props.family.map((person, idx) => {
      return <div key={person.userId} onClick={ev => { ev.stopPropagation(); this.personSelected(person.userName) }}
        style={{ gridArea: `${grid4[idx]}` }}>
        <div className="wrap-img">
          <img src={person.userImg} alt={`${person.userName} IMAGE`} />
        </div>
        <div className="name">
          <label>{person.userName}</label>
        </div>
      </div>
    })
    return (
      //   <button onClick={this.emitSendingMsg.bind(this)}>SEND</button>
      <div className="form-levels">
        {level === 2 &&
          <div className="level">
            <label>Who are you?</label>
            <div className="table-1">
              {familyList}
            </div>
          </div>
        }
        {level === 3 &&
          <div className="level">
            <label>Who are you?</label>
            <button className="back-btn" onClick={() => this.setState({ level: --this.state.level })}>BACK</button>
          </div>
        }
        {level === 4 &&
          <div className="level">
            4
          </div>
        }
        <button onClick={this.levelUp.bind(this)}>{btnText}</button>
      </div>
    )
  }
}

export default ChatForm;