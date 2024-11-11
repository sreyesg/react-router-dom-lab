export default function MailboxList ( props ) {
  return (
    <>
    <h2>Mailboxes</h2>
    <ul>
      {props.mailboxes.map((currentMailbox) =>(
        <li key={currentMailbox._id}>Boxholder: {currentMailbox.boxholder}</li>
      ))}
    </ul>
    </>
  )
}