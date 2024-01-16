import React from 'react'
import img2 from "../Images/boy_1.png"
import "../Style/List.css"

function List(props) {
    let {key1,img1,name,email,handleClickevent}=props;
  return (
    <li className='list' onClick={()=>handleClickevent(key1)}>
      <a className="dropdown-item " >
        <div className='d-flex'>
        <img src={img2} className='images mx-1' />
        <p className='mx-1'><b>{name}</b></p>
        <p className='mx-1'>{email}</p>
        </div>
      </a>
    </li>
  )
}

export default List
