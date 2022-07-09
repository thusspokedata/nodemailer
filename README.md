# seting-up-nodemailer

<p>Install:</p>

```bash
npm install nodemailer 

```

on index.js route:


```js
const router = require("express").Router();
const nodemailer = require('nodemailer');
require("dotenv/config");

router.post("/send-email", (req, res, next) => {
  let { email, subject, message } = req.body;
  let transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "antonio.django80@gmail.com",
      pass: process.env.EMAILPASSWORD,
    },
  })
  transporter
    .sendMail({
      from: '"My Awesome Project " <antonio.django80@gmail.com>',
      to: email,
      subject: subject,
      text: message,
      html: `<b>${message}</b>`,
    })
    .then((info) => res.render("message", { email, subject, message, info }))
    .catch((error) => console.log('Error Occurs!'));
});

```

on index.hbs:


```html

<h1>NODEMAILER</h1>

<form action="/send-email" method="post">
  <label for="">Email</label>
  <input type="email" name="email" id="">
  <label for="">Subject</label>
  <input type="text" name="subject" id="">
  <label for="">Message</label>
  <textarea type="text" name="message" id=""></textarea>
  <button type="submit">Submit</button>
</form>

```

on message.hbs

```html

<h1>Email sent</h1>
<h2>Email</h2>
{{email}}
<h2>Subject</h2>
{{subject}}
<h2>Message</h2>
{{message}}

```


