import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // to show the error in console
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      // render this url
      return <div className="error_boundary">
        <h1>An error just occured</h1>
        {/* <p>{hasError.message}</p> */}
      </div>;
    }

    // eslint-disable-next-line react/prop-types
    return this.props.children;
  }
}

export default ErrorBoundary;
