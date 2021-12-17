
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import ReactMapGL from 'react-map-gl';

function Map() {

  //mapbox apikey
  const apiKey = "pk.eyJ1Ijoic3RlcGhlbmRvdHk4MjYiLCJhIjoiY2t4NnE2cWY1Mm15MDJwbzY4aXg1dnRvbiJ9.ZjA9CSq0_bt-fbEtHo1MrA"

  const data = useSelector(state => state.data)

  const [viewport, setViewport] = useState({
    latitude: 38.4,
    longitude: -95.8,
    width: "90vw",
    height: "80vh",
    zoom: 3.88
  })

  return (
    <div className="container-fluid d-flex justify-content-center">
            <ReactMapGL {...viewport} mapboxApiAccessToken={apiKey} onViewportChange={viewport=>{setViewport(viewport)}} mapStyle="mapbox://styles/stephendoty826/ckx6yv1f62q3g14ntv3vdlo8i">

      </ReactMapGL>
    </div>
  )
}

export default Map
