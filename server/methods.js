import { Meteor } from 'meteor/meteor'
import {Tasks} from '/models/collections.js'

Meteor.methods({
  insertTask:(task) => {
    Tasks.insert({task:task, complete:false})
  },
  updateTask:(id, completed)=>{
    Tasks.update(id, {
      $set: {
        complete: completed
      }
    });
  },
  deleteTask:(id)=>{
    Tasks.remove(id);
  }
})
