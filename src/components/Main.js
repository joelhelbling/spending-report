import React from 'react'
import { Link } from 'react-router'

const Main = React.createClass({
  render() {
    return (
      <div className="container">
        <h1 className="title">
          <Link to="/reports">
            <span id="app-icon" className="glyphicon glyphicon-list"></span>
            <span id="app-title">spending-reports</span>
          </Link>
        </h1>
        <hr />
        { React.cloneElement(this.props.children, this.props) }
      </div>
    )
  }
})

export default Main
