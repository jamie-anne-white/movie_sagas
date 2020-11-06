import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextField, Button, Card } from '@material-ui/core';


class Edit extends Component {

    state = {
        title: this.props.reduxState.details[0].title,
        description: this.props.reduxState.details[0].description,
        id: this.props.reduxState.details[0].id
    }
    submitEditedMovie = (event) => {
        event.preventDefault();
        console.log(this.state)
        this.props.dispatch({ type: 'SUBMIT_EDITED_MOVIE', payload: this.state })
        this.props.history.push('/');    }

    handleChange = (event, propertyName) => {
        this.setState({
            ...this.state,
            [propertyName]: event.target.value,
            id: this.props.reduxState.details[0].id
        })
    }


    render() {

        console.log(this.state)

        return (
            <Card>
                <p>Edit</p>
                <form onSubmit={this.submitEditedMovie}>
                    <TextField variant="outlined" label='Title' defaultValue={this.props.reduxState.details[0].title}
                        required onChange={(event) => this.handleChange(event, 'title')} />
                    <TextField variant="outlined" label='Description' required multiline style={{ width: 500 }}
                        defaultValue={this.props.reduxState.details[0].description}
                        onChange={(event) => this.handleChange(event, 'description')} />
                        <Button variant='contained' type='submit'>Save</Button>


                </form>
            </Card>
        )
    }
};

const mapPropsToState = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(mapPropsToState)(Edit) 