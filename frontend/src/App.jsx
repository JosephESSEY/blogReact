import { useEffect, useState } from 'react'
import axios from 'axios'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [listOfPosts, setListOfPosts] = useState([])
  console.log("Joqzp")

  useEffect(() =>{
    axios.get("http://localhost:3001/posts").then((response) =>{
      setListOfPosts(response.data);
      console.log(listOfPosts)
    })
  }, [])

  return (
    <>
    <div>
    </div>
      <div className="posts">

        {listOfPosts.map((value, key) =>{
          return(
          <div className="post">
              <div>{value.title}</div>
              <div>{value.content}</div>
              <div>{value.username}</div>
          </div>)
        })}
        
      </div>
    </>
  )
}

export default App
