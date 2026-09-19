import {useState} from "react"
import TodoItem from "./TodoItem"
function TodoList()
{
    const[activityArr,setactivityArr] = useState([
        {
            id:1,
            Activity:"Go for a walk"
        },
        {
            id:2,
            Activity:"have a breakfast"
        },
        {
            id:3,
            Activity:"take a shower"
        }
    ])



    return(
        <div className="bg-[#BDB4EA] border rounded-md p-2 flex-grow mx-5 my-3">
        <h1 className="text-2xl font-medium">Today's Acitivity</h1>
        {activityArr.length === 0? <p>"you have not added anything yet"</p>:""}
       
        {
            activityArr.map(function(item,index){
               return <TodoItem id={item.id} Activity={item.Activity} index={index} activityArr = {activityArr}
setactivityArr = {setactivityArr}
                
                
                
               />
            })
        }
        </div>
    )
}


export default TodoList