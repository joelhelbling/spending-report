import React from 'react'
import { Link } from 'react-router'
import { ListGroup, ListGroupItem, Button } from 'react-bootstrap'
import humanize from 'humanize-number'
import LineItem from './LineItem'
import NewLineItem from './NewLineItem'

class Report extends React.Component {
  reportTotal = (lineItems) => {
    return lineItems.reduce((accumulator, li) => {
      return accumulator + li.unitCost*li.quantity
    }, 0)
  }

  render() {
    const { reports, lineItems, params } = this.props
    const reportId = params.reportId
    const report = reports.filter((report) => report.id === reportId)[0]

    return (
      <div>
        <h2 className="clearfix">
          <span className="label label-warning pull-right">{report.status}</span>
          <span className="glyphicon glyphicon-list-alt"></span>
          &nbsp; {report.title}
        </h2>
        <p>
          {report.comment}
          <Button bsStyle="primary" className="btn-xs edit-report-button" disabled={true}>
            <span className="glyphicon glyphicon-pencil"></span>
          </Button>
          <Button bsStyle="danger" className="btn-xs confirmed-delete" disabled={true}>
            <span className="glyphicon glyphicon-trash"></span>
          </Button>
        </p>
        <ListGroup>
          <ListGroupItem bsStyle="info" className="clearfix">
            <Button bsStyle="success" className="pull-right" disabled={true}>
              <span className="glyphicon glyphicon-cloud-upload"></span>
              &nbsp; Close and send this report
            </Button>
            <h4 className="clearfix">Line Items</h4>
            <div className="col-sm-1">&nbsp;</div>
            <div className="li-header col-sm-5 text-left">Description</div>
            <div className="li-header col-sm-2 text-right">Unit cost</div>
            <div className="li-header col-sm-1">Quantity</div>
            <div className="li-header col-sm-2 text-right">Total</div>
          </ListGroupItem>
          { (lineItems[reportId] || []).map((lineItem, i) => <LineItem lineItem={lineItem} key={i} id={i} />) }
          <ListGroupItem bsStyle="warning" className="clearfix">
            <NewLineItem {...this.props} />
          </ListGroupItem>
          <ListGroupItem bsStyle="info" className="clearfix">
            <div className="col-sm-8">&nbsp;</div>
            <div className="col-sm-1 text-right">
              <strong>Total:</strong>
            </div>
            <div className="col-sm-2 text-right report-total">
              Le { humanize(this.reportTotal(lineItems[reportId])) }
            </div>
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
