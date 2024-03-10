import React from 'react'
import './HomeComponent.css'
import CreateComponent from '../CreateComponent/CreateComponent'
import PublishComponent from '../PublishComponent/PublishComponent'
function HomeComponent() {
  return (
    <div>
        <div className="nav">
            <div className="nav-left">Blogo🏃🏻</div>
            <div className="nav-right">Sign In</div>
        </div>
        <CreateComponent/>
        <PublishComponent/>
    </div>
  )
}

export default HomeComponent