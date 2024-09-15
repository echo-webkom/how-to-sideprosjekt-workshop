import Link from 'next/link'

export default function React_Projects() {
    return (

            <div className='card'>
                <h2 className="text-xl font-bold">React Projects</h2>

                <h2>
                    <li>
                        <Link className="link" href="/ReactProjects/ToDoList"> ✔️ Todo list</Link>
                    </li>
                    <li>
                        <Link className="link" href="/ReactProjects/LoginPage">🆕 Login Page</Link>
                    </li>
                </h2>

            </div>
    );

}