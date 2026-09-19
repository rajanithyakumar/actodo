import {Link} from "react-router-dom"
import {useState} from "react"
import { useNavigate } from "react-router-dom"
function Login(props)
{   const navigate = useNavigate()
    const[eusername,setEusername]= useState()
    const[epassword,setEpassword]= useState()
    const [ruser,setruser] = useState(true)

    const user = props.users

    
    function handleUinput(evt)
    {
        setEusername(evt.target.value)

    }
    
    function handlePinput(evt)
    {
        setEpassword(evt.target.value)
    }
    
    function usercheck()
    {
    var userfound = false
       user.forEach(function(item)
    {
        if(item.username === eusername && item.password === epassword)
        {
            console.log("login successfull")
            userfound = true
            navigate("/Landing",{state:{user:eusername}})
            
        }
        })
        if(userfound === false)
        {
            console.log("login failed")
             setruser(false)
        }
    }

    

   return(
    <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <h1 className="text-3xl font-medium">Hey hi</h1>
               {ruser?<p>I help you manage your Activities After your Login :)</p>:<p className="text-red-400">pls sign up before you login</p>}
                
                <div className="flex flex-col my-3 gap-2">
                    <input 
                    type="text" className="border-black w-52 p-1 bg-transparent border rounded-md"
                    placeholder="username" onChange={handleUinput}></input>

                   <input 
                    type="text" className="border-black w-52 p-1 bg-transparent border rounded-md"
                    placeholder="password" onChange={handlePinput}></input>

                    <button className="bg-[#8272DA] w-24 p-2 rounded-md my-2" onClick={usercheck}>
                        Login
                     </button>

                     <p>Don't have an Account? <Link to={"/signup"} className="underline">Sign up</Link></p>


                </div>
             
             </div>
       </div>
   )
  
}

export default Login 
