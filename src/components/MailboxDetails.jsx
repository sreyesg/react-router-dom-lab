import { useParams } from "react-router-dom"

export default function MailboxDetails( props ) {
  const { mailboxId } = useParams()
  // console.log(props)

  const singleMailbox = props.mailboxes.find((mailbox) => mailbox._id === Number(mailboxId))
  
  return(
    <>
    <h2>Mailbox Details</h2>
    <dl>
      <dt>Box Number:</dt>
      <dd></dd>
      <dt>Box Holder:</dt>
      <dd></dd>
      <dt>Box Size:</dt>
      <dd></dd>
    </dl>
    </>
  )
}