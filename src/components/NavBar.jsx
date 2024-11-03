import { Link } from 'react-router-dom'
export default function NavBar(){
    return(
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/mailboxes'>Mailboxes</Link>
            <Link to='/mailboxes/new'>New Mailbox</Link>
        </nav>
    )
}