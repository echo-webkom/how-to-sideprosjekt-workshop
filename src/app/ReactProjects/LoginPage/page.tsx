"use client"

import { useState } from "react"
import RegistrationForm from "./RegistrationForm"
import IntroText from "./IntroText"
import LogInForm from "./LogInForm"
import Footer from "../../Footer"
import Banner from "../../Banner"
import NavBar from "@/app/NavBar"

export default function RegistrationPage() {
    const [submittedUsername, setSubmittedUsername] = useState<string>("");
    const [submittedPassword, setSubmittedPassword] = useState<string>("");

    function takeInCredentials(username: string, password: string) {
        setSubmittedUsername(username);
        setSubmittedPassword(password);
    }

    return (
        <div className = "page">
            <NavBar />
            <Banner message = "🔑 Login Page 🔒" />
            <IntroText />
                <div className="card">
                    <h1 className = "text">Register here!</h1>
                    <h1 className = "text">Enter your new username and password.</h1>
                    <RegistrationForm onSubmit={takeInCredentials} />
                </div>

                <div className="card">
                    <h1 className = "text column-container">Log in here!</h1> 
                    <h1 className = "text column-container">Enter your registered username and password.</h1>
                    <LogInForm onSubmit={takeInCredentials} />
                </div>

            <Footer />
        </div>
    )
}