# React context

* Context is useful when we need to have some state to be available for all our components.
* Like a "User" state on Netflix, with field for "plan", "sub-user" etc, or theme.

_ThemeContext.js_

```jsx
import { createContext } from "react";

const ThemeContext = createContext(["#fo6do6", () => {
}]);

export default ThemeContext;

```

_App.js_

```jsx
import { render } from "react-dom";
import ThemeContext from "./ThemeContext";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { StrictMode, useState } from "react";
import SearchParams from "./SearchParams";
import Details from "./Details";

const App = () => {
  const theme = useState("#74FA40");
  return (
    <StrictMode>
      <ThemeContext.Provider value={theme}>
        <BrowserRouter>
          <div>
            <header>
              <Link to="/">
                <h1>Adopt Me</h1>
              </Link>
            </header>
            <Routes>
              <Route path="/details/:id" element={<Details />} />
              <Route path="/" element={<SearchParams />} />
            </Routes>
          </div>
        </BrowserRouter>
      </ThemeContext.Provider>
    </StrictMode>
  );
};

render(<App />, document.querySelector("#root"));
```

* Now our theme context is available for all components that were wrapped with `<ThemeContext.Provider>`

```jsx
import { useState, useEffect, useContext } from "react";
import useBreedList from "./useBreedList";
import Results from "./Results";
import ThemeContext from "./ThemeContext"; // import it

const ANIMALS = ["dog", "cat", "bird", "horse", "snake"];

const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  const [theme] = useContext(ThemeContext) // use it  
}; 
```

```jsx
 <button style={{ backgroundColor: theme }} type="submit">
  Submit
</button>
```

* Example of usage of the context inside a class component with `Consumer`

```jsx
/* The hard way :) */
/* Wrap the components that you want tu use the theme w/ ThemeContext.Consumer*/
<ThemeContext.Consumer>
  {/*Destructuring the theme*/}
  {([theme]) => (
    <button style={{ backgroundColor: theme }}>Adopt {name}</button>
  )}
</ThemeContext.Consumer>
```

* The easier way is to use useContext. Leaving the whole component here for the reference

```jsx
import { Component, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";

class Details extends Component {
  state = {
    loading: true,
  };

  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.params.id}`
    );

    const json = await res.json();

    this.setState({ loading: false, ...json.pets[0] });
  }

  render() {
    if (this.state.loading) {
      return (
        <div>
          <h2>Loading...</h2>
        </div>
      );
    }

    const { animal, breed, city, state, name, description, images } =
      this.state;

    const { theme } = this.props; // destructure it

    return (
      <div className="details">
        <div>
          <Carousel images={images} />
          <h1>{name}</h1>
          <h2>
            {animal} - {breed} - {city}, {state}
          </h2>
          {/* Use it */}
          <button style={{ backgroundColor: theme }}>Adopt {name}</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

const WrappedDetails = () => {
  const params = useParams();
  const [theme] = useContext(ThemeContext); // initialize it

  return (
    <ErrorBoundary>
      <Details theme={theme} params={params} />
    </ErrorBoundary>
  );
};

export default WrappedDetails;

```

## Now lets make the context settable through state

* Remember, that state resets to the whatever default state is after each unmount/mount
* That's why we must put our theme state to the `App` component, since App never unmounts.
* So this way we're able to preserve the state across the app

```jsx
import { render } from "react-dom";
import ThemeContext from "./ThemeContext";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { StrictMode, useState } from "react";
import SearchParams from "./SearchParams";
import Details from "./Details";

const App = () => {
  const theme = useState("#74FA40");
  return (
    <StrictMode>
      <ThemeContext.Provider value={theme}>
        <BrowserRouter>
          <div>
            <header>
              <Link to="/">
                <h1>Adopt Me</h1>
              </Link>
            </header>
            <Routes>
              <Route path="/details/:id" element={<Details />} />
              <Route path="/" element={<SearchParams />} />
            </Routes>
          </div>
        </BrowserRouter>
      </ThemeContext.Provider>
    </StrictMode>
  );
};

render(<App />, document.querySelector("#root"));
```