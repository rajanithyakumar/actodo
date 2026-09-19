import {Link} from "react-router-dom"
import {useState} from "react"
import { useNavigate } from "react-router-dom"
function SignUp(props)
{    const navigate = useNavigate()
    const[eusername,setEusername]= useState()
    const[epassword,setEpassword]= useState()
    const users = props.users
    const setusers = props.setusers

 
    function handleUinput(evt)
    {
        setEusername(evt.target.value)

    }
    
    function handlePinput(evt)
    {
        setEpassword(evt.target.value)
    }
    
    function Adduser()
    {
         setusers([...users,{username:eusername,password:epassword}])
         navigate("/")
    }
    
    return(
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <h1 className="text-3xl font-medium">Hey hi</h1>
                <p> I Help you manage activities after you login</p>
                <div className="flex flex-col my-3 gap-2">
                    <input 
                    type="text" className="border-black w-52 p-1 bg-transparent border rounded-md"
                    placeholder="username" onChange={handleUinput}></input>

                   <input 
                    type="text" className="border-black w-52 p-1 bg-transparent border rounded-md"
                    placeholder="password" onChange={handlePinput}></input>


                     <input 
                    type="text" className="border-black w-52 p-1 bg-transparent border rounded-md"
                    placeholder="confirm password"></input>
                    
                    <button className="bg-[#FCA201] w-24 p-2 rounded-md my-2" onClick={Adduser}>
                       Sign Up
                     </button>

                     <p>Already have an Account? <Link to={"/"} className="underline">Login</Link></p>


                </div>
             
             </div>
       </div>
    )
}

export default SignUp


