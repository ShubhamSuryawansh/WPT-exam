
import { useEffect, useState } from "react";
import axios from "axios";


export default function App(){
  return (
    <div>
          <MyComponent/>
    </div>
  );
};

function MyComponent(){
  const [messages,setMessage]=useState("");
const [list,setList]=useState("")
  const handleMessage=(e)=>{
    setMessage(e.target.value)

  }
const addMessages =  async ()=>{
  if(messages="")
  {
    alert("empty validation")
  }
const url=`http://localhost:4000/addmessages`;
const data={
  messages:messages,
};
await axios.post(url,data);

}

};
useEffect(()=>getuser,[]);
  return(
 <div>
   <h2 className="bg-dark text-light p-1 mb-0">MyChatApp</h2>
   <h6 className="bg-dark text-light p-2 mb-3">
     By shubham Syuryawanshi,ID:210940520094
   </h6>
   <div className="container-fluid">
   <div className="row">
     <div className="col-10">
       <input className="form-control form-control-lg m-2" type="text" value={message} onChange={handleMessage} placeholder="lets chat here"/>
      
     </div>
   </div>
  <div className="row">
  <div className="col-2">
      
      <input className="btn btn-primary w-75 p-2 m-2" type="button" value="send" onClick={addMessages}/>
      </div>
  </div>
     
    

   </div>
 </div>
      
 
  );
};