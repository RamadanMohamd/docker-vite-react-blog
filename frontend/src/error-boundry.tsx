import { Component } from "react";
import { ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
}

class ErrorBoundary extends Component<ErrorBoundaryProps> {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error: Error, info: any) {
    console.error("ErrorBoundary caught an error", error, info);
  }
  render() {
    console.log(this.state)
    if (this.state.hasError) {
      return (
        <>
          <p>
            There was an error with this listing. <a href="/">Click here</a>{" "}
            to refresh.
          </p>
        </>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
