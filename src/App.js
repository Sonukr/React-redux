import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import { HomePage } from './components/home';

/*
 * The Provider component provides
 * the React store to all its child
 * components so we don't need to pass
 * it explicitly to all the components.
 */
import {Provider} from 'react-redux';

import {createStore, applyMiddleware, compose} from 'redux';
import { createLogger } from 'redux-logger'

import { Reducer } from './reducer';
class App extends Component {

    constructor(props) {
        super(props);

        /*
        * This creates the logger so we
        * can see all the dispatched actions and prev/next state into console.
        * 
        */
        const logger = createLogger();
        const initialState = {};
        /*
        * The enhancer are passed when
        * creating the Redux store to
        * add some extra functionality.
        *
        * In this case we add a logger
        * middleware that write some debug
        * information every time the
        * state is changed.
        *
        * We also add the Redux DevTools
        * so we can easily debug the state.
        */
        const enhancer = compose(
            applyMiddleware(logger)
        );
        
        /*
        * This creates the store so we
        * can listen to changes and
        * dispatch actions.
        */
        const store = createStore(Reducer, initialState,enhancer);
        this.store = store;
        /* or we can write in a single function.
        *
        */ 
        // this.store =compose(
        //     applyMiddleware(logger)
        // )(createStore)(Reducer);
    }


  render() {
    return (
        //  Provider component which makes the Redux store available to all its descendants. Without this component you would have to pass the store as a prop to all the components that need it.
      <Provider store={this.store}>
        <Router>
            <Route  path="/" component={HomePage}/>
        </Router>
      </Provider>
    );
  }
}

export default App;
