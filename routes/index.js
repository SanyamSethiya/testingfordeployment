var express = require('express');
var router = express.Router();
const User = require('./users');
const { default: mongoose } = require('mongoose');




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('hello');
});
router.get('/register', function(req, res, next) {
  res.render('index');
});


router.post('/submit-form', async (req, res) => {
  try {
    // Extract form data from the request body
    const { name, email, password } = req.body;

    // Create a new User instance
    const newUser = new User({
      name,
      email,
      password,
    });

    // Save the user to the database
    await newUser.save();

    // Log the user data to the console
    console.log('New user created:', newUser);

    // Respond with a success message or redirect to another page
    res.send('Form submitted successfully');
  } catch (error) {
    console.error('Error submitting form:', error);
    res.status(500).send('Internal Server Error');
  }
});


module.exports = router;
