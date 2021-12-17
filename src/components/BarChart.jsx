
import React from 'react'
import { useSelector } from "react-redux"
import Plot from "react-plotly.js"

function BarChart() {

  const stateData = useSelector(state => state.stateData)

  return (
    <div className="container bg-light d-flex justify-content-center">
      {stateData !== undefined
      ?
      <Plot 
        data={[
          {
            type: "bar",
            x: ["Total Cases", "Active Cases", "Recovered", "Deaths"],
            y: [stateData.cases, stateData.active, stateData.recovered, stateData.deaths],
            marker: {color: ["#e9c46a", "#0096c7", "#2a9d8f", "#e07a5f" ]}
          }
        ]}
        layout={{width: 1000, height: 650, title: `COVID-19 data for: ${stateData.state}`}}
      />
      :
      <h2>Make a selection above and click on "Update Data".</h2>
      }
    </div>
  )
}

export default BarChart
