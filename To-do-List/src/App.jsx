import AppName from "./Components/AppName";
import AddToDo from "./Components/AddToDo";
import ToDoItem1 from "./Components/ToDoItem1";
import ToDoItem2 from "./Components/ToDoItem2";
import './App.css'
function App() {
  return (
    <center className="todo-continer">
      <AppName></AppName>
      <AddToDo />
      <div className = "item-continer">
      <ToDoItem1></ToDoItem1>
      <ToDoItem2></ToDoItem2>
      </div>
     
    </center>
  );
}

export default App;
