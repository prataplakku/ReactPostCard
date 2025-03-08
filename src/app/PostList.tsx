import React from 'react'
import PostCard from './PostCard'
import {PostProps} from './types/types'

async function getData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    if(!res.ok){
        throw new Error("Failed to fetch Data")
    }
    return res.json();
}

const PostList = async () => {
    const handleClick = () => {

    }
    const data : PostProps[] = await getData()
    return (
        <div className="PostList">
            <input type='text' placeholder='Search for Anything' />
            <button>Search</button>
            <div>
                {data.map((post: PostProps) => (
                    <PostCard key = {post.id} {...post} />
                ))}
            </div>
            
        </div>
    )
}

export default PostList