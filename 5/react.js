import {useState} from 'react';
import './App.css';
import Child from "./Child";
import ChildOne from "./nested/childOne"


function App() {

  const [state, setState] = useState(10)

  const [show,setShow] = useState(true)

const [inpOne,setInpOne] = useState({});
// const [inpuTwo,setInpTwo] = useState("")

  // const handle = (event) => {
  //   if(event.target.name === "inp1"){
  //     setInpOne(event.target.value)
  //   }else{
  //     setInpTwo(event.target.value)
  //   }
  // }
const clickmeee= ()=>{
  console.log(inpuTwo,inpOne)
  
}

// {
//   name:"sss",
//   age:20,
//   loc:"3232",
//   gen:"male"
// }

  return (
    <div className="App">
      <header className="App-header">

        <h1 onClick={() => setShow(!show)} >{state} this is app component</h1>
        <input name='name' placeholder='enter value' type='text' value={inpOne} onChange={(e)=>{setInpOne(e.target.value)}} ></input>
        <input name='age' placeholder='enter value' type='text' value={inpuTwo} onChange={(e)=>{setInpTwo(e.target.value)}} ></input>
        <input name='loc' placeholder='enter value' type='text' value={inpuTwo} onChange={(e)=>{setInpTwo(e.target.value)}} ></input>
        <input name='gend' placeholder='enter value' type='text' value={inpuTwo} onChange={(e)=>{setInpTwo(e.target.value)}} ></input>

       <button  onClick={clickmeee} >submit</button>

        {/* {
          show ? <Child /> : <ChildOne />
        } */}
        
        
      </header>
    </div>
  );
}

export default App;
