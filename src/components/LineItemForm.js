import React, { Component } from 'react'
import { ListGroupItem, FormGroup, Button } from 'react-bootstrap'

class LineItemForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
    const { reportId } = this.props.params
    const { descriptionInput, unitCostInput, quantityInput, lineItemIdInput } = this.refs
    const description = descriptionInput.value
    const [ unitCost, quantity ] =
      [ unitCostInput, quantityInput ]
        .map((input) => Number.parseFloat(input.value || 1, 10))

    // TODO: fix default unitCost (should be zero, maybe?)
    // TODO: fix lineItemId
    if (lineItemIdInput) {
      this.props.updateLineItem(reportId, lineItemIdInput.value, {
        description,
        unitCost,
        quantity
      })
    } else {
      this.props.addLineItem(reportId, {
        description,
        unitCost,
        quantity,
      })
    }

    this.refs.form.reset()
    this.refs.descriptionInput.focus()
  }

  render() {
    const lineItemId = this.props.id
    const { description, unitCost, quantity } = this.props.lineItem || {}
    const buttonIcon = typeof(lineItemId) !== 'undefined' ? 'pencil' : 'plus-sign'
    const buttonText = typeof(lineItemId) !== 'undefined' ? 'Update' : 'Add'
    return (
      <ListGroupItem bsStyle="warning" className="clearfix">
        <form ref="form" className="line-item-form" onSubmit={this.handleSubmit}>
          { (typeof(lineItemId) === 'undefined') ||
            <input type="hidden" ref="lineItemIdInput" defaultValue={lineItemId} />
          }
          <FormGroup className="line-item-form">
            <div className="input-group col-sm-6 pull-left">
              <input
                ref="descriptionInput"
                defaultValue={description}
                placeholder="description"
                type="text"
                className="form-control"
              />
            </div>
            <div className="col-sm-2">
              <div className="input-group">
                <span className="input-group-addon">Le</span>
                <input
                  ref="unitCostInput"
                  defaultValue={unitCost}
                  placeholder="0"
                  type="text"
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-sm-2">
              <div className="input-group">
                <span className="input-group-addon">Qty</span>
                <input
                  ref="quantityInput"
                  defaultValue={quantity}
                  placeholder="1"
                  type="text"
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-sm-2">
              <input type="submit" hidden />
              <Button
                disabled={false}
                bsStyle="default"
                className="add-line-item"
                onClick={this.handleSubmit}
              >
                <span className={`glyphicon glyphicon-${buttonIcon}`}></span>
                &nbsp; {buttonText}
              </Button>
            </div>
          </FormGroup>
        </form>
      </ListGroupItem>
    )
  }
}

export default LineItemForm
