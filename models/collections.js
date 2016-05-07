import {Mongo} from 'meteor/mongo';

//mongodb://127.0.0.1:3001/meteor
export const Tasks = new Mongo.Collection('tasks')
