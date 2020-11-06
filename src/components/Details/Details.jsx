import React, { Component } from 'react';
import { connect } from 'react-redux';


class Details extends Component {

    state = {}


    componentDidMount() {
        this.props.dispatch({ type: 'GET_DETAILS' })
        this.props.dispatch({ type: 'FETCH_DETAILS' })
    }

    render() {
        return (
            <>





                <p>details page</p>

                <p>{this.props.reduxState.details.name}</p>
                    {this.props.reduxState.details.map((movie) => {

                    return (
                        <>
                        <div className='details' key={movie.id}>
                            <img src={movie.poster} alt={movie.title} />
                            <h3>{movie.title}</h3>
                            <p>Categories: {movie.name}</p>
                            <p>{movie.description}</p>

                        </div>
                        <button onClick={() => this.props.history.push('/')}>Back</button>
                        </>
                    )
                })}

            </>
        )
    }
};
const mapPropsToState = (reduxState) => {
    return {
        reduxState
    }
}
export default connect(mapPropsToState)(Details)