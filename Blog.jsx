import React from 'react'
import { Link } from 'react-router-dom'

function Blog() {
  return (
    <>
      <h1 className='bloghead'>BLOGS</h1>
      <div className='blogPosts'>
        <div className='blogPost'>
          <h2><Link to='/blog/1'>BLOG POST 1</Link></h2>
          <Link to="/blog/1"><img src='https://via.placeholder.com/300x150' alt='' /></Link>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse a, omnis
            pariatur non eaque modi, quasi quibusdam veritatis perferendis aut voluptate deleniti
            possimus beatae fugit, consequuntur quos. Velit, quod doloremque?</p>
        </div>
        <div className='blogPost'>
          <h2><Link to="/blog/2"> BLOG POST 2</Link></h2>
          <Link to="/blog/2"><img src='https://via.placeholder.com/300x150' alt='' /></Link>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse a, omnis
            pariatur non eaque modi, quasi quibusdam veritatis perferendis aut voluptate deleniti
            possimus beatae fugit, consequuntur quos. Velit, quod doloremque?</p>
        </div>
        <div className='blogPost'>
          <h2><Link to="/blog/3"> BLOG POST 3</Link></h2>
          <Link to="/blog/3"><img src='https://via.placeholder.com/300x150' alt='' /></Link>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse a, omnis
            pariatur non eaque modi, quasi quibusdam veritatis perferendis aut voluptate deleniti
            possimus beatae fugit, consequuntur quos. Velit, quod doloremque?</p>
        </div>
        <div className='blogPost'>
          <h2><Link to="/blog/4"> BLOG POST 4</Link></h2>
          <Link to="/blog/4"><img src='https://via.placeholder.com/300x150' alt='' /></Link>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse a, omnis
            pariatur non eaque modi, quasi quibusdam veritatis perferendis aut voluptate deleniti
            possimus beatae fugit, consequuntur quos. Velit, quod doloremque?</p>
        </div>
        <div className='blogPost'>
          <h2><Link to="/blog/5"> BLOG POST 5</Link></h2>
          <Link to="/blog/5"><img src='https://via.placeholder.com/300x150' alt='' /></Link>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse a, omnis
            pariatur non eaque modi, quasi quibusdam veritatis perferendis aut voluptate deleniti
            possimus beatae fugit, consequuntur quos. Velit, quod doloremque?</p>
        </div>
        <div className='blogPost'>
          <h2><Link to="/blog/6"> BLOG POST 6</Link></h2>
          <Link to="/blog/6"><img src='https://via.placeholder.com/300x150' alt='' /></Link>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse a, omnis
            pariatur non eaque modi, quasi quibusdam veritatis perferendis aut voluptate deleniti
            possimus beatae fugit, consequuntur quos. Velit, quod doloremque?</p>
        </div>
        <div className='blogPost'>
          <h2><Link to="/blog/7"> BLOG POST 7</Link></h2>
          <Link to="/blog/7"><img src='https://via.placeholder.com/300x150' alt='' /></Link>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse a, omnis
            pariatur non eaque modi, quasi quibusdam veritatis perferendis aut voluptate deleniti
            possimus beatae fugit, consequuntur quos. Velit, quod doloremque?</p>
        </div>
      </div>
    </>
  )
}

export default Blog