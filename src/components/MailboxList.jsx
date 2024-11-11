export default function MailboxList ( props ) {
  return (
    <>
    <h2>Mailbox List</h2>
    <ul>
      {props.mailboxes.map((currentMailbox) =>(
        <li key={currentMailbox._id}>Mailbox {currentMailbox._id}</li>
      ))}
    </ul>
    </>
  )
}