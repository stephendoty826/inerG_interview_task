
import React from 'react'

function App() {

  const mapboxApiAccessToken=process.env.REACT

  return (
    <div className="container d-flex text-center align-items-center flex-column">
      <h1 className="p-3 bg-light">This simple application uses an API to show COVID-19 data in the United States.</h1>
      <h3 className="mt-4">Use the navigation bar above to view the bar chart, pie chart, or map of the US.</h3>
    </div>
  )
}

export default App
