import Introduction from './Introduction'
import React_Projects from './React_Projects';
import BugShooter from './BugShooter';
import RodentReboot from './RodentReboot';



export default function Home() {
  return (
    
      <div className="full-screen">

        <Introduction/>

        <React_Projects/>
        
        <BugShooter/>

        <RodentReboot/>

        </div>
      );
}