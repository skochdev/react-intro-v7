import { Component } from "react";
import { Link, Navigate } from "react-router-dom";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    redirect: false,
  };

  // static getDerivedStateFromError() {
  //   return {
  //     hasError: true,
  //   };
  // }

  render() {
    if (this.state.redirect) {
      return <Navigate to="/" />;
    } else if (this.state.hasError) {
      return (
        <div>
          <h2>There was an error</h2>
          <Link to="/">Click here</Link> to go back to the home page, or we will
          redirect you automatically in 5 seconds
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
