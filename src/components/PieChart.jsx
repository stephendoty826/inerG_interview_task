
import React from 'react'
import { useSelector } from 'react-redux'
import Plot from "react-plotly.js"

function PieChart() {

  const stateData = useSelector(state => state.stateData)

  return (
    <div className="container bg-light d-flex justify-content-center">
      {stateData !== undefined
      ?
      <Plot 
        data={[
          {
            type: "pie",
            labels: ["Total Cases", "Active Cases", "Recovered", "Deaths"],
            values: [stateData.cases, stateData.active, stateData.recovered, stateData.deaths],
            marker: {colors: ["#e9c46a", "#0096c7", "#2a9d8f", "#e07a5f" ]}
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

export default PieChart
