function reports(state = {}, action) {
  let newState;

  switch(action.type) {
    case 'EDIT_LINE_ITEM' :
      newState = [...state]

      return newState.map((report) => {
        if (report.id === action.reportId) {
          report._editing = action.lineItemId
        }

        return report
      })
    case 'UPDATE_LINE_ITEM' :
      newState = [...state]

      return newState.map((report) => {
        if (report.id === action.reportId) {
          delete(report._editing)
        }

        return report
      })
    default:
      return state
  }
}

export default reports
