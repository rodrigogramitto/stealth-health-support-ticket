import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/navbar/Navbar.jsx';
import TicketForm from './components/ticketForm/TicketForm.jsx';
import AdminPage from './components/adminPage/AdminPage.jsx';

function App() {
  const [view, setView] = useState(0)

  const renderPage = () => {
    if (view === 0) {
      return <TicketForm changeView={changeView} />
    } else if (view  === 1) {
      return <h1>Your Ticket has been submitted</h1>
    } else if (view === 2) {
      return <AdminPage />
    }
  }

  const changeView = (int) => {
    setView(int);
  }

  return (
    <div>
          <Navbar changeView={changeView} />
          {renderPage()}
    </div>
  )
}

export default App
