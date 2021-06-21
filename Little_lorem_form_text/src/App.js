import React, { useState } from 'react';
import data from './data';
function App() {

  const [count, setCount] = useState();
  const [text, setText] = useState([]);
// slice(0,amount) 节选重要的部分
  const handleSubmit = (e) =>{
    e.preventDefault();
    let amount = parseInt(count);
    return setText(data.slice(0,amount)); 
  }

  return (
    <section className='section-center'>
      <h3> is this lorem form? </h3>
      <form className='lorem-form' onSubmit={handleSubmit}> 
        <label htmlFor='count'>paragraph</label>
        <input 
        type='number'
        name='count'
        id='count'
        value = {count}
        onChange = {(e)=>{setCount(e.target.value)}}
        />
        <button className='btn' type='submit'>generate</button>
      </form>
      <div className='result'>
    {
      text.map((item,index)=>{
        return(
          <p key={index}>{item}</p>

        )})
    }
      </div>

    </section>

    )
}
//input 核心 五元素： type / name / id / value / onChange
//onChange{(e) => setCount(e.target.value)}
//form核心拆解：
// input -> onChange(value) -> button(submit)
export default App;
