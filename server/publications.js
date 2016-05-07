import { Meteor } from 'meteor/meteor';
import {Tasks} from '/models/collections.js';

Meteor.publish("tasks", function(){
  return Tasks.find();
});
