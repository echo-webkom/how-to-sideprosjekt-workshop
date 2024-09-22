import Introduction from './FrontPage/Introduction'
import React_Projects from './ReactProjects/React_Projects';
import Java_Projects from './JavaProjects/Java_Projects';
import Banner from './FrontPage/Banner';
import Footer from './FrontPage/Footer';
import NavBar from './FrontPage/NavBar';
import BlinkingUnderscore from './FrontPage/BlinkingUnderscore';
import Link from 'next/link';




export default function Home() {
  return (
    
      <div className="page">

        <NavBar/>

        <div className='content'>

        <div className='banner-container'>
          <Banner message = 'Hello world'/>
          <BlinkingUnderscore/>
        </div>

        <Introduction/>
        
        <React_Projects/>
        
        <Java_Projects/>

        <Link className="link" href="/OtherStuff"> 🎉 Other Stuff 🥍 </Link>

        </div>
        
        <Footer/>

      </div>

      );
}