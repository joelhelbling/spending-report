import React from 'react'
import ReportsCollection from './ReportsCollection'
import ReportsPagination from './ReportsPagination'

class Reports extends React.Component {
  render() {
    return (
      <div>
        <ReportsCollection reports={this.props.reports} />
        <ReportsPagination />
      </div>
    )
  }
}

export default Reports
