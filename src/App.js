import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from 'react-router-dom';


function App() {
  return (
    <Router>
      <h1>React Router Example</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path={'/shoutout/:first/:last'}>
            <Shoutout />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

function Home() {
  return(<h2>Hello World!</h2>)
}

function About() {
  return(<h3>About this website</h3>)
}

function Shoutout() {
  let { first, last } = useParams();
  return(<h2>Hello {first} {last}!</h2>)
}

export default App;
