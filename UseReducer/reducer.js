import React from "react"

const reducer = (state, action) =>{
  if(action.type === 'ADD_VALUE'){
    const newPeople_list = [...state.people,action.payload]
    return{
      ...state,
      people:newPeople_list,
      isModalOpen:true,
      msg:'add item'
    }
  }
  if(action.type === 'NO_VALUE'){
      return{
          ...state,
          isModalOpen:true,
          msg:'please enter value'
      }
  }
  if(action.type === 'CLOSE'){
    return{
      ...state,
      isModalOpen:false
    }
  }
  if(action.type ==='REMOVE'){
    const newRemove_list = state.people.filter((person) => person.id !== action.payload);
    return{
      ...state,
      people:newRemove_list,
      isModalOpen:true,
      msg:'remove this person'
    }
  }

  throw new Error('no matching action type');
}

export default reducer;