import React from 'react';

const List = ({people}) => {
  return (
    <>
      <h2>list component</h2>
      {people.map((person)=>{
        
        const {id, name, age, img} = person;

        return (

          <div key = {id} className='person'>
            <img src={img} alt={name}></img>
        
            <h6>{name}</h6>

            <p>{age} year</p>

          </div>

        )
     })}

    </>
  );
};

export default List;
