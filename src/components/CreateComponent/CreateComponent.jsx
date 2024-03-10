import React from 'react'
import './CreateComponent.css'
function CreateComponent() {
  return (
   <>
   <form className="create-component">
    <label>Name</label>
    <input type='text'  placeholder= "Enter Name"/><br/>
    <label>Type of Blog</label>
    <input type='text' placeholder='Enter the  Type of blog' /><br/>
    <label>Description</label>
    <input type='textarea' placeholder='Share Your Thoughts'/>
   </form>
   </>
  )
}

export default CreateComponent