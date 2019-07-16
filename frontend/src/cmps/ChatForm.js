import React, { Component } from 'react';

class ChatForm extends Component {

  constructor() {
    super();
    this.personSelected = this.personSelected.bind(this);
  }

  state = {
    level: 1,
    buttonTexts: ['Make New Message', '', 'Continue', 'Send!'],
    msg: {
      fromUserName: '',
      text: '',
      dogOptions: [false, false, false, false],
      dateCreated: null
    },
    dogDetails: [
      {
        _id: 301,
        img: 'assets/img/dog/icons/bonzo.png',
        imgName: 'bonzo',
        text: 'food is over'
      },
      {
        _id: 302,
        img: 'assets/img/dog/icons/food bowl.png',
        imgName: 'food bowl',
        text: 'got food'
      },
      {
        _id: 303,
        img: 'assets/img/dog/icons/poo.png',
        imgName: 'poo',
        text: 'did poop'
      },
      {
        _id: 304,
        img: 'assets/img/dog/icons/dog out.png',
        imgName: 'dog out',
        text: 'came out'
      },
    ]
  }

  componentDidMount() {
    // console.log(this.props.family)
  }

  levelUp() {
    let level = this.state.level;
    if (level === 1 || level === 3 || level === 4) {
      this.setState({ level: ++level });
    }
    if (level === 5) {
      var msg = this.state.msg;
      msg.dateCreated = Date.now();
      const isHasOptions = msg.dogOptions.findIndex(opt => opt);
      if (isHasOptions >= 0 || msg.text) {
        this.props.onSendMsg(msg);
      }
      this.initState()
    }
  }

  initState() {
    this.setState({
      level: 1,
      msg: {
        fromUserName: '',
        text: '',
        dogOptions: [false, false, false, false],
        dateCreated: null
      }
    });
  }

  personSelected(name) {
    var msg = this.state.msg;
    msg.fromUserName = name;
    this.setState({ level: ++this.state.level, msg });
  }

  contentToggle(dogDetail, idx) {
    var msg = this.state.msg;
    msg.dogOptions[idx] = msg.dogOptions[idx] ? false : dogDetail;
    this.setState({ msg });
  }

  updateText(ev) {
    var msg = this.state.msg;
    msg.text = ev.target.value;
    this.setState({ msg });
  }

  render() {
    var level = this.state.level;
    var btnText = this.state.buttonTexts[this.state.level - 1];
    var grid4 = ['1 / 1 / 1 / 1', '1 / 2 / 1 / 2', '2 / 1 / 2 / 1', '2 / 2 / 2 / 2'];
    var familyList = this.props.family.map((person, idx) => {
      return <div key={person.userId} onClick={ev => { ev.stopPropagation(); this.personSelected(person.userName) }}
        style={{ gridArea: `${grid4[idx]}` }}>
        <div className="wrap-img" >
          <img src={person.userImg} alt={`${person.userName}`} />
        </div>
        <div className="name">
          <label>{person.userName}</label>
        </div>
      </div>
    });
    var dogList = this.state.dogDetails.map((dogDetail, idx) => {
      return <div key={dogDetail._id} onClick={ev => { ev.stopPropagation(); this.contentToggle(dogDetail, idx) }}
        style={{ gridColumn: `${idx + 1}/${idx + 1}` }}>
        <div className="wrap-img" style={{ background: this.state.msg.dogOptions[idx] ? 'green' : '' }}>
          <img src={dogDetail.img} alt={`${dogDetail.imgName}`} />
        </div>
        <div className="name">
          <label>{dogDetail.imgName}</label>
        </div>
      </div>
    });
    return (
      <div className="form-levels">
        {level === 2 &&
          <div className="level">
            <label>Who are you?</label>
            <div className="table-2">
              {familyList}
            </div>
          </div>
        }
        {level === 3 &&
          <div className="level" style={{ height: level === 3 ? '128px' : '' }}>
            <label>Message Content</label>
            <div className="table-3">
              {dogList}
            </div>
          </div>
        }
        {level === 4 &&
          <div className="level">
            <div className="table-4">
              <input value={this.state.msg.text} onChange={this.updateText.bind(this)} type="text" />
            </div>
          </div>
        }
        <div className='line-btn'>
          {btnText ?
            <button className="level-btn" onClick={this.levelUp.bind(this)}>{btnText}</button>
            :
            <button className="level-btn" onClick={this.initState.bind(this)}
              style={{
                backgroundColor: '#ff7676',
                color: 'black',
                fontSize: '1em',
                border: '1.5px solid black'
              }}
            >Cancel</button>
          }
          {level > 2 &&
            <button className="back-btn" onClick={() => this.setState({ level: --this.state.level })}>BACK</button>
          }
        </div>
      </div>
    )
  }
}

export default ChatForm;