# Error boundaries

* We must catch error that comes out of a component.
* You wrap untrusted component with an error boundaries
* This has to be a class component
* Error boundary should be outside the component that causes that error.A parent component, for example.

```js
import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError = () => {
    return {
      hasError: true,
    };
  };

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>There was an error</h2>
          <Link to="/">Click here</Link>
          to go back to the home page, or we will
          redirect you automatically in 5 seconds
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;


```

* Errors bubble to the top, so we catch it at the closest level

***_Details.js_***

```js
const WrappedDetails = () => {
  const params = useParams();

  return (
    <ErrorBoundary>
      <Details params={params}/>
    </ErrorBoundary>
  );
};

export default WrappedDetails;

```