import Link from 'next/link'

export default function React_Projects() {
    return (

            <div className='card'>
                <h2 className="text-xl font-bold">React Projects</h2>

                <h2>
                    
                    <ul>
                        <Link className="link" href="/ReactProjects/ToDoList"> ✔️ Todo list ✔️</Link>
                    </ul>
                    <ul>
                        <Link className="link" href="/ReactProjects/LoginPage">🔑 Login Page 🔒</Link>
                    </ul>
                    <ul>
                        <Link className="link" href="/ReactProjects/FarmorsStuff">Farmors Stuff</Link>
                    </ul>
                </h2>

            </div>
    );

}