export function addReport(report) {
  return {
    type: 'ADD_REPORT',
    report
  }
}

export function addLineItem(reportId, lineItem) {
  return {
    type: 'ADD_LINE_ITEM',
    reportId,
    lineItem
  }
}
