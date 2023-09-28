import react from 'react';

const TextArea = ({ updateResponseBody}) => {

  const handleChange = (e) => {
    updateResponseBody(e.target.value);
  }
  return (
    <div className="ticket-body">
      <div class="form-control">
        <label class="label">
        </label>
        <textarea class="textarea textarea-bordered h-24" placeholder="Type response"
        onChange={handleChange}></textarea>
        <label class="label">
        </label>
      </div>
    </div>
  )
}

export default TextArea;