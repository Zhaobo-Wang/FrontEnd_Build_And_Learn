import React from 'react';
import Tour from './Tour';
const Tours = ({tours, RemoveList}) => {

  return(
    <>
      <div className='title'>
        <h3> Those places that we want to go</h3>
        <div className='underline'></div>
      </div>
      <div>
        {tours.map((tour)=>{
          return <Tour key={tour.id} {...tour} RemoveList={RemoveList}/>
        })}
      </div>
    </>
  )
  // map function 渲染每一个item

 
};

export default Tours;
