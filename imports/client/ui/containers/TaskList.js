import {composeWithTracker} from 'react-komposer';

import TaskList from '/imports/client/ui/components/TaskList.jsx';
import {Tasks} from '/models/collections.js';

composer = (onPropsChange, onData) => {
  const handle = Meteor.subscribe('tasks');
  if (handle.ready()) {
    var tasks = Tasks.find({ },{ sort: { complete:false, createdAt:-1 }});
    onData(null, {tasks});
  }
}

export default composeWithTracker(composer)(TaskList);
