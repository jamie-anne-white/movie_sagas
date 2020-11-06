import React, {Component} from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList.jsx'
import Details from '../Details/Details.jsx'
import AddMovies from '../AddMovies/AddMovies.jsx';



class App extends Component {
    // Renders the entire app on the DOM
    render() {
        return (
                <Router>
                  <div className="App">
                  <h1>Movies!</h1>

                  <button><Link to='/add'> Add a Movie</Link></button>
                  <Route exact path='/' component={MovieList}/>
                  <Route exact path='/details' component={Details} />
                  <Route path='/add' component={AddMovies}/>

                  </div>

                </Router>
        );
    }
}

export default App;
