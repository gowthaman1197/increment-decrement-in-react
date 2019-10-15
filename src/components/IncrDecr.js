import React, { Component } from 'react'

class IncrDecr extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       clicks: 0
    }
  }
  
  // Increment functionality

  IncrementItem = () => {
    this.setState({
      clicks: this.state.clicks + 1
    })
  }

  // Decrement functionality
  DecrementItem = () => {
    if(this.state.clicks === 0){
      this.setState({
        clicks: 0
      })
    }else{
      this.setState({
        clicks: this.state.clicks - 1
      })
    }
  }

  render() {
    return (
      <React.Fragment>
        <h2>{this.state.clicks}</h2>
        <div className="mt-5">
          <button className="btn btn-success mr-2" onClick={this.IncrementItem}>Increment by 1</button>
          <button className="btn btn-primary" onClick={this.DecrementItem}>Decrement By 1</button> 
        </div>
      </React.Fragment>
    )
  }
}

export default IncrDecr;
