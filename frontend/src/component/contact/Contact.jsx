import React from 'react';
import './contact.css'
function Contact() {
  return (
    < >
      <h1 style={{textAlign:'center'}}>Contact us</h1>
       <div className="contact" id='contact'>
        

        <div className="form-container">
     <form className="form-box">
      <h2>Get In Touch</h2>
       <div className="form-group">
         <label htmlFor="name">Name</label> <br />
         <input type="text" id="name" placeholder="Your name" />
       </div>
       <div className="form-group">
         <label htmlFor="email">Email</label><br />
         <input type="email" id="email" placeholder="you@example.com" />
       </div>
       <div className="form-group">
         <label htmlFor="message">Message</label><br />
         <textarea id="message" placeholder="What's on your mind?"></textarea>
       </div>
       <button className='submit-btn' type="submit">Send Message</button>
     </form>
       </div>
        <div className="contact-info">
          <h2>Contact info</h2>
          <a href="mailto:hello@sematha.com">
  <i className="fas fa-envelope"></i> hello@sematha.com
</a>

<a href="tel:+251934060939">
  <i className="fas fa-phone"></i> +251 934 060 939
</a>

       </div>
     </div>
    </>
  );
}

export default Contact;
