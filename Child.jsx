import React from 'react';

class ChildDemo extends React.Component
{
	constructor(props) {
	  super(props);	
	  this.state = {
	  	childMessage: ''
	  };

	  this.sendMessage = this.sendMessage.bind(this);
	}

	render(){
		return(
			<div className="card">
				<div className="card-header column has-text-centered">
					Child Component
				</div>
				<div className="card-content">
					<p>
						{ this.props.message }
					</p>
					<input value={this.state.childMessage} onChange={ e => { this.setState({childMessage: e.target.value}) } }></input>
				</div>
				<div className="card-footer column">
					<a className="button" onClick={this.sendMessage}>
						Call Parent
					</a>
				</div>
			</div>
		)
	}

	sendMessage(){
		this.props.returnMessage(this.state.childMessage);
	}
}

export default ChildDemo;