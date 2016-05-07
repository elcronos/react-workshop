import React from 'react';

import Task from '/imports/client/ui/components/Task.jsx';

const TaskList = ({tasks}) => {
  if(tasks.count() > 0 ){
    return (
          <ul className="collection">
            {
              tasks.map((task) => {
                console.log(task)
                return <Task task={task} key={task._id} />
              })
            }
          </ul>
    )
  }
  else{
    return (<p>There are no Tasks!</p>)
  }
}

export default TaskList;
