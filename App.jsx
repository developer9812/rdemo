import React from 'react';
import ChildDemo from './Child.jsx'

class App extends React.Component {

	constructor(props) {
	  super(props);
	
	  this.state = {
	  	message: "React Demo App",
	  	messageList: ['One', 'Two', 'Three'],
	  	activeMessage: null,
	  };

	  this.onSubmit = this.onSubmit.bind(this);
	  this.childCallback = this.childCallback.bind(this);
	  this.selectListItem = this.selectListItem.bind(this);
	}

	render() {
		let classes = ['column', 'demo'];
		const activeList = {
			border: '1px solid turquoise',
			color: 'turquoise'
		}
		return (
			<div className="column">
				<div className="card" style={{ marginBottom: '1rem' }}>

					<div className="card-header column has-text-centered">Parent Component</div>

					<div className="card-content">
						<p>{ this.state.message }</p>
						<input onChange={(e) => {this.setState({message: e.target.value})}} value={this.state.message}></input>
						<ul>
							{ this.state.messageList.map((messageItem, index) => 
								<li style={this.state.activeMessage == index ? activeList : {}} key={index}> 
									<div className="level" style={{ padding: '1rem', border: '1px solid whitesmoke' }}>
										<div className="level-left"><span className="level-item">{ messageItem }</span></div>
										<div className="level-right">
											<a onClick={this.selectListItem.bind(this, index)} className="button is-small level-item">Select</a>
										</div>
									</div>
								</li>
							) }
						</ul>
					</div>

					<div className="card-footer column">
						<div className="level">
							<div className="level-left">
							</div>
							<div className="level-right">								
								<a className="button is-outlined is-primary level-item" onClick={this.onSubmit}>Submit</a>
							</div>
						</div>
					</div>
					
				</div>

				<ChildDemo message={this.state.message} returnMessage={this.childCallback} />

			</div>
		)
	}

	onSubmit(){
		this.setState({
			message: "New Message"
		});
	}

	childCallback(message){
		this.setState({
			message: message
		});
	}

	selectListItem(index) {
		this.setState({
			activeMessage: index
		})
	}
}

export default App;