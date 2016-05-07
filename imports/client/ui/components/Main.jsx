import React from 'react'
import AddTask from '/imports/client/ui/components/AddTask.jsx'
import TaskList from '/imports/client/ui/containers/TaskList.js'

const Main = () => (
  <div>
      <AddTask />
      <TaskList />
  </div>
)

export default Main;
