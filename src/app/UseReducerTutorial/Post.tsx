'use client'
import React, {useState, useReducer} from 'react'
import { INITIAL_STATE, postReducer, ACTION_TYPES } from './PostReducer'

//Below is the code with six setState statements when Use reducer is not used
// const Post = () => {
//     const [loading, setLoading] = useState(false)
//     const [post, setPost] = useState({})
//     const [error, setError] = useState(false)

//     const handleFetch = ()=> {
//         setLoading(true)
//         setError(false)

//         fetch("https://jsonplaceholder.typicode.com/posts/1")
//         .then((res)=> {
//             return res.json();
//         })
//         .then((data) => {
//             setPost(data)
//             setLoading(false)
//         })
//         .catch((err) => {
//             setError(true)
//             setLoading(false)
//         });
//     }

//   return (
//     <div>
//         <button onClick={handleFetch}> 
//             {loading? "Wait..": "Fetch the Post"}
//         </button>
//         <p>
//             {post?.title}
//         </p>
//         <span>
//             {error && "Something Went Wrong!"}
//         </span>
//     </div>
//   )
// }

//Using useReducer
const Post = () => {
    const [state, dispatch] = useReducer(postReducer, INITIAL_STATE);
    const handleFetch = () => {
        dispatch({type: ACTION_TYPES.FETCH_START})
        fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((res)=> {
            return res.json();
        })
        .then((data)=> {
            dispatch({type: ACTION_TYPES.FETCH_SUCCESS, payload: data})
        })
        .catch((err)=> {
            dispatch({type:ACTION_TYPES.FETCH_ERROR})
        })
    }
    return(
        <div> 
            <button onClick={handleFetch}>
                {state.loading ? "wait..": "Fetch The Post"}
            </button>
            <p> {state.post?.title} </p>
            <span> 
                {state.error && "Something Went Wrong"}
            </span>

        </div>
    )
}

export default Post
