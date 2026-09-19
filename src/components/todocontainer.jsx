import Todoform from "./Todoform"
import TodoList from "./TodoList"

function Todocontainer()
{
    return(
  <div>
       <div className="flex flex-wrap">
        <Todoform/>
        <TodoList/>
        
        
        
        </div>
    </div>
  
    )
}

export default Todocontainer