import React from 'react'
import { Link } from 'react-router'
import { Button } from 'react-bootstrap'

const Main = React.createClass({
  render() {
    return (
      <div className="container">
        <h1 className="title">
          <Link to="/">
            <span id="app-icon" className="glyphicon glyphicon-list"></span>
            <span id="app-title">_spending_reports</span>
          </Link>
        </h1>
        <hr />
        { React.cloneElement(this.props.children, this.props) }
        <Button bsStyle="success">A Button</Button>
      </div>
    )
  }
})

export default Main
