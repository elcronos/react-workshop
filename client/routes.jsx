import React from 'react'
import {mount} from 'react-mounter';
import AppLayout from '/imports/client/ui/layout.jsx'
import Main from '/imports/client/ui/components/Main.jsx'

FlowRouter.route('/',{
  name: 'home',
  action(){
    mount(AppLayout,{
      content: () => (<Main />)
    })
  }
})
