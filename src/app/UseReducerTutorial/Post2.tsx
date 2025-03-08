'use client'
import React, {useReducer, useState} from 'react'
import { ACTION_TYPES, INITIAL_STATE, FormReducer } from './FormReducer'
const Post2 = () => {
    const [state, dispatch] = useReducer(FormReducer, INITIAL_STATE)
    const handleInput = (e) => {
        dispatch({type:ACTION_TYPES.CHANGE_INPUT, payload:{name:e.target.name, value: e.target.value} })
    }
    
  return (
    <div>
        <form>
            <input 
            type = "text" 
            placeholder="Title"
            name='title'
            onChange= {handleInput}
            />
            <input type = "text" placeholder='Desc'
            name='desc' onChange={handleInput}
            />
            <input type = "text" placeholder='Price'
            name='price' onChange={handleInput}
            />
            <p>Category</p>
            <select name = 'category'>
                <option value = "sneakers"> Sneakers</option>
                <option value = "t-thirts"> T - Shirts</option>
                <option value = "jeans"> Jeans </option>
            </select>
            <p> Tags:</p>
            <input type = "text" placeholder='Seperate tags with commas..' 
            />
            <button>Add Tags</button>
            <div>
                <button onClick={()=> {dispatch({type:ACTION_TYPES.DECREASE })}}> - </button>
                <p>Quantity ({state.quantity})</p>
                <button onClick = {()=> {dispatch({type:ACTION_TYPES.INCREASE})}}> + </button>
            </div>
        </form>
    </div>
  )
}

export default Post2