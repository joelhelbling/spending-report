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

export function removeLineItem(reportId, lineItemId) {
  return {
    type: 'REMOVE_LINE_ITEM',
    reportId,
    lineItemId
  }
}

export function editLineItem(reportId, lineItemId) {
  return {
    type: 'EDIT_LINE_ITEM',
    reportId,
    lineItemId
  }
}

export function updateLineItem(reportId, lineItemId, lineItem) {
  return {
    type: 'UPDATE_LINE_ITEM',
    reportId,
    lineItemId,
    lineItem
  }
}
