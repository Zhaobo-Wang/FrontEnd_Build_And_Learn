import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {

  const [loading,setLoading] = useState(true);
  const [jobs,setJobs] = useState([]);
  const [value,setValue] = useState(0);

  const fetchData = async() =>{
    const response = await fetch(url);
    const alljob = await response.json();
    setJobs(alljob);
    setLoading(false);
  }
//写完fetchData后，不要忘记使用 useEffect call this function
  useEffect(() => {
    fetchData()
  },[])

  if(loading){
    return( 
    <div className='loading'>
      <h2>loading...</h2>
    </div>
    )
  }
// 注意index和value之间的关系
  const {order,dates,title,duties,company} = jobs[value];

  return (
  <section className='section'>
    <div className='title'>
      <h2> experience </h2>
      <div className='underline' />
    </div>
    <div className='job-center'>
    <div className='btn-container'>
      {
        jobs.map((item,index)=>{
          return(
          <button key={item.id} className='job-btn' onClick={()=>{setValue(index)}}>{item.company}</button>
          )
        })
      }
    </div>
    <article className = 'job-info'>
      <h3>{title}</h3>
      <h4>{company}</h4>
      <p className='job-date'>{dates}</p>
      {duties.map((duty,index)=>{
        return(
          <div key={index} className='job-desc'>
            <FaAngleDoubleRight className='job-icon'>
            </FaAngleDoubleRight>
            <p>{duty}</p>
          </div>
        )
      })}   
    </article>
    </div>
  </section>

  )
}

export default App
