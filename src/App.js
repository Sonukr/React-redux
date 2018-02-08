import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import logo from './logo.svg';
import styles from './App.css';
import Emonjis from './emonjis'



const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
)

const About = () => (
    <div>
        <h2>About</h2>
    </div>
)

const Topic = ({ match }) => (
    <div>
        <h3>{match.params.topicId}</h3>
    </div>
)

const Topics = ({ match }) => (
    <div>
        <h2>Topics</h2>
        <ul>
            <li>
                <Link to={`${match.url}/rendering`}>
                    Rendering with React
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/components`}>
                    Components
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/props-v-state`}>
                    Props v. State
                </Link>
            </li>
        </ul>

        <Route path={`${match.url}/:topicId`} component={Topic}/>
        <Route exact path={match.url} render={() => (
            <h3>Please select a topic.</h3>
        )}/>
    </div>
)

class App extends Component {
  render() {
    return (
      <div className="App">
          <Router>
              <div className="menu">
                  <ul>
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/about">About</Link></li>
                      <li><Link to="/topics">Topics</Link></li>
                      <li><Link to="/emonjis">Emonjis</Link></li>
                  </ul>

                  <Route exact path="/" component={Home}/>
                  <Route path="/about" component={About}/>
                  <Route path="/topics" component={Topics}/>
                  <Route path="/emonjis" component={Emonjis}/>

              </div>
          </Router>
      </div>
    );
  }
}

export default App;
