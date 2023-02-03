
import './App.css';
import Amazon from './components/Amazon';
import NavBar from './components/NavBar';
import User from './User';
import { useState } from 'react';
import Cart from './components/Cart';
import AutoComplete from './AutoComplete';
import DynamicForm from './DynamicForm';
import DropDown from './components/DropDown';

function App() {
  const [show, setShow] = useState(true)
  const [cart, setCart] = useState([])
  const[warning,setWarning]=useState(false)

  const addToCart = (val) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (val.id == product.id) {
        isPresent = true
        setWarning(true)
       
      }

    })

    if (isPresent) {
      return;
    }
    setCart([...cart, val])
  }

  const handleChange=(item,d)=>
  {
    // console.log(d);
 const ind=-1;
 cart.forEach((data,index)=>{
  if(data.id==item.id)
  {
    ind=index
  }
 })
 const tempArr=cart;
 tempArr[ind]+=d;
 if(tempArr[ind].amount===0)
 {
  tempArr[ind].amount=1;
  setCart([...tempArr])
 }
  }


  const options=[
    {value:"green",label:"Green"},
    {value:"blue",label:"Blue"},
    {value:"red",label:"Red"},
    {value:"yellow",label:"Yellow"},

  ]
  return (
    <div>
      {/* 1st */}
      {/* <User/> */}

      {/* 2nd */}
      {/* <AutoComplete/> */}

      {/* 4th */}
      {/* <DynamicForm/> */}

      {/* 5th */}
      <DropDown placeholder="select..." options={options}/>

      {/* 3rd */}
      {/* <NavBar setShow={setShow} size={cart.length} />
      {show ? <Amazon addToCart={addToCart} /> : <Cart setCart={setCart} cart={cart}  handleChange={handleChange}/>} */}
      {/* {
        warning && alert("item already added")
      } */}
    </div>
  );
}

export default App;
