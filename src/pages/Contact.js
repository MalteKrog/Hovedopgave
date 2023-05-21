import React from 'react'
import './contact.css'
import {FaLinkedinIn} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'
import {FaTiktok} from 'react-icons/fa'

const Contact = () => {
  return (
    <footer id="kontakt-os">
        
        <div className='contact-os-container-footer'>
            <div className='footer-text'>
                <h3>Kontakt os endelig!</h3>
                <p className='footer-p-text'>Vi er altid klar til at hjælpe dig, om du har spørgsmål, feedback eller brug for et tilbud.</p>
            </div>
            <form className="contact-form-footer" method="POST"  action="contact-form-handle.php">
                <input name='name' type='text' className="form-control" placeholder='Skriv dit navn/firma' required />
                <br />
                <input name="email" type="email" className="form-control" placeholder="Your e-mail" required />
                <br/>
                <textarea name="message" className="form-control" rows="8" placeholder="Tell us about your project" required></textarea>
                <br/>
                <button type="submit" name="submit" id="btn" className="submit" value="Submit ">Submit</button>
            </form>
            <div className='links'>
              <p className='socials'>hej@nextlevelmedia.dk </p>
              <a className='link' href='https://www.linkedin.com/company/nextlvlmedia/jobs/'><FaLinkedinIn className='icon'/></a>
              <a className='link' href='https://www.instagram.com/nextlevelmedia.dk/'><FaTiktok className='icon'/></a>
              <a className='link' href='https://www.instagram.com/nextlevelmedia.dk/'><AiFillInstagram className='icon'/></a>
            </div>
        </div>
    </footer>
  )
}

export default Contact