import React, { Component } from 'react';
import { connect } from 'react-redux';


class MovieList extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_MOVIES' })
    }


    render() {
        return (
            <div className='container'>
                {this.props.reduxState.movies.map((movie) => (
                    <div key={movie.id} className='item'>
                        <img src={movie.poster} alt={movie.title} />
                        <h3>{movie.title}</h3>
                        <p>{movie.description}</p>
                    </div>
                ))}
            </div>
        )
    }
};

const mapPropsToState = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(mapPropsToState)(MovieList) 