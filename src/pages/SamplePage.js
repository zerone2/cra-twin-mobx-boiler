import React from 'react'
import { useHistory } from 'react-router-dom'

const SamplePage = () => {
  const history = useHistory()
  return (
    <div className='App'>
      <h1>React Sample Page</h1>
      <h3>url = {history.location.pathname}</h3>
    </div>
  )
}

export default SamplePage
