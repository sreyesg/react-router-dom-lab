// src/App.jsx
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar';


const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<main><h1>Post Office</h1></main>}/>
        <Route path='/mailboxes' element={<h2>All Mailboxes</h2>}/>
        <Route path='/new-mailbox' element={<h2>New Mailbox Form</h2>}/>
        <Route path='/mailboxes/:mailboxId' element={<h2>Mail Box Details</h2>}/>
      </Routes>
    </>
  )
};

export default App;
