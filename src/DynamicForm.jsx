import React, { useState } from 'react'

const DynamicForm = () => {

    const[form,setForm]=useState([{input:"" }])

    const addform=()=>
    {
        setForm([...form,{input:"" }])
    }
  return (
    <>
    {
    form.map((val)=>
    {
        return (
            <>
            First Name:<input placeholder='First Name'/> Last Name:<input placeholder='Last Name'/>
            <br/>
            </>
        )
    })
    }
    <br/>  
    <button onClick={addform}>Add Form</button>
    </>
  )
}

export default DynamicForm