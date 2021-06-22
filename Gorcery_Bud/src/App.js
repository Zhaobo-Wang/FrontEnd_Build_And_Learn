import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'
import { FaClipboardCheck } from 'react-icons/fa';

function App() {

  const [alert,setAlert] = useState({show:false,msg:'',type:''})
  const [name, setName] = useState('');
  const [isEditing,setIsEditing] = useState(false);
  const [list, setList] = useState([]);
  const [EditId, setEditId] = useState(null);

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(name === ''){
      showAlert(true,'please enter an value','danger');
    }else if (name && isEditing){

        setList(list.map((item) =>{
            
          if(item.id === EditId){
              
            return {...item,title:name}
//注意：这里的return 只变化 该matching id 的 title 名字            
          }
          return item;

          })
        );
        setIsEditing(false);
        setEditId(null);
        setName('');
        showAlert(true, 'value changed', 'success');    

    }else{
      const newItem = {id: new Date().getTime().toString(), title: name};
// 创建新的item object，并且把它们加到空的list当中
      setList([...list,newItem]); 
      showAlert(true,`add ${name} to the list`,'success');
    }
  }

  const showAlert = (show=false,msg='',type='') =>{
    setAlert({show,msg,type});
  }

  const clearItems = () =>{
    setList([]);
    showAlert(true,'clear all items','danger');
  }

  const deleteItem = (id) =>{
    const newList = list.filter((item)=>item.id !== id);
    setList(newList);
    showAlert(true,'clear this item','danger');
  }

  const editItem = (id) =>{

    const specificItem = list.find((item) => item.id === id);
    setName(specificItem.title);
    setAlert(true,'edit this item','success');
    setEditId(id);
    setIsEditing(true);

  }

  return(
    <>
    <section className='section-center'>
      {alert.show && <Alert msg={alert.msg} type={alert.type} remove={showAlert}/>} 
      <div className='grocery-form'>
        <h3> grocery bud </h3>
        <form className='form-control' onSubmit={handleSubmit}>
          <input
          type='text'
          name ='name'
          id = 'name'
          value = {name}
          onChange = {(e)=>{setName(e.target.value)}}
          className = 'grocery'
          placeholder = 'e.g. eggs'
          />
          <button
          className = 'submit-btn'
          >
          {isEditing?'edit':'add'}
          </button>
        </form>
      </div>
      <div className='grocery-container'>
        <List newlist = {list} deleteItem={deleteItem} editItem={editItem}/>
        <button type='button' className='clear-btn' onClick={()=>{clearItems()}}>clear all</button>
      </div>
    </section>
    </>
  )

}

export default App
