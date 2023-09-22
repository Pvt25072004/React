// import logo from './logo.svg';
import './App.css';
// import Header from "./component/side_bar.js";
// import Navbar from "./component/header.js";
// import Content from "./component/content.js";
import { useState } from 'react';
// import Hello from "./hello";


function App() {
  var [count, setCount] = useState(0);
  
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={()=>{
        setCount(count + 1)
      }}>Count</button>
    </div>
  );
}

export default App;
// FirstName: <input className='first'></input><br />
//       LastName: <input className='last'></input><br />
//       <button onClick={()=>{
//         let firstName = document.querySelector(".first").value;
//         let lastName = document.querySelector(".last").value;
//         setFullName(`${firstName} ${lastName}`)
//       }}>Show Name</button><br />
//       FullName: {fullName}
// var [firstName, setFirstName] = useState('');
// var [lastName, setLastName] = useState('');
// var [fullName, setFullName] = useState('');

// FirstName: <input ></input>
