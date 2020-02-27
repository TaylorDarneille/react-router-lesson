# React Router Lesson

[DOCS](https://reacttraining.com/react-router/)

## Overview

React Router is a package of components (`react-router-dom`). It allows us to build a single page application with client-side routing that mimics that of a traditional website.

To change what the user is seeing in a React application so far, we have relied on that user's interaction with the website through clicking, etc, in order to change which components are rendering. With React Router, each 'page' is associated with a path (similar to how we associated EJS templates with particular paths). The user can navigate to each view of the application via the URL bar, and if the view changes based on what the user is doing on the application, the URL follows suit. In development, this means we tell the application to render a particular route when we want it to display the components assigned to that route.

---

In this lesson, we will build a small application with the following routes:

| Route             | Components    |
| ------------------| ------------- |
| '/'               | <Home />  |
| '/about'          | <About /> |
| '/shoutout/:name' | <Shoutout /> |

0. Create a new react app!

1. ```npm install react-router-dom```

2. Import the tools you need! 

`App.js`
```
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from 'react-router-dom';
```

3. Wrap your app in a `Router` component:

`App.js`
```
function App() {
  return (
    <Router>
      <h1>React Router Example</h1>
    </Router>
  );
}
```

4. Start with the `Home` and `About` routes:

For simplicity and speed, we'll define our components inside `App.js`:

```
function Home() {
  return(<h2>Hello World!</h2>)
}

function About() {
  return(<h3>About this website</h3>)
}
```

Now add a `Switch` component inside the `App` component.

```
function App() {
  return (
    <Router>

        <Switch>
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
```

Try navigating between the two routes via the URL bar.

**ORDER MATTERS:** `<Switch>` looks through its children `<Route>`s and renders the first one that matches the current URL.

*Try switching the order of the `Route`s and see what happens*

5. Add Links:

Let's add some links above our `Switch` for our user to navigate between the two pages:

```
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
```

6. Set up the `Shoutout` route using URL params:

Add the route at the top of your `Switch`:
```
          <Route path={'/shoutout/:first/:last'}>
            <Shoutout />
          </Route>
```

Write the component :

```
function Shoutout() {
  let { name } = useParams();
  return(<h2>Hello {first} {last}!</h2>)
}
```

Try it out!

There are a lot more useful commponents to play with in React Router like `Redirect`, and URL matching ~ check out the [docs](https://reacttraining.com/react-router/) to learn more!





