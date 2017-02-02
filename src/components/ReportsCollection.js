import React, { Component } from 'react'
import ReportSummary from './ReportSummary'

class ReportsCollection extends Component {
  render() {
    const { reports } = this.props
    const keys = Object.keys(reports)

    return (
      <div className="list-group">
        {
          keys.map((key) => <ReportSummary report={reports[key]} key={key} reportId={key} />)
        }
      </div>
    )
  }
}

export default ReportsCollection
