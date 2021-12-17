
import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import { getStateData } from '../../actions/sampleActions'
import Button from 'react-bootstrap/Button';

function Header({data}) {

  const dispatch = useDispatch()
  const [stateName, setStateName] = useState("")
  const stateData = useSelector(state => state.stateData)

  console.log("stateData", stateData);

  console.log("data", data);

  const handleSubmit = (e) => {
    
    e.preventDefault()

    dispatch(getStateData(stateName))

  }

  return (
    <>
      <div className="container d-flex justify-content-center mt-4">
        <Link className="mx-3" to="/"><h3>Home Page</h3></Link>
        <Link className="mx-3" to="/bar-chart"><h3>Bar Chart</h3></Link>
        <Link className="mx-3" to="/pie-chart"><h3>Pie Chart</h3></Link>
        <Link className="mx-3" to="/map"><h3>Map</h3></Link>
      </div>
      <div className="container d-flex align-items-center flex-column">
        <form onSubmit={handleSubmit}>
          <select className="me-3" value={stateName} onChange={(e)=>setStateName(e.target.value)}>
            <option hidden value="defaultValue">Select a State/Province</option>
            {data && data.map((stateObj, i)=>{
              return <option key={i} value={stateObj.state}>{stateObj.state}</option>
            })}
          </select>
          <Button variant="info" type="submit" className="me-3">
            Update Data
          </Button>
        </form>
      </div>
    </>
  )
}

export default Header
