export const basic = (user: String, email: String, message: String) => {
  return `
  <div class="container" style="font-size:16px;">
  <p>Hello there! </p>
  <p>You have received a new message from <b> ${user} </b> (${email})</p>
  <div>
  <p style="background:#e8e8e8; border: 0.5px black; margin: 0; padding: 20px; padding-left: 2.25%; padding-right: 6.25%; width: 50%; font-size: 17px; font-weight: 400; line-height: 160%;">
    ${message}
  </p>
  </div>
  <p style="cursor:pointer; font-size: 17px;"><a style="text-decoration:none; color: #127DB3; font-weight: bold;" href="mailto:${email}">Click here to reply</a></p><br>
  <h4> See you soon! </h4>
  <hr>
  This e-mail was sent from <b>TS Mailer</b> 😃
  </div>
  `;
};

