import React from 'react'


function Main(props) {
  const {data}=props
  return (
    <div className='imgContainer'>
        <img className='bgImage' src={data?.hdurl} alt={data?.title || "Mars"} />
    </div>
  )
}

export default Main