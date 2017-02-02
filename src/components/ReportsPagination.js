import React, { Component } from 'react'
import { ListGroupItem, ButtonGroup, Button } from 'react-bootstrap'

class ReportsPagination extends Component {
  render() {
    return (
      <ListGroupItem className="pagination clearfix">
        Page &nbsp;
        <ButtonGroup>
          <Button bsStyle="default" disabled={true}>1</Button>
        </ButtonGroup>
        <Button bsStyle="primary" className="pull-right">
          <span className="glyphicon glyphicon-plus-sign"></span>
          &nbsp;
          Add a new report
        </Button>

      </ListGroupItem>
    )
  }
}

export default ReportsPagination
