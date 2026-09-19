function TodoForm()
{
    return(
        <div> 
        <h1 className="text-2xl font-medium">Manage Activities</h1>
        <input type="text" className="border border-black p-1 " placeholder="Next activity"></input>
        <button className="bg-black text-white p-1 border border-black">Add</button>
        </div>
    )
}

export default TodoForm