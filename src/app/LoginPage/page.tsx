"use client"

import { useState } from "react"
import LogInForm from "./LogInForm"
import IntroText from "./IntroText"

export default function LogInPage() {
    const [submittedUsername, setSubmittedUsername] = useState<string | null>(null);
    const [submittedPassword, setSubmittedPassword] = useState<string | null>(null);

    function welcomeUser(username: string, password: string) {
        setSubmittedUsername(username);
        setSubmittedPassword(password);
    }

    return (
        <div>
            <IntroText />
            <LogInForm onSubmit={welcomeUser} />

            <div className = "logInConfirmationTextContainer">
            {submittedUsername && submittedPassword && <p>Welcome {submittedUsername}! Your password is {submittedPassword}</p>}
           
            </div>
        </div>
    )
}