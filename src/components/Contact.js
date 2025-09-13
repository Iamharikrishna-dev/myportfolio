import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

  const Contact = () => {
    const form = useRef();
    const [buttonState, setButtonState] = useState(''); // '', 'processing', 'success', 'error'

  const sendEmail = (e) => {
    e.preventDefault();
    setButtonState('processing'); // Show spinner

    emailjs
       .sendForm(
        'service_ozaqk7d', // Replace with your EmailJS service ID
        'template_wl362kh', // Replace with your EmailJS template ID
        form.current,
        'JyKYbdWMJzXAwtVV7' // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          setButtonState('success'); // Change button to green
          setTimeout(() => {
            setButtonState(''); // Reset to initial state
            form.current.reset(); // Clear the form
          }, 2000);
        },
        (error) => {
          setButtonState('error'); // Change button to red
          setTimeout(() => {
            setButtonState(''); // Reset to initial state
          }, 2000);
        }
      );
  };

  return (
    <section id="contact" className="glassmorphism-section">
      <h2>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="fromname" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="fromemail" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <button
          type="submit"
          className={`submit-btn ${buttonState.loading ? 'loading' : ''}`}
          style={{ backgroundColor: buttonState.color }}
        >
          {buttonState === 'processing' && <span className="spinner"></span>}
          {buttonState === 'success'
            ? 'Send Successful'
            : buttonState === 'error'
            ? 'Send Failed'
            : 'Send'}
        </button>
      </form>
    </section>
  );
};

export default Contact;