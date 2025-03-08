"use client";
import React, {useState} from 'react'

type UserType = {
    sessionId: number, 
    name: string
}

const Login = () => {
    const [username, setUsername] = useState("")
    const [user, setUser] = useState<UserType | null>(null)

    const handleClick = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setUser({
            name:username,
            sessionId: Math.random()
        })
        console.log(user)
    }

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value)
    }


  return (
    <div>
        {user? (`${user.name} logged in`):(
        <form>
            <input type="text" placeholder = "username" onChange={handleChange}  />
            <button onClick={handleClick}> 
            Login 
            </button>
        </form>)}
        {user?.name}
    </div>
  )
}

export default Login