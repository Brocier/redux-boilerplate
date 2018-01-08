import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPhrase } from '../actions/exampleActions'

class App extends Component {
  state = {
    formValue: ''
  }

  handleChange = (event) => {
    this.setState({ formValue: event.target.value })
  }
  handleButtonPress = () => {
    this.props.addPhrase(this.state.formValue)
  }

  render () {
    return (
      <div className="App">
        React/Redux Boilerplate Up and Running
        <div>
          <input
            type="text"
            placeholder='write something here'
            onChange={this.handleChange}
            value={this.state.formValue}/>
          <button onClick={this.handleButtonPress}>Add a phrase</button>
        </div>

        {this.props.phrases.map((phrase, i) =>
          <p key={i}>{phrase}</p>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    phrases: state.example
  }
}
export default connect(mapStateToProps, { addPhrase })(App)
