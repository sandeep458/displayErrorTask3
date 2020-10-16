import React, { useState } from 'react';
import './App.css';
import Messagepop from'./Components/Messagepop';
export const themeContext = React.createContext();
// eslint-disable-next-line
import {v4 as v4} from "uuid";
 const App = () =>{
   // eslint-disable-next-line
   const [comp,setComp] = useState([
  {
      name:"node",
      id:v4(),
      message:"not foundnot foundnot foundnot foundnot found",
      selected : false,
   },
   {
    name:"node",
    id:v4(),
    message:"not foundnot foundnot foundnot foundnot found",
    selected : false,

 },
 {
  name:"node",
  id:v4(),
  message:"not foundnot foundnot foundnot foundnot found",
  selected : false,

},
{
  name:"node",
  id:v4(),
  message:"not foundnot foundnot foundnot foundnot found",
  selected : false,

}

]);
const [theme,changeTheme] = useState("white");
// let selectedidlist = [];
const selectedIds = (per)=>{
  let temp = [...comp];
    for(let i=0;i<temp.length;i++){
      if(temp[i].id===per){
        temp[i].selected = !temp[i].selected;
      }

    }
    setComp(temp);
}
const submitClicked = () =>{
  let selected = ["yvjgvhgf","fgchgfhg"];
  for(let i =0;i<comp.length;i++){
    if(comp[i].selected === true){
      selected.push(comp[i].id)
    }
  }
  alert(selected.join(", "))
}
const submitchange=(e)=> {
  changeTheme(e.target.value)
  
}

    return (
      <div className="container">
        <div className="message">
                <div className="first">
                  <h1>validation results</h1>
                </div>
                <select onChange={(e)=>submitchange(e)} value="colors" id="colors">
                    <option value="light" >light</option>
                    <option value="brown" >brown</option>
                    <option value="red" >red</option>
                    <option value="green" >green</option>
                  </select>
                <div className="middle">
                {comp.map((props)=>
                 <themeContext.Provider value = {theme}>
                 <Messagepop {...props} selectedIds ={selectedIds}/>
                 </themeContext.Provider>
                 )}
                  </div>
                  <div className="close">
                     <div className="buttonname">
                      <p>close</p>
                      </div>
                    <div className="submit-button">
                    <div className="submit">
                      <p onClick= { submitClicked }>submit</p>
                    </div>
                    </div>
                  </div>
        </div>
        


          </div>
    );
}
  
// eslint-disable-next-line
export default App;

