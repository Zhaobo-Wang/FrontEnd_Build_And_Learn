import React, { useEffect } from 'react'

const Alert = ({msg,type,remove}) => {
useEffect(()=>{
    const timeout = setTimeout(()=>{
        remove()
    },3000)
    return ()=> clearTimeout(timeout)
},[])
  return(
    <div className='alert'>
      <div className={`alert-${type}`}>
        {msg}
      </div>
    </div>
  )
}

export default Alert
