import React, { Component } from 'react'
import { ListGroupItem } from 'react-bootstrap'
import humanize from 'humanize-number'

class LineItem extends Component {
  render() {
    console.log(JSON.stringify(this.props, null, 2))
    const { description, unitCost, quantity } = this.props.lineItem
    return (
      <ListGroupItem className="clearfix">
        <div className="col-sm-1">buttons</div>
        <div className="col-sm-5 li-description">{description}</div>
        <div className="col-sm-2 li-unit-cost text-right">Le {humanize(unitCost)}</div>
        <div className="col-sm-1 li-quantity text-left">x{quantity}</div>
        <div className="col-sm-2 li-total text-right">Le {humanize(unitCost * quantity)}</div>
      </ListGroupItem>
    )
  }
}

export default LineItem
