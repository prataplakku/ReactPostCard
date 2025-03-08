import React from 'react'
import {PostProps} from './types/types'

const PostCard = (props: PostProps) => {
  return (
    <div className="PostCard">
        
        <h1>{props.title}</h1>
        <p>{props.body}</p>

    </div>
  )
}

export default PostCard

