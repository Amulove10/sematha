import React, { useEffect, useState } from 'react';
import './blog.css'

function Blog() {
  const [blog , setblog] = useState([])

  useEffect(() => {
    fetch('http://localhost:1020/api/blog/displayblog')
      .then((res) => res.json())
      .then((data) => setblog(data))
      .catch((err) => console.log(err))  
  },[])

  return (
    <div className="blog-section">
      <h2>Latest Blogs</h2>
      <div className="blog-grid">
        {blog.map((blog) => (
          <div key={blog.id} className="blog-card">
            <h3>{blog.title}</h3>
            <img
              src={`http://localhost:1011/uploads/${blog.image}`}
              alt={blog.title}
              className="blog-image"
            />
            <p>{blog.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
