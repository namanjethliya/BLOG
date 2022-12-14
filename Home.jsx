import React, {useState} from 'react'
import { Link, Routes, Route, Outlet } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Switch from 'react-switch'

function Home() {
  

  return (

    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">BLOGS (Routing Tutorial)</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog">Blogs</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/contact"> Contact </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/Services">Services</Link>
              </li>
              <li className="nav-item">
               <Switch className='themebtn'/>    
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div>
        <Outlet />
        <div className="wrapper">
          <div className='leftbar'>
            <h1>Left</h1>

          </div>

          <div className='centerbar'>
            <h1>Center</h1>


          </div>

          <div className='rightbar'>
            <h1>Right</h1>
          </div>
        <div className="footer">
          
        </div>
        </div>
      </div>
    </>
  )

}


export default Home