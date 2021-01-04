import React from 'react';
import emailjs from 'emailjs-com';

export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('SERVICE_ID', 'TEMPLATE_ID', e.target, 'USER_ID')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    
    e.target.reset();
  }

  return (
    // <div>
    //   <div>
    //     <h1>Contact Us</h1>
    //     </div>
    //     <div>
    // <form className="contact-form" onSubmit={sendEmail}  style={{display: 'flex',flexDirection: 'column',height: '60vh', width: '70vw'}}>
    //   <input type="hidden" name="contact_number" />
    //   <label>Name</label>
    //   <input type="text" name="user_name" />
    //   <label>Email</label>
    //   <input type="email" name="user_email" />
    //   <label>Message</label>
    //   <textarea name="message" />
    //   <input type="submit" value="Send" />
    // </form>
    // </div>
    // </div>


<section id="contact">
  
  <h1 class="section-header">CONTACT</h1>
  
  <div class="contact-wrapper">

    
    <form class="form-horizontal" onSubmit={sendEmail}>
       
      <div class="form-group">
        <div class="col-sm-12">
          <input type="text" class="form-control" id="name" placeholder="NAME" name="user_name" value=""/>
        </div>
      </div>

      <div class="form-group">
        <div class="col-sm-12">
          <input type="email" class="form-control" id="email" placeholder="EMAIL" name="user_email" value=""/>
        </div>
      </div>

      <textarea class="form-control" rows="10" placeholder="MESSAGE" name="message"></textarea>
      
      <button class="btn btn-primary send-button" id="submit" type="submit" value="Send">
        <div class="button">
          <i class="fa fa-paper-plane"></i><span class="send-text">SEND</span>
        </div>
      
      </button>
      
    </form>
    

      <div class="direct-contact-container">

        <ul class="contact-list">
          <li class="list-item"><i class="fa fa-map-marker fa-2x"><span class="contact-text place">Seattle | WA</span></i></li>
          
          <li class="list-item"><i class="fa fa-phone fa-2x"><span class="contact-text phone"><a href="+1(123)456-7890" title="Give me a call">(123)456-7890</a></span></i></li>
          
          <li class="list-item"><i class="fa fa-envelope fa-2x"><span class="contact-text gmail"><a href="mailto:#" title="Send me an email">ajwietechaii@yahoo.com</a></span></i></li>
          
        </ul>

        <hr/>
        <ul class="social-media-list">
          <li><a href="https://github.com/BuddhaTheChef" target="_blank" rel="noopener noreferrer" class="contact-icon">
            <i class="fa fa-github" aria-hidden="true"></i></a>
          </li>
          <li><a href="https://github.com/BuddhaTheChef" target="_blank" rel="noopener noreferrer" class="contact-icon">
            <i class="fa fa-twitter" aria-hidden="true"></i></a>
          </li>
          <li><a href="https://github.com/BuddhaTheChef" target="_blank" rel="noopener noreferrer" class="contact-icon">
            <i class="fa fa-instagram" aria-hidden="true"></i></a>
          </li>
          <li><a href="https://github.com/BuddhaTheChef" target="_blank" rel="noopener noreferrer" class="contact-icon">
            <i class="fa fa-codepen" aria-hidden="true"></i></a>
          </li>
        </ul>
        <hr/>

      </div>
    
  </div>
  
</section>

  );

}