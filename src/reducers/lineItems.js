function lineItems(state = {}, action) {
  switch(action.type) {
    case 'ADD_LINE_ITEM' :
      const newState = {...state}
      newState[action.reportId] = newState[action.reportId] || []
      newState[action.reportId].push( action.lineItem )
      return newState;
    default:
      return state;
  }
}

export default lineItems
