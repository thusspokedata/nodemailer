// require("dotenv/config");
// const router = require("express").Router();
// const nodemailer = require('nodemailer');
// // // const hbs = require('nodemailer-express-handlebars')


// router.post("/send-email", (req, res, next) => {
//   let { email, subject, message } = req.body;
//   let transporter = nodemailer.createTransport({
//     service: "Gmail",
//     auth: {
//       user: "antonio.django80@gmail.com",
//       pass: process.env.EMAILPASSWORD,
//     },
//   })
//   transporter
//     .sendMail({
//       from: '"My Awesome Project " <antonio.django80@gmail.com>',
//       to: email,
//       subject: subject,
//       text: message,
//       html: `<b>${message}</b>`,
//     })
//     .then((info) => res.render("message", { email, subject, message, info }))
//     .catch((error) => console.log('Error Occurs!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!'));
// });

// module.exports = router;
