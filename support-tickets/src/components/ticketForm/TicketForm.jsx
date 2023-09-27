import react, { useState } from 'react';
import SubmitButton from '../submitButton/submitButton.jsx';


const TicketForm = ({ changeView }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');

  const updateName = (e) => {
    e.preventDefault()
    setName(e.target.value);
  }

  const updateEmail = (e) => {
    e.preventDefault()
    setEmail(e.target.value);
  }

  const updateSubject = (e) => {
    e.preventDefault()
    setSubject(e.target.value);
  }

  const updateDescription = (e) => {
    e.preventDefault()
    setDescription(e.target.value);
  }
  return (
    <div id="ticket-form">
      <h1>Support Ticket Form</h1>
      <form className="form-body">
        <div className="info-fields">
          <input type="text" placeholder="Name" className="input input-bordered w-full max-w-xs" onChange={updateName} />
          <input type="text" placeholder="Email" className="input input-bordered w-full max-w-xs" onChange={updateEmail}/>
          <input type="text" placeholder="Subject" className="input input-bordered w-full max-w-xs" onChange={updateSubject}/>
        </div>
        <div className="ticket-body">
          <div class="form-control">
            <label class="label">
            </label>
            <textarea class="textarea textarea-bordered h-24" placeholder="Problem Description" onChange={updateDescription}></textarea>
            <label class="label">
            </label>
          </div>
        </div>
      </form>
      <SubmitButton name={name} email={email} subject={subject} description={description} changeView={changeView} />
    </div>
  )
};

export default TicketForm;