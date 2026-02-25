import React from 'react'

import ReactDOM from 'react-dom/client'

import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Home from './Home.jsx'

import Post from './Post.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(

  <BrowserRouter>

  <Routes>

    <Route path="/" element={<Home/>}/>

    <Route path="/Post/:id" element={<Post/>}/>

    <Route/>

  </Routes>

  </BrowserRouter>

)

import {Link} from "react-router-dom"


function Home() {

    const posts=[

        {

            id:1,

            title:"React introduction",

            content:"React is a JS library used to build fast and interactive user interfaces"

        }

    ]

  return (

    <div>

      <h1>Mini Blog-Home</h1>

      <p>select a blog post to view the full article</p>

      {posts.map((post)=>(

        <div key={post.id}

        style={{

            padding:"20px",

            marginBottom:"20px",

            borderRadius:"12px",

            background:"lightblue",

            border:"1px solid white",

           

        }}>

            <h2>{post.title}</h2>

            <Link to={`/post/${post.id}`}>Read Full Post</Link>

        </div>

      ))}

     

    </div>

  );

}


export default Home



import React from 'react'

import { useParams,Link } from 'react-router-dom'


function Post() {

    const {id}=useParams();

    const posts=[

        {

            id:1,

            title:"React introduction",

            content:"React is a JS library developed by FB"

        }

    ]

    const post=posts.find((p)=>p.id === parseInt(id));

    if(!post){

        return(

            <h2>Post not found</h2>

        )

    }

   

  return (

    <div>

      <Link to="/"> back to home</Link>

    <div>

        <h1>{post.title}</h1>

        <p>{post.content}</p>

    </div>

    </div>

  );

}


export default Post



