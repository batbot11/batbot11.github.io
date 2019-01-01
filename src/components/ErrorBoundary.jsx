import React from "react";

class ErrorBoundary extends React.Component {
    state = {
        hasError: false
    }
    componentDidCatch() {
        this.setState({
            hasError: true
        })
    }

    render() {
       return(
           (this.state.hasError)? <h1>Ooops! That's Not Good</h1> :
           this.props.children
       );
    }
}



export default ErrorBoundary