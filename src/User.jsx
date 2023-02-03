import React, { useEffect } from 'react'
import { useState } from 'react';
const APIURL = "https://jsonplaceholder.typicode.com/users";
const User = () => {

    const [list, setList] = useState([]);
    const [searchList, setsearchList] = useState([]);
    const[clickNo,setClickNo]=useState(0)
    const getUsers = () => {
      
      fetch(APIURL)
        .then((res) => res.json())
        .then((data) => {
          setList(data);
          setsearchList(data)
        });
       
    }
    useEffect(()=>
    {
        if(clickNo==1)
        {
            let oldUser=[...list];
            oldUser.sort(function(a,b){return a.name.length-b.name.length})
            setsearchList(oldUser)
        }
        if(clickNo==2)
        {
            let oldUser=[...list];
            oldUser.sort(function(a,b){return b.name.length-a.name.length})
            setsearchList(oldUser)
        }
        if(clickNo==3)
        {
            getUsers();
            setClickNo(0)
        }
    },[clickNo])

    const sort=()=>
    {
        setClickNo((prev)=>prev+1)
    }

    const handlechange=(a)=>
    {
      if(!a)
      {
        setsearchList(list)
        return searchList;
      }
      else{
        let filterList=list.filter((val)=>
        {
          return(val.name.toLowerCase().includes(a))
        })
        setsearchList(filterList)
      }
      
    }

  return (
    <>
    <input type="text" onChange={(e)=>handlechange(e.target.value)}/><button>Search</button><br/><br/>
    <button onClick={getUsers}>Get user</button>
    <button onClick={sort}>Sort user</button>
    {searchList.map((val) => {
        return <ul>{val.name}</ul>;
      })}
    </>
  )
}

export default User