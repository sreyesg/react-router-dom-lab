import { Link } from 'react-router-dom'
export default function NavBar(){
    return(
        <nav>
            <Link>Home</Link>
            <Link>Mailboxes</Link>
            <Link>New Mailbox</Link>
        </nav>
    )
}