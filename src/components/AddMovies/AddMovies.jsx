import React, { Component } from 'react';
import { connect } from 'react-redux';
import { InputLabel, MenuItem, Select, TextField, FormControl, FormHelperText, Button } from '@material-ui/core';
import './AddMovies.css';


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
        this.props.dispatch({ type: 'ADD_MOVIE', payload: this.state })
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
            <div className='addMovie'>
                <p>Add a Movie</p>
                <div >
                    <form onSubmit={this.addMovie}>
                        <div className='form-div'>
                            <TextField variant="outlined" label='Movie Title' required onChange={(event) => this.handleChange(event, 'title')} />
                            <TextField variant="outlined" label='Poster Url' required onChange={(event) => this.handleChange(event, 'poster')} />
                        </div>
                        <div className='form-div'>
                            <TextField variant="outlined" label='Description' required multiline style={{ width: 400 }}
                                rowsMax={6} onChange={(event) => this.handleChange(event, 'description')} />
                        </div>
                        <div className='form-div'>
                        <FormControl required>
                            <InputLabel id='genre-select'>Genre</InputLabel>
                            <Select required value={this.state.genre_id} labelid='genre-select' id="genre" style={{ width: 200 }}
                                placeholder='Genre' onChange={(event) => this.handleChange(event, 'genre_id')} >
                                <MenuItem value={1}>Adventure</MenuItem>
                                <MenuItem value={2}>Animated</MenuItem>
                                <MenuItem value={3}>Biographical</MenuItem>
                                <MenuItem value={4}>Comedy</MenuItem>
                                <MenuItem value={5}>Disaster</MenuItem>
                                <MenuItem value={6}>Drama</MenuItem>
                                <MenuItem value={7}>Epic</MenuItem>
                                <MenuItem value={8}>Fantasy</MenuItem>
                                <MenuItem value={9}>Musical</MenuItem>
                                <MenuItem value={10}>Romantic</MenuItem>
                                <MenuItem value={11}>Science Fiction</MenuItem>
                                <MenuItem value={12}>Space-Opera</MenuItem>
                                <MenuItem value={13}>Superhero</MenuItem>
                            </Select>
                            <FormHelperText>Required</FormHelperText>
                        </FormControl>
                        <div className='form-div'>
                        <Button type='submit' variant="contained" color="primary">Save</Button>
                        </div>
                        </div>
                    </form>
                    <Button variant="contained" onClick={() => this.props.history.push('/')}>Cancel</Button>
                </div>
            </div>
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