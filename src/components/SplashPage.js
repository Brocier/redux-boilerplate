import React, {Component} from 'react'
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import {addPhrase} from '../actions/example.actions.js'

class SplashPage extends Component {
  state = {
    formValue: '',
    otherFormValue: ''
  }

  handleChange = (event) => {
    this.setState({formValue: event.target.value})
  }
  handleButtonPress = () => {
    this
      .props
      .addPhrase(this.state.formValue)
  }

  render() {
    return (
      <div>
        <h1>Welcome to Redux</h1>

        <div>
          <input
            type="text"
            placeholder='write something here'
            onChange={this.handleChange}
            value={this.state.formValue}/>
          <button onClick={this.handleButtonPress}>Add a phrase</button>
        </div>

        {this
          .props
          .banana
          .map((phrase, i) => <p key={i}>{phrase}</p>)}

        <button type='button' onClick={() => this.props.push('/users')}>
          Go to UserPage.js
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {banana: state.example}
}

export default connect(mapStateToProps, {push, addPhrase})(SplashPage)