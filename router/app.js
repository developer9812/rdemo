import '../app.scss'

import React from 'react';
import ReactDOM from 'react-dom';
// Import routing components
import {BrowserRouter as Router, Route, Link, NavLink, Switch} from 'react-router-dom';
import createHashHistory from 'history/createHashHistory'

const history = createHashHistory({
  hashType: 'noslash' // Omit the leading slash
})


class MainPage extends React.Component{
	render(){
		return(
			<div className="card">
				<div className="card-header column has-text-centered">
					Main Page
				</div>
				<div className="card-content">
					Contents of Main page
				</div>
				<div className="card-footer column">
					<Link className="button" to="/second">Second</Link>
				</div>
			</div>
		)
	}
}

class SecondPage extends React.Component{
	render(){
		return(
			<div className="card">
				<div className="card-header column has-text-centered">
					Second Page
				</div>
				<div className="card-content">
					Contents of Second page
				</div>
				<div className="card-footer column">
					<Link className="button is-primary is-outlined" to="/main">Main</Link>
				</div>
			</div>
		)
	}
}

class Home extends React.Component {
    render(){
        return (
        	<div className="columns column" >
				<div className="column is-2">			
					<aside className="menu">
					  <ul className="menu-list">
					    <li><NavLink activeClassName="is-active" to="/main">Main</NavLink></li>
					    <li><NavLink activeClassName="is-active" to="/second">Second</NavLink></li>
					  </ul>
					</aside>
				</div>
				<div className="column">
					<div className="container is-fluid">
						<Switch>								       
					        <Route path="/main" component={MainPage}/>
					        <Route path="/second" component={SecondPage}/>   
					        <Route component={MainPage} />
						</Switch>
					</div>			
				</div>        		
        	</div>
        );
    }
}


ReactDOM.render(
    <Router basename="/react/router" history={history}>
        <Route path="/" component={Home}/>  		
    </Router>,
    document.getElementById('app')
);