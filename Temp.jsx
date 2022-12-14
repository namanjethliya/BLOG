import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './Blog/Blog.css'
import Home from './Blog/Home.jsx'
import Blog from './Blog/Blog.jsx'
import BlogPosts from './Blog/BlogPosts.jsx'
import Services from './Blog/Services.jsx'
import Contact from './Blog/Contact.jsx'
import About from './Blog/About.jsx'
import NotFound from './Blog/NotFound.jsx'
import { createContext } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"


let a = "tushar";
 export  let UserContext = createContext();

ReactDOM.createRoot(document.getElementById('root')).render(
<Netflix/>

  <UserContext.Provider value = {a}>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} >
        <Route path='/blog'>
          <Route index element={<Blog />} />
          <Route path=':id' element={<BlogPosts />}/> 
        </Route>
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  </BrowserRouter>
  </UserContext.Provider>

  

)
