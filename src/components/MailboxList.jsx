import { Link } from "react-router-dom";

export default function MailboxList ( props ) {

  return (
    <>
    <h2>Mailbox List</h2>
    <ul>
      {props.mailboxes.map((currentMailbox) =>(
        <li key={currentMailbox._id} className="mail-box">
        <Link to={`/mailboxes/${currentMailbox._id}`}>  
        Mailbox {currentMailbox._id} </Link>
          </li>
      ))}
    </ul>
    </>
  )
}