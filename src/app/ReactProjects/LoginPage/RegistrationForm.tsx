import { useState } from "react"

interface RegistrationFormProps {
    onSubmit: (newUser: string, newPassword: string) => void;
}

export default function RegistrationForm(props: RegistrationFormProps) {

    const [username, setNewUsername] = useState("")
    const [password, setPassword] = useState("")

    async function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
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
        }
    

    function fieldsFilled(event: React.FormEvent) {
        if (username.length >= 5 && password.length >= 5) {
            return handleSubmit(event);    
        } else {
            alert('Both fields must be at least 5 characters long.');
            return false;
        }
    }

    return (
        <div className="logInContainer">
            <form onSubmit={fieldsFilled} className="new-item-form">
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
                <button className="btn" type="submit">Register</button>
            </form>
        </div>
    );
} 