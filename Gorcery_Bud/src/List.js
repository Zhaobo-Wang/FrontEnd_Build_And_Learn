import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({newlist,deleteItem,editItem}) => {

  return(
    <div className='grocery-list'>
    {
      newlist.map((item)=>{
        const {id,title} = item;
        return(
          <div className='grocery-item' key={id}>
            <p className='title'>{title}</p>
            <div className = 'btn-container'>
            <button className='edit-btn' onClick={()=>editItem(id) }><FaEdit /></button>
            <button className='delete-btn' onClick={()=>{deleteItem(id)}}><FaTrash /></button>
            </div>
          </div>
        )
      })
    }
    </div>
  )

  
}

export default List
