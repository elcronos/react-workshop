import {Mongo} from 'meteor/mongo';

//mongodb://127.0.0.1:3001/meteor
export const Tasks = new Mongo.Collection('tasks')

TaskSchema = new SimpleSchema({
  task: {
    type: String
  },
  complete:{
    type: Boolean
  },
  createdAt: {
    type: Date,
    autoValue: function() {
      if (this.isInsert) {
        return new Date();
      }
    }
  }
});

Tasks.attachSchema(TaskSchema)
