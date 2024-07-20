import Introduction from './Introduction'
import React_Projects from './React_Projects';
import BugShooter from './BugShooter';
import RodentReboot from './RodentReboot';
import Banner from './Banner';
import Footer from './Footer';



export default function Home() {
  return (
    
      <div className="full-screen">

        <Banner/>

        <Introduction/>

        <React_Projects/>
        
        <BugShooter/>

        <RodentReboot/>

        <Footer/>

        </div>
      );
}