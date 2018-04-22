import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';

var config = {
    apiKey: "AIzaSyDkoSGjI5Ry-RsHtuoBy_H0GMZ_h_SY4-Q",
    authDomain: "bloc-chat-69d23.firebaseapp.com",
    databaseURL: "https://bloc-chat-69d23.firebaseio.com",
    projectId: "bloc-chat-69d23",
    storageBucket: "bloc-chat-69d23.appspot.com",
    messagingSenderId: "766262905059"
  };

  firebase.initializeApp(config);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeRoom: "",
      activeRoomKey: "",
    };
  }

  handleActiveRoom(room) {
    this.setState({ activeRoom: room });
    this.setState({ activeRoomKey: room.key });
  }

  render() {
    return (
      <div>
        <header>
          <h1>Bloc Chat</h1>
        </header>
        <aside>
          <RoomList firebase={firebase} activeRoom={this.handleActiveRoom.bind(this)}/>
        </aside>
        <div>
          <h2>{this.state.activeRoom.name}</h2>
        </div>
        <main>
          <MessageList firebase={firebase} activeRoomKey={this.state.activeRoomKey}/>
        </main>
      </div>
    );
  }
}

export default App;