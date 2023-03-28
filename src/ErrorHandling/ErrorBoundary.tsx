import React, { Component, ReactNode } from 'react'


// let url = "https://dicitonary-app.web.app" 

type ErrorProps = {
    children: ReactNode
}

export class ErrorBoundary extends Component<ErrorProps, {error: Error | null}> {
    constructor(props: ErrorProps) {
      super(props);
      this.state = { 
        error: null,
     };
    }
  
    componentDidCatch(error: Error, errorInfo: any) {
      //Logging the error to an error reporting service
      console.log({error, errorInfo});
    }

    static getDerivedStateFromError(error: Error) {
      // Updating the state for the next render to show the fallback UI.
      return { error };
    }
  
  
    render() {
      if (this.state.error) {
        // returning the fallback UI
        return (
          <div className='errorbound'>
            <h1 style={{textAlign: "center", marginTop: "13rem", color: "red"}}>Something went wrong.</h1>
            <p style={{textAlign: "center",color: "#232323",fontWeight: 500, fontSize: "25px"}}>Please reload the page!</p>
            {/* <p style={{textAlign: "center"}}><a href={url}>My Pocket Dictionary</a></p> */}
          </div>
        )
      }
  
      return this.props.children; 
    }
  }


export default ErrorBoundary