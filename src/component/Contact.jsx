import React from 'react'

export default function Contact() {
  return (
    
    <>
      <div class="container">
        <h1>Contact Me</h1>
        <form>
          <ul>
            <div class="detail">
              <li><label for="">FIRST NAME</label>
                <div><input type="text" id="name" name="fname" /></div>
              </li>
            </div>
            <div class="detail">
              <li><label for="">LAST NAME</label>
                <div><input type="text" id="Lname" name="lname" /></div>
              </li>
            </div>
            <div class="detail">
              <li><label for="">Email Address</label>
                <div><input type="email" id="email" name="email" /></div>
              </li>
            </div>
            <div class="detail">
              <li><label for="subject"><strong>Subject</strong></label>
                <div><input type="text" id="sub" name="sub" /></div>
              </li>
            </div>
            <div class="detail">
              <li> <label for="message"><strong>Message</strong></label>
                <div><textarea id="message" name="message"></textarea></div>
              </li>
            </div>
          </ul>
          <div>
            <button class="btn" type="submit">Send</button>
          </div>
        </form>
      </div>
    </>
  )
}
