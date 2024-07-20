import Link from 'next/link'

export default function React_Projects() {
    return (

        <div className="text-center column-container">
            <div className='card'>
                <h2 className="text-xl font-bold">React Projects</h2>

                <h2>
                    <li>
                        <Link className="link" href="/ToDoList">🆕 ✔️ Todo list</Link>!
                    </li>
                </h2>

            </div>
        </div>


    );

}