import React from 'react';
import ReactDOM from 'react-dom';
// Import routing components
import {Router, Route} from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()

class Home extends React.Component {
    render(){
        return (<h1>Hi</h1>);
    }
}

ReactDOM.render(
    <Router history={history}>
        <Route path="/" component={Home}/>
    </Router>,
    document.getElementById('app')
);