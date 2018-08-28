import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'

export default class DynamicImport extends Component {
  state = {
    component: null
  }
  componentDidMount () {
    this.props.load()
      .then((component) => {
        this.setState(() => ({
          component: component.default ? component.default : component
        }))
      })
  }
  render() {
    return this.props.children(this.state.component)
  }
}