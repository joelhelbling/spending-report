import React, { Component } from 'react'
import { ListGroup } from 'react-bootstrap'
import ReportSummary from './ReportSummary'

class ReportsCollection extends Component {
  render() {
    const { reports } = this.props
    const keys = Object.keys(reports)

    return (
      <ListGroup>
        {
          keys.map((key) => <ReportSummary report={reports[key]} key={key} reportId={key} />)
        }
      </ListGroup>
    )
  }
}

export default ReportsCollection
