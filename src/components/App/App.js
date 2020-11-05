import React, {Component} from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList.jsx'
import Details from '../Details/Details.jsx'


class App extends Component {
    // Renders the entire app on the DOM
    render() {
        return (
            <div className="App">
                <h1>Movies!</h1>
                <Router>
                    {/* ADD PAGES! */}
                    <Route exact path="/" component={MovieList}/>
                    <Route exact path="/details" component={Details} />

                </Router>
            </div>
        );
    }
}

export default App;
