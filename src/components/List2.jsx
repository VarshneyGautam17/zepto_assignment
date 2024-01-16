import React from 'react'
import img2 from "../Images/boy_1.png"
import "../Style/List2.css"

function List2(props) {
    let {key1,img1,name,email,handlefunction}=props;
  return (
    <div className='chip'>
        <div className='d-flex justify-content-between'>
        <img src={img2} className='images mx-1' />
        <p className='m-0 p-0'><b>{name}</b></p>
        <p className='m-0 p-0'>{email}</p>
        <button className='btn btn-sm btn-secondary m-0' style={{borderRadius:"50%"}} onClick={()=>handlefunction(key1)}>X</button>
        </div>
    </div>
  )
}

export default List2
