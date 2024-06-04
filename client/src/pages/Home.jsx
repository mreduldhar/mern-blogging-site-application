import React from 'react';
import Navbar from '../components/navbar/Navbar';
import HeroSection from '../components/heroSections/HeroSection';
import RecentPosts from '../components/post/RecentPosts';
import ThirdSectionPost from '../components/ThirdSectionPost';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
           <Navbar/>
           <HeroSection/>
           <RecentPosts/>
           <ThirdSectionPost/>
           <NewsLetter/>
           <Footer/>
        </>
    );
};

export default Home;