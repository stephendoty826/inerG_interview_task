
import React, { useEffect } from 'react'
import Header from './Header'
import { useDispatch, useSelector } from "react-redux"
import { fetchData } from '../../actions/sampleActions'

function BaseLayout({children}) {

  const dispatch = useDispatch()
  const data = useSelector(state => state.data)

  useEffect(() => {

    dispatch(fetchData())

  }, [])

  if(data !== undefined){
    data.sort((a, b)=>{
      let stateA = a.state.toLowerCase()
      let stateB = b.state.toLowerCase()
      if(stateA < stateB){
        return -1
      }
      else if(stateA > stateB){  
        return 1
      }
      else{
        return 0
      }
    })
  }

  return (
    <>
      <Header data={data}/>

      <br />

      {children}
    </>
  )
}

export default BaseLayout
