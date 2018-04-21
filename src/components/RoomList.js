import React, { Component } from 'react';

class RoomList extends Component{
  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
      newRoomName: ""
    };
    this.createRoom = this.createRoom.bind(this);
    this.roomsRef = this.props.firebase.database().ref('rooms');
  }

	componentDidMount() {
	  this.roomsRef.on('child_added', snapshot => {
	    const room = snapshot.val();
	    room.key = snapshot.key;
	    this.setState({ rooms: this.state.rooms.concat( room ) })
	  	});
	}

	createRoom(e){
		e.preventDefault();
		const inputText = document.getElementById("crname").value;
		if(inputText.length < 5){
			alert("Room name must be at least 5 characters");
		}
		else{
			const newRoomName = this.state.newRoomName;
		this.roomsRef.push({ 
			name: newRoomName
		});
		this.setState({ newRoomName: "" });
		}
	}

	handleNameChange(e){
		this.setState({ newRoomName: e.target.value });
	}
	render(){
		return(
			<div className="roomlist">
				<h2>Rooms</h2>
				<ul>{this.state.rooms.map( (room, index) => {
					return(<li className="room" key={index}>{room.name}</li>)
					})}
				</ul>
				<form onSubmit={ (e) => this.createRoom(e) }>
					Start a new chat room: 
					<input id="crname" 
							type="text" 
							placeholder="e.g. My Room"
							value={ this.state.newRoomName }
							onChange={ (e) => this.handleNameChange(e) } />
					<input type="submit" value="Create New Room" />
				</form>
			</div>
		);
	}
}

export default RoomList;