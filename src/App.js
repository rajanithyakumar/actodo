import Header from "./components/header"
import Card from "./components/card"
import Todocontainer from "./components/todocontainer"
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Landing from "./components/pages/landing";
import SignUp from "./components/pages/signup";
import Login from "./components/pages/login";
import {useState} from "react";


   function App()
{

  const[users,setusers]= useState([
    {
        username : "nani",
        password : "nani2k23"
    }
    

  ])
  return(
  <div>
  <BrowserRouter>
<Routes>
   <Route path="/" element={<Login users={users} setusers={setusers}/>}></Route>
   <Route path="/SignUp" element={<SignUp users={users} setusers={setusers}/>}></Route>
   <Route path="/landing" element={<Landing/>}> </Route>
  </Routes>
  </BrowserRouter>
</div>

        

        

        

 
   
  );
}

export default App
