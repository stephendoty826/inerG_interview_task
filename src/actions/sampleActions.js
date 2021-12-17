
import types from "./types"
import axios from "axios"

export const fetchData = () => async (dispatch) => {

  try {
    // make api call to server "https://disease.sh/v3/covid-19/states"
    let results = await axios.get("https://disease.sh/v3/covid-19/states") //data is returned on results.data

    // store data in global state
    dispatch({
      type: types.FETCH_DATA,
      data: results.data
    })

  } 
  catch(error){
    console.log("an error has occurred", error)
  }
}

export const getStateData = (stateName) => {
  return{
    type: types.GET_STATE_DATA,
    stateName: stateName
  }
}
