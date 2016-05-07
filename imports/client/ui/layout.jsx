import React from 'react';
import Navbar from '/imports/client/ui/components/Navbar.jsx'

export default AppLayout = ({content}) => (
  <div className="app-root">
    <div className="container">
      <Navbar />
      {content()}
    </div>
  </div>
)
