import React from 'react';

class Task extends React.Component {
    constructor(props) {
        super(props);
        this.deleteTask = this.deleteTask.bind(this);
        this.updateTask = this.updateTask.bind(this);
        this.state = {
          completed: this.props.task.completed
        }
    }
    deleteTask(event) {
        Meteor.call("deleteTask", this.props.task._id);
    }
    updateTask(event){
      Meteor.call("updateTask", this.props.task._id, !this.props.task.completed)
    }
    render() {
        return (
            <li className="collection-item avatar">
              <i className="fa fa-thumb-tack fa-2x circle" aria-hidden="true"></i>
                <span className="title">{this.props.task.task}</span>
                <p>
                  <input type="checkbox" checked={this.props.task.complete} ref="complete" onChange={this.updateTask}/>
                  <label onClick={this.updateTask}>Completed</label>
                    <br/>
                </p>
                <a href="#" className="secondary-content" onClick={this.deleteTask}>
                    <i className="fa fa-times" aria-hidden="true"></i>
                </a>
            </li>
        )
    }
}

export default Task
