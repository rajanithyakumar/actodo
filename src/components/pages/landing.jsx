import Header from "../header.jsx";
import Todocontainer from "../todocontainer.jsx";
import Card from "../card.jsx";
function Landing()
{
   const username = localStorage.getItem("username");
    return(
        <div className="bg-black p-16">
      <div className="bg-[#EFEFEF] p-10 border rounded-md ">
       {/*header*/}
        <Header name={username}/>
        
        {/*card*/}
        <div className="flex justify-between gap-7 my-5 flex-wrap">
          <Card bgcolor={"#8272DA"} title={"23"} subtitle={"Chennai"}/>
          <Card bgcolor={"#FD6663"} title={"augest"} subtitle={"23/08/2002"}/>
          <Card bgcolor={"#FCA203"} title={"Build using"} subtitle={"React"}/>
          </div>
          
          {/*todocontainer*/}
          <Todocontainer/>
        
        </div>   
        
   </div>
 
 )
}

export default Landing