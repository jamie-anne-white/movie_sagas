import React, { Component } from 'react';
import { connect } from 'react-redux';


class MovieList extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_MOVIES' })
    }

    sendId = (id) => {
        console.log(id)
        this.props.dispatch({type: 'SEND_ID', payload: id})
        this.props.history.push('/details')

}


    render() {
        return (
            <div className='container'>
                {this.props.reduxState.movies.map((movie) => (
                    <div key={movie.id} className='item'>
                        <img src={movie.poster} alt={movie.title} onClick={() => this.sendId(movie.id)} />
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