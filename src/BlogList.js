import React from 'react';
import { useState } from 'react';

export default function BlogList(props) {
    const blogs=props.bloglar;
    const baslik=props.baslik;

    return (
        <div className='blog-list'>
            <h2 style={{color:'#ff793d'}} >{baslik}</h2>
          {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.ad}</h2>
                    <p>Yazının yazarı : {blog.yazar}</p>
                </div>
            ))}
        </div>
    )
}

