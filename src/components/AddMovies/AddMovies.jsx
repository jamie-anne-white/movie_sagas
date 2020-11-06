import React, { Component } from 'react';
import { connect } from 'react-redux';


class AddMovies extends Component {

    state = {
        genre_id: 1,
        title: '',
        poster: '',
        description: ''
    }

    addMovie = (event) => {
        event.preventDefault();
        console.log(this.state)
        this.props.dispatch({type: 'ADD_MOVIE', payload: this.state})
        this.setState({
            genre_id: 1,
            title: '',
            poster: '',
            description: ''
        })
    }


    handleChange = (event, propertyName) => {
            this.setState({
                ...this.state,
                [propertyName]: event.target.value
            })
    }


    render() {
        console.log(this.state)
        return (
            <>
                <p>Add a Movie</p>
                <form onSubmit={this.addMovie}>
                <input type='text' placeholder='movie title' onChange={(event) => this.handleChange(event, 'title')}/>
                <input type='text' placeholder='poster url' onChange={(event) => this.handleChange(event, 'poster')}/>
                <textarea placeholder='description' onChange={(event) => this.handleChange(event, 'description')}></textarea>
                <label>Choose a Genre:</label>
                <select name="genre" id="genre" onChange={(event) => this.handleChange(event, 'genre')}>
                <option value="1">Adventure</option>
                    <option value="2">Animated</option>
                    <option value="3">Biographical</option>
                    <option value="4">Comedy</option>
                    <option value="5">Disaster</option>
                    <option value="6">Drama</option>
                    <option value="7">Epic</option>
                    <option value="8">Fantasy</option>
                    <option value="9">Musical</option>
                    <option value="10">Romantic</option>
                    <option value="11">Science Fiction</option>
                    <option value="12">Space-Opera</option>
                    <option value="13">Superhero</option>
                </select>
                <button type='submit'>Submit Movie</button>
                </form>


                <button onClick={() => this.props.history.push('/')}>Cancel</button>
            </>
        )
    }
};
const mapPropsToState = (reduxState) => {
    return {
        reduxState
    }
}
export default connect(mapPropsToState)(AddMovies) 