import React from 'react'
import './HomeComponent.css'
import CreateComponent from '../CreateComponent/CreateComponent'
import PublishComponent from '../PublishComponent/PublishComponent'
import FooterComponent from '../FooterComponent/FooterComponent'
function HomeComponent() {
  return (
    <div>
        <div className="nav">
            <div className="nav-left">Blogo🏃🏻</div>
            <div className="nav-right">Sign In</div>
        </div>
        <div>
        <div className="create-content">
        <h1 className='cr-content-title'>Create Your Blog</h1>
        <button className='cr-btn'>CREATE</button>
        </div>
    </div>
        <PublishComponent/>
        <FooterComponent/>
        <CreateComponent/>
    </div>
  )
}

export default HomeComponent