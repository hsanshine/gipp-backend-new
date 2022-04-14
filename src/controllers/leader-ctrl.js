import HttpError from "../models/http-error";
import Leader from "../models/leader";

const signup = async (req, res, next) => {
  const { name, email, password } = req.body;
  const createdLeader = new Leader({
    name,
    email,
    password,
  });

  try {
    await createdLeader.save();
  } catch (err) {
    const error = new HttpError("Signing up failed ,try again later", 500);
    return next(error);
  }
  res.status(201).json({ leader: createdLeader.toObject({ getters: true }) });
};

exports.signup = signup;
