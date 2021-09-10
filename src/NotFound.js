import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='not-found'>
      <h2>Sorry</h2>
      <h4>That page cannot be found</h4>
      <br></br>
      <Link to='/'>Back to the homepage...</Link>
    </div>
  )
}

export default NotFound
