import React from 'react'
import { useParams, Outlet } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../main'



function BlogPosts() {
    let name = useContext(UserContext);
    console.log(name)
    const {id} = useParams()

  return (
    <div className='detailedBlogs'>
        <h2 className='detailedBlogsHead'> Blog Post {id} </h2>
        <div className='detailedBlogsImages'>
        <img src='https://via.placeholder.com/300x150' className='detailedBlogsImage' />
        <img src='https://via.placeholder.com/300x150' className='detailedBlogsImage' />
        <img src='https://via.placeholder.com/300x150' className='detailedBlogsImage' />
        </div>
        <div className="detailsPara">
        <p className='details'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dolores inventore animi 
            error maiores libero quos, nemo blanditiis asperiores vitae similique, consequuntur 
            culpa aliquam rem. Dolorum deserunt velit atque facere.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dolores inventore animi 
            error maiores libero quos, nemo blanditiis asperiores vitae similique, consequuntur 
            culpa aliquam rem. Dolorum deserunt velit atque facere.
        </p>
        <p className='details'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dolores inventore animi 
            error maiores libero quos, nemo blanditiis asperiores vitae similique, consequuntur 
            culpa aliquam rem. Dolorum deserunt velit atque facere.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dolores inventore animi 
            error maiores libero quos, nemo blanditiis asperiores vitae similique, consequuntur 
            culpa aliquam rem. Dolorum deserunt velit atque facere.
        </p>
        <p className='details'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dolores inventore animi 
            error maiores libero quos, nemo blanditiis asperiores vitae similique, consequuntur 
            culpa aliquam rem. Dolorum deserunt velit atque facere.
        </p>
        <div className='detailedBlogsImages'>
        <img src='https://via.placeholder.com/300x150' className='detailedBlogsImage' />
        <img src='https://via.placeholder.com/300x150' className='detailedBlogsImage' />
        <img src='https://via.placeholder.com/300x150' className='detailedBlogsImage' />
        </div>
        </div>
    </div>
  )
}

export default BlogPosts