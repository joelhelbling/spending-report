import React, { Component } from 'react'
import { FormGroup, Button } from 'react-bootstrap'

class LineItemForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
    const { reportId } = this.props.params
    const { descriptionInput, unitCostInput, quantityInput } = this.refs
    const description = descriptionInput.value
    const [ unitCost, quantity ] =
      [ unitCostInput, quantityInput ]
        .map((input) => Number.parseFloat(input.value || 1, 10))

    this.props.addLineItem(reportId, {
      description,
      unitCost,
      quantity,
    })

    this.refs.form.reset()
    this.refs.descriptionInput.focus()
  }

  render() {
    const { description, unitCost, quantity } = this.props
    return (
      <form ref="form" className="line-item-form" onSubmit={this.handleSubmit}>
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
              <span className="glyphicon glyphicon-plus-sign"></span>
              &nbsp; Add
            </Button>
          </div>
        </FormGroup>
      </form>
    )
  }
}

export default LineItemForm
