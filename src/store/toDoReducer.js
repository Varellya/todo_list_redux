import { createStore } from "redux";

const defaultState = {
    toDoList: []
};

const ADD_ITEM = "ADD_ITEM";
const DELETE_ITEM = "DELETE_ITEM";
const COMPLETE_ITEM = "COMPLETE_ITEM";

const toDoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {...state, toDoList: [...state.toDoList, action.payload]}
      
    case DELETE_ITEM:
      return {...state, toDoList: state.toDoList.filter(item => item.id !== action.payload)}
      
    case COMPLETE_ITEM:
      return {...state, toDoList: state.toDoList.map(item => {
        if (item.id === action.payload) {
          item.completed = !item.completed;
        };
  
        return item;
      })}
      
    default:
      return state;
  };
};

export const addItemAction = (payload) => ({type: ADD_ITEM, payload});
export const delItemAction = (payload) => ({type: DELETE_ITEM, payload});
export const completeItemAction = (payload) => ({type: COMPLETE_ITEM, payload});

export const store = createStore(toDoReducer);
