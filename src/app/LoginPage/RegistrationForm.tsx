import { useState } from "react"

interface RegistrationFormProps {
    onSubmit: (newUser: string, newPassword: string) => void;
}

export default function RegistrationForm(props: RegistrationFormProps) {

    const [username, setNewUsername] = useState("")
    const [password, setPassword] = useState("")

    async function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        if (validateForm()) {
            try {
                const response = await fetch('/api/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ username, password }),
                });

                if (response.ok) {
                    alert('User registration succesful');
                } else {
                    alert('Registration failed, user already taken');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('Error during registration');
            }
        };


    }

    function validateForm() {
        return username.length > 0 && password.length > 0;
    }

    return (
        <div className="logInContainer">
            <form onSubmit={handleSubmit} className="new-item-form">
                <div className="form-row">
                    <label htmlFor="user">New User</label>
                    <input
                        value={username}
                        onChange={user => setNewUsername(user.target.value)}
                        type="text"
                        id="user" />
                </div>
                <div className="form-row">
                    <label htmlFor="password">New Password</label>
                    <input
                        value={password}
                        onChange={password => setPassword(password.target.value)}
                        type="text"
                        id="password" />
                </div>
                <button className="btn" type="submit" disabled={!validateForm()}>Add</button>
            </form>

        </div>
    );
} 