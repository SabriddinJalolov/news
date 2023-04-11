import React from 'react'

const NewsPost = ({newsOBJ}) => {
  return (
    <div style={{background: "#F1F0F0"}} className='row h-100 d-flex align-items-center'>
      <div className="col-4">
        <img width='100px' src={newsOBJ?.image_url} alt="" />
      </div>
      <div className="col-7">
        <p style={{color: "#04594D"}}>{newsOBJ?.title}</p>
      </div>
    </div>
  )
}

export default NewsPost
