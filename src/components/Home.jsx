import React from 'react'
import './Layout.css'
const Home = () => {
  return (

    <div className="container-fluid">
        <div className="row">
          <div className="col-sm-2">
            <nav className="navbar navbar-expand-sm list">
              <ul className="navbar-nav flex-column">
                <li className="nav-item">
                  <a className="nav-link" href="/home">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about" >About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/random" >Random Page</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-sm-10">
          <div className='home' >
    </div>
          </div>
        </div>
      </div>

    
  )
}

export default Home
