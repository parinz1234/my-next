import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { incrementCount, decrementCount, resetCount } from '../store'

class Counter extends Component {
  increment = () => {
    // const {dispatch} = this.props
    // dispatch(incrementCount())
    this.props.incrementCount()
  }

  decrement = () => {
    // const {dispatch} = this.props
    // dispatch(decrementCount())
    this.props.decrementCount()
  }

  reset = () => {
    // const {dispatch} = this.props
    // dispatch(resetCount())
    this.props.resetCount()
  }

  render () {
    const { count } = this.props
    return (
      <div>
        <h1>Count: <span>{count}</span></h1>
        <button onClick={this.increment}>+1</button>
        <button onClick={this.decrement}>-1</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    )
  }
}

function mapStateToProps (state) {
  const {count} = state
  return {count}
}

const mapDispatchToProps = dispatch => {
  return {
    incrementCount: bindActionCreators(incrementCount, dispatch),
    decrementCount: bindActionCreators(decrementCount, dispatch),
    resetCount: bindActionCreators(resetCount, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)