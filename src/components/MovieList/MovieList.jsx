import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import './MovieList.css'


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
                   
                    <Card key={movie.id} className='item'>
                    <div className='card-content'>
                        <img className ='poster' src={movie.poster} alt={movie.title} onClick={() => this.sendId(movie.id)} />
                        <div className='title-div'>
                        <h3>{movie.title}</h3> </div>
                        <p>{movie.description}</p>
                    </div>
                    </Card>
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