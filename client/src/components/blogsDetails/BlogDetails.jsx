import React from 'react';
import BlogHeroSection from './BlogHeroSection';
import Post from './Post';
import ThirdSectionPost from '../ThirdSectionPost';
import NewsLetter from './../NewsLetter';
import Footer from './../Footer';

const BlogDetails = () => {
    return (
        <>
          <BlogHeroSection/>  
          <Post/>
          <ThirdSectionPost/>
          <NewsLetter/>
          <Footer/>
        </>
    );
};

export default BlogDetails;