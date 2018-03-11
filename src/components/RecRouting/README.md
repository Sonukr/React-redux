### About Routing Component 

- Here, In this component i used [React-router](https://github.com/ReactTraining/react-router) and [React-router-dom](https://www.npmjs.com/package/react-router-dom) for routing purpose.
### Why we need React-router-dom ?
- Well, that's because of we want to handle other things like, browserhistory, link(open link in new tab and other redirection and all), and  StaticRouter (for server rendering)  and many more.
- You can find more about this [Here](https://github.com/ReactTraining/react-router/issues/4648).

### How to set-up a routing in react app ?

- To enable routing in react-app, we need these two package [React-router](https://github.com/ReactTraining/react-router) and [React-router-dom](https://www.npmjs.com/package/react-router-dom). then follow the steps below .

-  Import the required methods from packages in your app.js file. ```BrowserRouter```, ```Route```, ```Link```,  ```Switch```,   ```Redirect```
    
    ```javascript
    import {
        BrowserRouter as Router,
        Route,
        Link,
        Switch,
        Redirect
    } from 'react-router-dom'
    ```

- Let's create comonent for routing example purpose(You can create your own componrent and import in app file and use them).

    - Home Component
    ```javascript 
    const Home = () => (
        <div>
            <h2>Home</h2>
        </div>
    )
    ```
    - About Component
    ```javascript
    const About = () => (
        <div>
            <h2>About</h2>
        </div>
    )
    ```
    - No match (when there is no match of routing or for 404 page).
    ```javascript
    const NoMatch = () => {
        <div>
            <h2>No Match</h2>
        </div>
    }
    ```
- Now, Let's return the componets in render method of app.
    ```sh
    <div className="App">
        {/* main router, which hold all the rendering components and routes */}
          <Router>
              <div className="menu">
                    {/* Links for navigation/routing */}
                  <ul>
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/about">About</Link></li>
                      {/* this will render Home Route as this is being redirect by router. */}
                      <li><Link to="/redirect-route">Redirect-route</Link></li>
                      // this will render NoMatch Route. as there is no /will-not-match in routes
                      <li><Link to="/will-not-match">Will Not Match</Link></li>
                  </ul>
                    {/* use of switch method for getting the route path and render the relative route.  */}
                  <Switch> 
                        {/* Route holds the component and path. so, it will render the relative component based on the route path he holds  */}
                      <Route exact path="/" component={Home}/>
                      <Route path="/about" component={About}/>
                      {/* redirect is used for listing the route name and based on that redirect to next route. */}
                      <Redirect from="/redirect-route" to="/"/>
                      {/* this route is being used when there is no route name matched in Route henace it will render NoMatch Component.  */}
                      <Route component={NoMatch}/>
                  </Switch>
              </div>
          </Router>
      </div>
    ```

    So, Finally your app.js file should be look like this.
    ```html

    import React, { Component } from 'react';
    import {
        BrowserRouter as Router,
        Route,
        Link,
        Switch,
        Redirect
    } from 'react-router-dom'

    import logo from './logo.svg';
    import styles from './App.css';


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

    const NoMatch = () => {
        <div>
            <h2>No Match</h2>
        </div>
    }

    class App extends Component {
        render() {
            return (
                <div className="App">
                    <Router>
                        <div className="menu">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/redirect-route">Redirect-route</Link></li>
                                <li><Link to="/will-not-match">Will Not Match</Link></li>
                            </ul>
                            <Switch> 
                                <Route exact path="/" component={Home}/>
                                <Route path="/about" component={About}/>
                                <Redirect from="/redirect-route" to="/" />
                                <Route component={NoMatch}/>
                            </Switch>
                        </div>
                    </Router>
                </div>
            );
        }
    }
    export default App;
    ```
### That's It, You hava a working Routing in react app. 😄 🎉