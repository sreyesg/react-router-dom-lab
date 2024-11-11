import { useParams } from "react-router-dom"

export default function MailboxDetails( props ) {
  const { mailboxId } = useParams()

  const singleMailbox = props.mailboxes.find((mailbox) => mailbox._id === Number(mailboxId))
  
  return(
    <>
    <h2>Mailbox # {singleMailbox._id}</h2>
    <dl>
      <dt>Box Number:</dt>
      <dd>{singleMailbox._id}</dd>
      <dt>Box Holder:</dt>
      <dd>{singleMailbox.boxholder}</dd>
      <dt>Box Size: </dt>
      <dd>{singleMailbox.boxSize}</dd>
    </dl>
    </>
  )
}