import express from "express";
import AuthenticationService from "../services/authentication-service";
import User, { IUser } from "../models/user";
import { Request, Response } from 'express';
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Not implemented yet.");
});

router.post("/register", (req: Request<{}, {}, IUser>, res: Response, next) => {
  try {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      password_confirmation: req.body.password_confirmation
    });
    user.register();
  }
  catch(e) { next(e); }
});

router.post("/login", (req, res, next) => {
  res.send("Not implemented yet.");
})

export default router;