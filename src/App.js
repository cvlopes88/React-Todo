import React, {Component} from 'react';
import Todo from "./components/TodoComponents/Todo";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
      constructor(){
        super();
        this.state = {
          postArray : [

          ],
          task: "",
          id: "",

        }

      }
    
   
  
  
 addTask = (e) => {
   e.preventDefault();
  const {task} = this.state;
  const newTask = this.newTask.value;
  this.setState({
    task: [...this.state.task, newTask]
  })
   console.log('runnning')
 }


  render() {
    return (
      <div className="app">
        <h2>Welcome to your Todo App!</h2>
        {this.state.postArray.map((post, index)=>{
          return(
            
            <TodoList 
            key={post.id}
            task={post.task}
            
            />
            
          )
        })}
        <Todo propsTodo={this.state.value} />
        <TodoForm  propsForm={this.state.TodoList}/>
        <button onClick={this.addTask} >submit</button>
      </div>
    );
  }
}

export default App;
