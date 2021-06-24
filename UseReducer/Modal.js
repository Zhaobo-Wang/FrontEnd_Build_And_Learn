import React, { useEffect } from 'react';

const Modal = ({content,closeModal}) => {
  useEffect(() =>{
    const timeout = setTimeout(()=>{
      closeModal()
    },3000)
    return ()=>clearTimeout(timeout)
  },[])
  return (<div className='modal'>
    <p>{content}</p>
    </div>);
};

export default Modal;
