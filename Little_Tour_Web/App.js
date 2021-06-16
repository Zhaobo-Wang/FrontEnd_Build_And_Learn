import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {

  const [IsLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);


  const RemoveList = (id) =>{
    const newPeople = tours.filter((tour) => tour.id !== id);
    setTours(newPeople);
  }


// fetch data 功能

  const FetchData = async() =>{

    try{

      const response = await fetch(url);
      const tours = await response.json();
      setIsLoading(false);
      setTours(tours);

    }catch(error){

      setIsLoading(true);
      console.log('error...');

    }

  }

  useEffect(()=>{

    FetchData();

  },[])
  
  
// multiple returns

  if(IsLoading){
    return(
      <div>
        <Loading />
      </div>
    );
  }

  if(tours.length === 0 ){

    return(
      <div className='title'>
        <h4>No tour left</h4>
        <button className='btn' onClick={()=>{FetchData()}}>refresh</button>
      </div>
    )
  }
//实现了refresh button的功能，重新fetchData

  return (
    <div>
      <Tours tours={tours} RemoveList={RemoveList}/>
    </div>
  );


}

 
export default App
