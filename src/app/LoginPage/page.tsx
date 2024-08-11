"use client"

import { useState } from "react"
import RegistrationForm from "./RegistrationForm"
import IntroText from "./IntroText"

export default function RegistrationPage() {
    const [submittedUsername, setSubmittedUsername] = useState<string | null>(null);
    const [submittedPassword, setSubmittedPassword] = useState<string | null>(null);

    function welcomeUser(username: string, password: string) {
        setSubmittedUsername(username);
        setSubmittedPassword(password);
    }

    return (
        <div>
            <IntroText />
            <h1 className = "text">Register here! Enter your new username and password.</h1>
            <RegistrationForm onSubmit={welcomeUser} />
        
           
        </div>
    )
}