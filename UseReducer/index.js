import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
import reducer from './reducer';

const defaultSate = {
  people:[],
  isModalOpen: false,
  msg:'',
};


const Index = () =>{
  const [name, setName] = useState('');
  const [state, dispatch] = useReducer(reducer,defaultSate);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(name){
      const newPerson = {id: new Date().getTime().toString(),name}; 
      dispatch({type:'ADD_VALUE',payload:newPerson});
      setName('');
    }else{
      dispatch({type: 'NO_VALUE'});     
    }
  }

  const closeModal = () =>{
    dispatch({type:'CLOSE'});
  }
   
  return (
    <>
      {state.isModalOpen && <Modal content={state.msg} closeModal={closeModal}/>}
      <div className='container'>
        <form className='form' onSubmit = {handleSubmit}>
          <input
          type = 'text'
          name = 'list'
          id = 'list'
          value = {name}
          onChange = {(e) => {setName(e.target.value)}}
          className = 'input'
          />
          <button 
          type = 'submit'
          className = 'btn'
          >
          add person
          </button>
        </form>
      </div>
      <div className='container'>
        {
          state.people.map((person) =>{
            const {id,name} = person;
            return(
              <>
              <div className='item' key={person.id}>
                <h4>{person.name}</h4>
              
              <button
              onClick = {()=>{dispatch({type:'REMOVE',payload:person.id})}}
              >
              remove
              </button>
              </div>
              </>
            )           
          })
        }
      </div>
    </>    
  )
}
export default Index;
