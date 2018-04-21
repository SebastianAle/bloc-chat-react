import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';

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
  render() {
    return (
      <div>
        <header>
          <h1>Bloc Chat</h1>
        </header>
        <main>
          <RoomList firebase={firebase} />
        </main>
      </div>
    );
  }
}

export default App;
