import React from 'react'
import { Link } from 'react-router'
import { ListGroup, ListGroupItem, Button } from 'react-bootstrap'

class Report extends React.Component {
  render() {
    const {reports, params} = this.props
    const reportId = params.reportId
    const report = reports[reportId]

    return (
      <div>
        <span className="label label-warning pull-right">{report.status}</span>
        <h2 className="clearfix">
          <span className="glyphicon glyphicon-list-alt"></span>
          &nbsp; {report.title}
        </h2>
        <p>
          {report.comment}
          <Button bsStyle="info" className="btn-xs edit-report-button">
            <span className="glyphicon glyphicon-pencil"></span>
          </Button>
          <Button bsStyle="danger" className="btn-xs confirmed-delete">
            <span className="glyphicon glyphicon-trash"></span>
          </Button>
        </p>
        <ListGroup>
          <ListGroupItem bsStyle="info" className="clearfix">
            <Button bsStyle="success" className="pull-right">
              <span className="glyphicon glyphicon-cloud-upload"></span>
              &nbsp; Close and send this report
            </Button>
            <h4>Line Items</h4>
            <div className="col-sm-1">&nbsp;</div>
            <div className="li-header col-sm-5 text-left">Description</div>
            <div className="li-header col-sm-2 text-right">Unit cost</div>
            <div className="li-header col-sm-1">Quantity</div>
            <div className="li-header col-sm-2">Total</div>
          </ListGroupItem>
          <ListGroupItem className="clearfix">
            <em>There are no items in this report.  Add items below.</em>
          </ListGroupItem>
          <ListGroupItem bsStyle="info" className="clearfix">
            <div className="col-sm-8">&nbsp;</div>
            <div className="col-sm-1 text-right">
              <strong>Total:</strong>
            </div>
            <div className="col-sm-2 text-right">Le 100,000</div>
          </ListGroupItem>
          <ListGroupItem bsStyle="warning" className="clearfix">
            List Item Form
          </ListGroupItem>
        </ListGroup>
        <Link to="/reports" className="pull-left">
          <span className="glyphicon glyphicon-chevron-left"></span>
          &nbsp; Return to All Reports
        </Link>
      </div>
    )
  }
}

export default Report
