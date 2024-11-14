import React from 'react'

function Sidebar(props) {
  const {handleToggleModel,data} = props
  return (
    <div className='sidebar'>
      <div onClick={handleToggleModel} className='bgOverlay'></div>
      <div className='sidebarContents'>
        <h1>{data?.title}</h1>
        <div className='descriptionContainer'>
        <h2 className='descriptionTitle'>{data?.date}</h2>
        <p>{data?.explanation}</p>
        <p>Copyright: {data?.copyright}</p>
        
        </div>
        <button onClick={handleToggleModel}>
        <i className="fa-solid fa-arrow-right fa-xl"></i>
        </button>
        </div>
    </div>
  )
}

export default Sidebar