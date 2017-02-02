import React, { Component } from 'react'
import { Link } from 'react-router'

class ReportSummary extends Component {
  render() {
    const { report, reportId } = this.props
    const statusColor = 'warning'

    return (
      <Link to={`/reports/${reportId}`} className="list-group-item list-group-item-warning clearfix">
        <h4>
          <span className="glyphicon glyphicon-list-alt"></span>
          {report.title}
          <span className={`label label-${statusColor} pull-right`}>{report.status}</span>
        </h4>
        <div className="col-sm-5">
          <em>
            <strong>0</strong>
            items, totalling
            <strong>0 Le</strong>
          </em>
        </div>
        <div className="col-sm-1"></div>
        <div className="col-sm-6">{report.comment}</div>
      </Link>
    )
  }
}

export default ReportSummary
