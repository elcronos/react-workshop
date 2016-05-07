import React from 'react'
import ReactDOM from 'react-dom';
import { Meteor } from 'react-dom';

class AddTask extends React.Component{
  constructor(props){
    super(props)
    this.addTask = this.addTask.bind(this);
  }
  addTask(event){
    event.preventDefault();
    console.log(this.refs.taskText.value)
  }
  render() {
        return (
            <form id="todoForm" onSubmit={this.addTask}>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="addTask" type="text" ref="taskText" className="validate" autoFocus/>
                        <label for="addtask">Add a task...</label>
                    </div>
                </div>
            </form>
        )
    }
}

export default AddTask
