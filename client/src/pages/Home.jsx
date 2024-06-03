import React from 'react';
import Navbar from '../components/navbar/Navbar';
// import HeroSection from '../components/herosection/HeroSection';
// import RecentPost from '../components/post/RecentPost';
import HeroSection from '../components/heroSections/HeroSection';
import RecentPosts from '../components/post/RecentPosts';

const Home = () => {
    return (
        <>
           <Navbar/>
           {/* <HeroSection/> */}
           <HeroSection/>
           {/* <RecentPost/> */}
           <RecentPosts/>
        </>
    );
};

export default Home;