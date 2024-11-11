import { useParams } from "react-router-dom"

export default function MailboxDetails( props ) {
  const { mailboxId } = useParams()

  const singleMailbox = props.mailboxes.find((mailbox) => mailbox._id === Number(mailboxId))
  
  if (!singleMailbox) {
    return <h2>Mailbox Not Found</h2>
  }
  return(
    <>
    <h2>Mailbox # {singleMailbox._id}</h2>
    <dl>
      <dt>Box Number: {singleMailbox._id}</dt>
      <dt>Box Holder: {singleMailbox.boxholder}</dt>
      <dt>Box Size: {singleMailbox.boxSize}</dt>
    </dl>
    </>
  )
}