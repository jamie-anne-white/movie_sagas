import React, { Component } from 'react';
import { connect } from 'react-redux';


class AddMovies extends Component {

    state = {
        genre: 'Adventure',
        title: '',
        poster: '',
        description: ''
    }

    componentDidMount() {
        this.props.dispatch({ type: 'GET_DETAILS' })
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
                <input type='text' placeholder='movie title' onChange={(event) => this.handleChange(event, 'title')}/>
                <input type='text' placeholder='poster url' onChange={(event) => this.handleChange(event, 'poster')}/>
                <textarea placeholder='description' onChange={(event) => this.handleChange(event, 'description')}></textarea>
                <label>Choose a Genre:</label>
                <select name="genre" id="genre" onChange={(event) => this.handleChange(event, 'genre')}>
                    <option value="Adventure">Adventure</option>
                    <option value="Animated">Animated</option>
                    <option value="Biographical">Biographical</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Disaster">Disaster</option>
                    <option value="Drama">Drama</option>
                    <option value="Epic">Epic</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Musical">Musical</option>
                    <option value="Romantic">Romantic</option>
                    <option value="Science Fiction">Science Fiction</option>
                    <option value="Space-Opera">Space-Opera</option>
                    <option value="Superhero">Superhero</option>
                </select>


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