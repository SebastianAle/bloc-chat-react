import React, { Component } from 'react';

class User extends Component {
	constructor(props) {
		super(props)
	}

  componentDidMount(){
    this.props.firebase.auth().onAuthStateChanged( user => {
      this.props.setUser(user);
    });
  }

  signIn(){
    const provider = new this.props.firebase.auth.GoogleAuthProvider();
    this.props.firebase.auth().signInWithPopup( provider );
  }

  signOut(){
    this.props.firebase.auth().signOut();
  }

	render() {
		return(
			<div>
        <div>Current User: {this.props.username}</div>
        {this.props.username === 'Guest' ? 
              <button className="sign-in" onClick={this.signIn.bind(this)}>Sign In</button>
               : <button className="sign-out" onClick={this.signOut.bind(this)}>Sign Out</button> }
			</div>
		);
	}
}

export default User;