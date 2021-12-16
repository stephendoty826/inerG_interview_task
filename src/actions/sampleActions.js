
import { INCREMENT } from "./types"
import axios from "axios"

// !add multiple actions to this file

export const sampleAction = (sampleData) => {
  return {
    type: INCREMENT,
    data: sampleData
  }
}

export const fetchData = () => async (dispatch) => {

  try {
    // make api call to server "https://disease.sh/v3/covid-19/states"

    let results = await axios.get("https://disease.sh/v3/covid-19/states") //data is returned on results.data

    

  } 
  catch(error){
    console.log("an error has occurred", error)
  }
}