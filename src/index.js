//const element = document.createElement("h1")
//element.innerText = "Hello World . . ."
//const container = document.getElementById("root")
//container.appendChild(element)

import React from "react"
import ReactDOM from "react-dom"
const user = {
  firstname: "Luis",
  lastname: "Peralta",
  avatar: "https://www.itcsystem.es/wp-content/uploads/2019/01/avatar-372-456324.png"
}

function getName(user){
  return `${user.firstname} ${user.lastname}`
}

function getGreeting(user){
  if(user){
      return<h1>Hi! I'm ...{getName(user)}</h1>;
  }
  return <h1>Hello Stranger!</h1>
}

const name = "Reloco"
const element = (
  <div>
    <h1>{getGreeting(user)}</h1>
    <img src={user.avatar}/>
  </div>
)

ReactDOM.render(element, document.getElementById("root"))
