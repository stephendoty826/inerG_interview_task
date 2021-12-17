
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import latLongData from '../assets/latLongData';

function Map() {

  //mapbox API key
  const apiKey = "pk.eyJ1Ijoic3RlcGhlbmRvdHk4MjYiLCJhIjoiY2t4NnE2cWY1Mm15MDJwbzY4aXg1dnRvbiJ9.ZjA9CSq0_bt-fbEtHo1MrA"

  const data = useSelector(state => state.data)
  const [selectedState, setSelectedState] = useState(null)
  const stateData = useSelector(state => state.stateData)

  const [viewport, setViewport] = useState({
    latitude: 38.4,
    longitude: -95.8,
    width: "90vw",
    height: "80vh",
    zoom: 3.88
  })


  useEffect(() => {
    if(stateData !== undefined){
      const markerData = latLongData.filter(stateObj=>stateObj.state === stateData.state)[0]
      if(markerData){
        setViewport({
        latitude: markerData.latitude,
        longitude: markerData.longitude,
        width: "90vw",
        height: "80vh",
        zoom: 6
      })
      }
    }
  }, [stateData])

  useEffect(() => {
    const listener = (e)=>{
      if(e.key === "Escape"){
        setSelectedState(null)
      }
    }
    window.addEventListener("keydown", listener)

    return ()=>{
      window.removeEventListener("keydown", listener)
    }
  }, [])

  return (
    <div className="container-fluid d-flex justify-content-center">
      <ReactMapGL {...viewport} mapboxApiAccessToken={apiKey} onViewportChange={viewport=>{setViewport(viewport)}} mapStyle="mapbox://styles/stephendoty826/ckx6yv1f62q3g14ntv3vdlo8i">
        {latLongData.map(stateObj=>{
          return(
            <Marker key={stateObj.state} longitude={stateObj.longitude} latitude={stateObj.latitude}> 
              <button className="marker-btn" onClick={()=>setSelectedState(stateObj)}>
                <img src="/virus.png" alt="virus icon" />
              </button>
            </Marker>
          )
        })}
        {selectedState 
        ?
          <Popup longitude={selectedState.longitude} latitude={selectedState.latitude} onClose={()=>setSelectedState(null)}>
            <div className="m-2">
              <h3>{data.filter(stateObj=>stateObj.state === selectedState.state)[0].state}</h3>
              <h5>Total Cases: {data.filter(stateObj=>stateObj.state === selectedState.state)[0].cases}</h5>
              <h5>Active Cases: {data.filter(stateObj=>stateObj.state === selectedState.state)[0].active}</h5>
              <h5>Recovered: {data.filter(stateObj=>stateObj.state === selectedState.state)[0].recovered}</h5>
              <h5>Deaths: {data.filter(stateObj=>stateObj.state === selectedState.state)[0].deaths}</h5>
            </div>
          </Popup>
        :
          null
        }
      </ReactMapGL>
    </div>
  )
}

export default Map
