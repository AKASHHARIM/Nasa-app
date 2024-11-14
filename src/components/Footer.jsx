import React from 'react'

function Footer(props) {
  const {handleToggleModel, data} = props
  return (
    <footer>
        <div className='bgGradient'></div>
    <div>
        <h2>{data?.title}</h2>
        <h1>Astronomy Picture of the Day</h1>
    </div>
    <button onClick={handleToggleModel}>
    <i class="fa-solid fa-circle-info fa-xl"></i>
    </button>


    </footer>
  )
}

export default Footer