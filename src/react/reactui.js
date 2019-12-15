'use strict'
import React from 'react'
// import ReactDOM from 'react-dom'

class Demo extends React.PureComponent {
  static defaultProps = {
    title: 'This is a demo',
    value: 0
  }

  constructor(props) {
    super(props)
    const { title, value } = props
    this.state = {
      title,
      value
    }
  }

  add = () => {
    this.setState({
      value: this.state.value + 1
    })
  }

  change = ev => {
    this.setState({
      value: ev.target.value
    })
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { title } = nextProps
    // 当传入的type发生变化的时候，更新state
    if (title !== prevState.title) {
      return {
        title
      }
    }
    // 否则，对于state不进行任何操作
    return null
  }

  render() {
    return (
      <div className="container">
        <h1>{this.state.title}</h1>
        <div className="counter">{this.state.value}</div>
        <input value={this.state.value} onChange={this.change} />
        <button onClick={this.add}>Value ++</button>
      </div>
    )
  }
}

export default Demo
