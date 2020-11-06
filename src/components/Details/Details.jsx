import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Details.css';
import {Card, Button} from '@material-ui/core/';



class Details extends Component {
    state = {}

    componentDidMount() {
        this.props.dispatch({ type: 'GET_DETAILS' })
    }

    render() {

        return (
            <div className='container'>
                    {this.props.reduxState.details[0] && 
                        <Card className='details'>
                        <h2>{this.props.reduxState.details[0].title}</h2>
                        <img src={this.props.reduxState.details[0].poster} alt={this.props.reduxState.details[0].title} />
                            
                        <div className='categories'>
                        <h4 >Categories:</h4>
                            <ul>
                                {this.props.reduxState.details.map((item) => {
                                    return (
                                        <li key={item.name}>{item.name}</li>
                                        )
                                })}
                            </ul>

                        </div>
                        <p className='catagories'>{this.props.reduxState.details[0].description}</p>

                                <Button variant='contained' onClick={() => this.props.history.push('/')}>Back</Button>
                                <Button variant='contained' onClick={() => this.props.history.push('/edit')}>Edit</Button>

                                </Card>}
                        </div>

        )

    }
}

const mapPropsToState = (reduxState) => {
    return {
        reduxState
    }
}
export default connect(mapPropsToState)(Details)