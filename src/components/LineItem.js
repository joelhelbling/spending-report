import React, { Component } from 'react'
import { ListGroupItem, ButtonGroup, Button } from 'react-bootstrap'
import humanize from 'humanize-number'

class LineItem extends Component {
  handleEdit = (e) => {
    e.preventDefault()
    const id = this.props.id
    const reportId = this.props.params.reportId
    this.props.editLineItem(reportId, id)
  }
  handleRemove = (e) => {
    e.preventDefault()
    const id = this.props.id
    const reportId = this.props.params.reportId
    this.props.removeLineItem(reportId, id)
  }

  render() {
    const { description, unitCost, quantity } = this.props.lineItem
    return (
      <ListGroupItem className="clearfix">
        <div className="col-sm-1 line-item-controls">
          <ButtonGroup>
            <Button bsStyle="info" className="btn-xs edit" disabled={true}>
              <span className="glyphicon glyphicon-pencil"></span>
            </Button>
            <Button bsStyle="danger" className="btn-xs remove" onClick={this.handleRemove}>
              <span className="glyphicon glyphicon-trash"></span>
            </Button>
          </ButtonGroup>
        </div>
        <div className="col-sm-5 li-description">{description}</div>
        <div className="col-sm-2 li-unit-cost text-right">Le {humanize(unitCost || 0)}</div>
        <div className="col-sm-1 li-quantity text-left">x{humanize(quantity || 0)}</div>
        <div className="col-sm-2 li-total text-right">Le {humanize((unitCost * quantity) || 0)}</div>
      </ListGroupItem>
    )
  }
}

export default LineItem
