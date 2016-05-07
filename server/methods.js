import { Meteor } from 'meteor/meteor'
import {Tasks} from '/models/collections.js'

Meteor.methods({
  insertTask:(task) => {
    Tasks.insert({task:task})
  }
})
