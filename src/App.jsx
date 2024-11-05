// src/App.jsx
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import MailboxForm from './components/MailboxForm';
import { useState } from 'react';


const App = () => {
  const [mailboxes, setMailboxes] = useState([])
  
  const addMailbox = (newMailbox) => {
    newMailbox._id = mailboxes.length + 1
    setMailboxes([...mailboxes, newMailbox])
  }
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<main><h1>Post Office</h1></main>}/>
        <Route path='/mailboxes' element={<h2>All Mailboxes</h2>}/>
        <Route path='/new-mailbox' element={<MailboxForm addMailbox={addMailbox}/>}/>

        <Route path='/mailboxes/:mailboxId' element={<h2>Mail Box Details</h2>}/>
      </Routes>
    </>
  )
};

export default App;
