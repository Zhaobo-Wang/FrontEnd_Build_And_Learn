import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people,setPeople] = useState(data);
  return (
    <div className='container'>      
      <h3> {people.length} people is today ! </h3>
      <List people={people} />
      <button onClick ={ () =>{setPeople([])}}>clear all</button>
    </div>
  ) 
}

export default App;
