function lineItems(state = {}, action) {
  let newState;
  switch(action.type) {
    case 'ADD_LINE_ITEM' :
      newState = {...state}

      newState[action.reportId] = newState[action.reportId] || []
      newState[action.reportId].push( action.lineItem )

      return newState
    case 'REMOVE_LINE_ITEM' :
      newState = {...state}

      delete(newState[action.reportId][action.lineItemId])

      return newState
    default:
      return state;
  }
}

export default lineItems
