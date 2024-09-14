import Link from 'next/link'

export default function Java_Projects() {
    return (


            <div className='card'>
                <h2 className="text-xl font-bold">Java Projects</h2>

                <h2>
                    <li>
                        <Link className="link" href="/JavaProjects/BugShooter"> 🐜 BugShooter </Link>!
                    </li>
                    <li>
                        <Link className="link" href="/JavaProjects/RodentReboot"> 🐀 Rodent Reboot</Link>!
                    </li>
                </h2>

            </div>
     
    );

}