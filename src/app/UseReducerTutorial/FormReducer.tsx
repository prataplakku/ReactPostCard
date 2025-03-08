import { act } from "react";

export const INITIAL_STATE = {
  title:"",
  desc:"",
  price:0,
  category:"",
  tags: [],
  images:{
      sm:"",
      md:"",
      lg:""
  },
  quantity: 0,
}

export const ACTION_TYPES = {
  CHANGE_INPUT: "CHANGE_INPUT",
  ADD_TAG: "ADD_TAG",
  REMOVE_TAG: "REMOVE_TAG",
  DECREASE: "DECREASE",
  INCREASE: "INCREASE"
}

export const FormReducer = (state, action){
  switch(action.type){
    case "CHANGE_INPUT":
    return{
      ...state,
      [action.payload.name]:action.payload.value
    };
    case "ADD_TAG":
      return{}
    case "REMOVE_TAG":
      return{}
    case "DECREASE":
      return{
        ...state,
        quantity = state.quantity -1
      }
    case "INCREASE":
      return{
        ...state,
        quantity = state.quantity + 1
      }
    default:
      return state;
  }
};