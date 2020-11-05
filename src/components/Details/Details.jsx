import React, {Component} from 'react';
import {connect} from 'react-redux';

class Details extends Component {

    componentDidMount() {}

    render() {
        return (
            <>
          <p>details page</p>





          {/* <div className='details'>
                        <img src={this.props.reduxState.details[0].poster} alt={this.props.reduxState.details[0].title}/>
                        <h3>{this.props.reduxState.details[0].title}</h3>
        <p>{this.props.reduxState.details[0].description}</p>
                        <p>{this.props.reduxState.details[0].description}</p>
                    </div> */}
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