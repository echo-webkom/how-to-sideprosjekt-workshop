import NavBar from "../FrontPage/NavBar"
import Banner from "../FrontPage/Banner"
import Footer from "../FrontPage/Footer"
import Link from "next/link"

export default function OtherStuff() {
    return (
        <div className="page">
            <NavBar />
                
            <Banner message = "Other Stuff"/>

            <p className="text">Check out my other stuff, this is more personal things. 
                I plan to write things like a list of my favorite movies/series and games as well as my favorite recipes.
            </p>

            <div className="card">
                <Link className="link" href="/OtherStuff/CV"> 📝 Kai&apos;s CV 💼</Link>
            </div>

            <Footer/>
        </div>
    )
}