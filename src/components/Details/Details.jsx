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


                {this.props.reduxState.details.map((movie) => {

                    return (
                        <div className='details' key={movie.id}>
                            <img src={movie.poster} alt={movie.title} />
                            <h3>{movie.title}</h3>
                            <p>Categories: {movie.name}</p>
                            <p>{movie.description}</p>

                        </div>
                    )
                })}

                {/* {this.props.reduxState.details &&
                    <div className='details'>
                        <img src={this.props.reduxState.details[0].poster} alt={this.props.reduxState.details[0].title} />
                        <h3>{this.props.reduxState.details[0].title}</h3>
                        <p>{this.props.reduxState.details[0].description}</p>                    </>
                        <p>{this.props.reduxState.details[0].description}</p>
                    </div>} */}
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