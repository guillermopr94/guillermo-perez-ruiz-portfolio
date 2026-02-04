import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  name?: string;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(
      `Uncaught error in ${this.props.name || 'ErrorBoundary'}:`,
      error,
      errorInfo,
    );
  }

  public render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="flex min-h-[200px] w-full flex-col items-center justify-center rounded-lg border border-red-500/20 bg-red-500/5 p-8 text-center">
            <h2 className="mb-2 text-xl font-semibold text-red-400">
              Something went wrong
            </h2>
            <p className="mb-4 text-slate-400">
              {this.props.name
                ? `The ${this.props.name} section failed to load.`
                : 'An error occurred while rendering this component.'}
            </p>
            <button
              onClick={() => this.setState({ hasError: false })}
              className="rounded-full bg-red-500/20 px-4 py-2 text-sm font-medium text-red-400 transition-colors hover:bg-red-500/30"
            >
              Try again
            </button>
          </div>
        )
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
