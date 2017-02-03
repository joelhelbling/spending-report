import React from 'react'
import { Link } from 'react-router'
import { ListGroup, ListGroupItem, Button } from 'react-bootstrap'
import LineItem from './LineItem'

class Report extends React.Component {

  lineItems = (reportId) => {
    const report = this.props.reports[reportId]
    console.log(JSON.stringify(report.lineItems, null, 2))
    if (report.lineItems.length > 0) {
      return report.lineItems.map((lineItem, i) => {
        <LineItem
          lineItem={lineItem}
          key={`${reportId}-lineItem-${i}`}
        />
      })
    } else {
      return (
        <ListGroupItem className="clearfix">
          <em>There are no items in this report.  Add items below.</em>
        </ListGroupItem>
      )
    }
  }

  render() {
    const {reports, params} = this.props
    const reportId = params.reportId
    const report = reports[reportId]

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
          { report.lineItems.map((lineItem, i) => <LineItem lineItem={lineItem} key={i} id={i} />) }
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
