import React, { useState } from 'react';

const Tour = ({id,name,info,image,price,RemoveList}) => {

  const [ReadMore, setReadMore] = useState(false);


  return(

    <section className='single-tour'>

      <img src={image} alt={name} />
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'> ${price} </h4>
        </div>

        

          <p>
            {ReadMore ? info:`${info.substring(0,200)}...`}
            <button onClick={()=>{setReadMore(!ReadMore)}}>
              {ReadMore ? 'Show Less':'Read More'}
            </button>
    
          </p>

          <button className='delete-btn' onClick={()=>{RemoveList(id)}}> Not interest</button>
      </footer>
    </section>
  );

  // readmore/ showless 功能实现

  // not interested 删除用到filter function，外加 props 传参




};

export default Tour;
