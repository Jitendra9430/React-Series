import { useState } from "react";
import User from "./User";
import Wrapper from "./Wrapper";

function App() {
  // let userName = "Jitu";
  // let age = 21;
  // let email = "krjitu@gmail.com";

  // let userObj = {
  //   name: "Jitu",
  //   age: 21,
  //   email: "krjitu@gmail.com",  
  // }
  const [val,setVal]=useState("")
  return (
    <>
       {/* <h1>Props in React js</h1> */}
       
      {/* <User name="Jitu" />
      <User name="Alex" />
      <User/> */}

      {/* <Wrapper color="orange">
          <h1>Hii everyone</h1>
      </Wrapper>

      <Wrapper>
          <h1>Hii jitu</h1>
      </Wrapper> */}

      

      <h1>Get input field value</h1>
      <input type="text" value={val} onChange={(event) => setVal(event.target.value)}placeholder="Enter Username"  />
      <h1>{val}</h1>
      <button onClick={() => setVal("")}>Clear</button>

    </> 
    
  );
}

export default App;
