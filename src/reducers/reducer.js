
import types from "../actions/types"

const initalState = {
    data: [],
    stateData: {}
}

const reducer = (state=initalState, action) => {

  switch(action.type){
    case types.FETCH_DATA:

      return{
        ...state,
        data: action.data
      }
    case types.GET_STATE_DATA:

      return{
        ...state,
        stateData: state.data.filter(stateObj=>stateObj.state === action.stateName)[0]
      }
    default:
      return state
  }
}

export default reducer