import React, { useEffect, useState } from 'react'


function App() {

  const[greetings,setGreetings]=useState("")

  useEffect(()=>{

  let hours = new Date().getHours().toString().padStart(2,'0')

  let minutes=new Date().getMinutes().toString().padStart(2,'0')

  let seconds=new Date().getSeconds().toString().padStart(2,'0')

  if(hours<12){

    setGreetings(`Good morning ${hours}:${minutes}:${seconds}`)

  }  

  else if(hours>=12 && hours<=15){

    setGreetings(`Good afternoon ${hours}:${minutes}:${seconds}`)

  }

  else{

    setGreetings(`Good evening ${hours}:${minutes}:${seconds}`)

  }

  },[])

  return (

    <div>

      <div style=

      {{

        height:"100px",

        width:"200px",

        backgroundColor:"grey",

        marginTop:"40px",

        marginLeft:"300px",

        borderTopLeftRadius:"20px",

        borderBottomRightRadius:"20px"

       }}>{greetings}</div>

    </div>

  )

}


export default App


