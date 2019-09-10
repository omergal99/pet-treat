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
    familyList: [],
    dogList: [],
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
    this.setFamilyList();
    this.setDogList();
  }

  levelUp() {
    let level = this.state.level;
    if (level === 1 || level === 2 || level === 3 || level === 4) {
      level = level + 1;
      this.setState({ level });
    }
    if (level === 5) {
      var msg = this.state.msg;
      msg.dateCreated = Date.now();
      const isOneTrue = msg.dogOptions.findIndex(opt => opt);
      if (isOneTrue >= 0 || msg.text) {
        this.props.onSendMsg(msg);
      }else{
        alert('No massage to sent');
      }
      this.initState()
    }
  }

  levelDown() {
    let level = this.state.level - 1;
    this.setState({ level });
  }

  initState() {
    this.setState({
      level: 1,
      msg: {
        fromUserName: '',
        text: '',
        dogOptions: [false, false, false, false],
        dateCreated: null
      }}, () => {
      this.setDogList();
    });
  }

  personSelected(name) {
    var msg = this.state.msg;
    msg.fromUserName = name;
    this.setState({ msg });
    this.levelUp();
  }

  msgContentChanged(dogDetail, idx) {
    var msg = this.state.msg;
    msg.dogOptions[idx] = msg.dogOptions[idx] ? false : dogDetail;
    this.setState({ msg });
    this.setDogList();
  }

  updateTextHeight(ev) {
    var msg = this.state.msg;
    msg.text = ev.target.value;
    this.setState({ msg });
    // AUTO CHANGE HEIGHT OF TEXTAREA
    ev.target.style.height = '60px';
    if ((ev.target.scrollHeight + 2) <= 128) {
      ev.target.style.height = (ev.target.scrollHeight + 2) + 'px';
    } else {
      ev.target.style.height = '128px';
    }
  }

  setFamilyList() {
    const grid4 = ['1 / 1 / 1 / 1', '1 / 2 / 1 / 2', '2 / 1 / 2 / 1', '2 / 2 / 2 / 2'];
    const familyList = this.props.family.map((person, idx) => {
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
    this.setState({ familyList });
  }
  setDogList() {
    const dogList = this.state.dogDetails.map((dogDetail, idx) => {
      return <div key={dogDetail._id} onClick={ev => { ev.stopPropagation(); this.msgContentChanged(dogDetail, idx) }}
        style={{ gridColumn: `${idx + 1}/${idx + 1}` }}>
        <div className="wrap-img" style={{ background: this.state.msg.dogOptions[idx] ? 'green' : '' }}>
          <img src={dogDetail.img} alt={`${dogDetail.text}`} />
        </div>
        <div className="name">
          <label>{dogDetail.text}</label>
        </div>
      </div>
    });
    this.setState({ dogList });
  }

  render() {
    var level = this.state.level;
    var btnText = this.state.buttonTexts[this.state.level - 1];
    // console.log(this.state.level);
    return (
      <div className="form-levels">
        {level === 2 &&
          <div className="level">
            <label>Who are you?</label>
            <div className="table-2">
              {this.state.familyList}
            </div>
          </div>
        }
        {level === 3 &&
          <div className="level">
            <label>Message Content</label>
            <div className="table-3">
              {this.state.dogList}
            </div>
          </div>
        }
        {level === 4 &&
          <div className="level">
            <label style={{ textAlign: 'left' }}>Something to add?</label>
            <div className="table-4" >
              <textarea type="text" placeholder="Write a comment"
                onChange={this.updateTextHeight.bind(this)} value={this.state.msg.text}></textarea>
            </div>
          </div>
        }
        <div className='line-btn'>
          {btnText ?
            <button className="level-btn" onClick={this.levelUp.bind(this)}>{btnText}</button>
            :
            <button className="level-btn cancel" onClick={this.initState.bind(this)}>Cancel</button>
          }
          {level > 2 &&
            <button className="back-btn" onClick={this.levelDown.bind(this)}>BACK</button>
          }
        </div>
      </div>
    )
  }
}

export default ChatForm;