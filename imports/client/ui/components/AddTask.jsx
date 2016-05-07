import React from 'react'
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

class AddTask extends React.Component{
  constructor(props){
    super(props)
    this.addTask = this.addTask.bind(this);
  }
  addTask(event){
    event.preventDefault();
    var task =this.refs.taskText.value
    Meteor.call('insertTask', task)
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
