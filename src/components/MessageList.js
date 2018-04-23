import React, { Component } from 'react';

class MessageList extends Component {
  constructor(props) {
	super(props);

	this.state = {
		messages: [{
		  username: "",
		  sentAt: "",
		  content: "",
		  roomId: "",
		}]
	};

	this.messageRef = this.props.firebase.database().ref('messages');
	this.state.messages.sentAt = this.props.firebase.database.ServerValue.TIMESTAMP;
  }

  componentDidMount() {
  	this.messageRef.on('child_added', snapshot => {
    	const message = snapshot.val();
    	message.key = snapshot.key;
    	this.setState({ messages: this.state.messages.concat(message) })
  		});
  }

  render() {
  	const activeRoomKey = this.props.activeRoomKey;

  	return( 
  		<div>
  			<ul>
      			{this.state.messages.map( (message, index) => {
      				if (activeRoomKey === "") {
      					return null;
      				} else if (message.roomId == activeRoomKey) {
         				  return (
         				  	<li className="message" key={index}>{message.username}: {message.content}</li>
         				  );
         			}
         		})}
        </ul>
  		</div>
  	);
  }
}

export default MessageList;