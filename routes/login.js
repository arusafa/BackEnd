const express =require("express")
const routes = express.Router()
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = require('../models/user_db');



routes.post('/login', (req, res) => {
    const { email, password } = req.body;
    User.findOne({ email,password }).then(user => {
      if (!user) {
        return res.status(404).json({ emailoRPasswordNotFound: "Email  Or Password  not found" });
      }else{
        return res.status(200).json({message:'Succesfully login'})
      }
      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          // User matched
          // Create JWT Payload
          const payload = {
            id: user.id,
            name: user.name
          };
          // Sign token
          jwt.sign(
            payload,
            keys.secretOrKey,
            {
              expiresIn: 31556926 // 1 year in seconds
            },
            (err, token) => {
              res.json({
                success: true,
                token: "Bearer " + token
              });
            }
          );
        } else {
          return res
            .status(400)
            .json({ passwordincorrect: "Password incorrect" });
        }
      });
    });
  });

module.exports=routes