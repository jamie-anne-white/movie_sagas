import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers, applyMiddleware} from 'redux';
// Provider allows us to use redux within our react app
import {Provider} from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import {takeEvery, put} from 'redux-saga/effects';
import axios from 'axios';

let id = 0;

// Create the rootSaga generator function
function * rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchMovies)
    yield takeEvery('GET_DETAILS', fetchDetails)

}

//saga generator functions

function * fetchDetails() {
    try {
        let response = yield axios.get(`/api/movie/${id}`)
        console.log(response.data)
        //save to redux
        yield put({type: 'SET_DETAILS', payload: response.data})
    } catch (error) {
        console.log('error in fetch details', error);
    }
}

function * fetchMovies() {
    try {
        //server req
        let response = yield axios.get('/api/movie')
        //save to redux
        yield put({type: 'SET_MOVIES', payload: response.data})
    } catch (error) {
        console.log('error in fetch movies', error)
    }

}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

const details = (state = [], action) => {
    switch (action.type) {
        case 'SET_DETAILS':
            return action.payload
        default:
            return state;
    }
}

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SEND_ID':
            console.log(action.payload)
            id = action.payload
            return state;
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}
// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}
// Create one store that all components can use
const storeInstance = createStore(combineReducers({movies, genres, details}),
// Add sagaMiddleware to our store
applyMiddleware(sagaMiddleware, logger),);
// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);
ReactDOM.render(
    <Provider store={storeInstance}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();