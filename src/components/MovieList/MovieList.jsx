import React, { Component } from 'react';
import { connect } from 'react-redux';


class MovieList extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_MOVIES' })
    }


    render() {
        return (
            <div className='container'>
         <p>Movie List</p>
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