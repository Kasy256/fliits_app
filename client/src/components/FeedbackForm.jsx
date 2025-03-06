import React, { useState } from 'react';
import '../styles/Feedbackform.css';
import emailjs from 'emailjs-com'; 
import {useNavigate} from 'react-router-dom';

const FeedbackForm = () => {
  const [name, setName] = useState('');
  const[email, setEmail] = useState('');
  const [type, setType] = useState('Host');
  const [feedback, setFeedback] = useState('');
  const [timeout, setTimeout] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const feedbackData = {
      name,
      email,
      type,
      feedback
    };

   
    emailjs.send('service_nk1qvbm', 'template_a70thfe', feedbackData, 'a3FkzaioEbnD-_GJt')
      .then((response) => {
        console.log('Feedback sent successfully:', response);
        alert('Thank you for your feedback!');
        setTimeout(() => {
          navigate('/');
        }, 100)
      })
      .catch((error) => {
        console.error('Error sending feedback:', error);
        alert('Oops, something went wrong! Please try again.');
        setLoading(false);
      });
  };

  return (
    <div className="feedback-page">
      <form onSubmit={handleSubmit} className='feedback-container'>
        <div>
          <h3 className='feedback-title'>Review Form</h3>
          <label htmlFor="name">Name:</label>
          <input
            className='feedback-input'
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label htmlFor="email">Email:</label>
          <input
            className='feedback-input'
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="Type">Type:</label>
          <select
            id="Type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
          >
            <option value="Host">FLiiTS Host</option>
            <option value="Rider">FLiiTS Rider</option>
          </select>
        </div>
        <div>
          <label htmlFor="feedback">Feedback:</label>
          <textarea
            id="feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
          />
        </div>
        <button type="submit" className='feedback-button' disabled={loading} >
        {loading ? 'Submitting...' : 'Submit Feedback'}
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
