// src/App.jsx
import './App.css'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import MailboxForm from './components/MailboxForm';
import MailboxList from './components/MailboxList';
import { useState } from 'react';

const initialState = [
  {_id: 1,
  boxSize: 'Large',
  boxholder: 'Rachel',},
  {_id: 2,
  boxSize: 'Medium',
  boxholder: 'Jessica',},
]; 

const App = () => {
  const [mailboxes, setMailboxes] = useState(initialState)
  
  const addMailbox = (newMailbox) => {
    newMailbox._id = mailboxes.length + 1
    setMailboxes([...mailboxes, newMailbox])
  }
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<main><h1>Post Office</h1></main>}/>
        <Route path='/mailboxes' element={<MailboxList mailboxes={mailboxes}/>}/>
        <Route path='/new-mailbox' element={<MailboxForm addMailbox={addMailbox}/>}/>

        <Route path='/mailboxes/:mailboxId' element={<h2>Mail Box Details</h2>}/>
      </Routes>
    </>
  )
};

export default App;
