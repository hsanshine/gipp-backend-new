import HttpError from "../models/http-error";
import Leader from "../models/leader";

const signup = async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  let existingLeader;
  try {
    existingLeader = await Leader.findOne({ email: email });
  } catch (err) {
    const error = new HttpError("Signing up failed try again later", 500);
    return next(error);
  }
  if (existingLeader) {
    const error = new HttpError(
      "Signing up failed. Email already in use.",
      422
    );
    return next(error);
  }
  const createdLeader = new Leader({
    firstName,
    lastName,
    email,
    password,
  });

  try {
    await createdLeader.save();
  } catch (err) {
    const error = new HttpError("Signing up failed,try again later", 500);
    return next(error);
  }
  res.status(201).json({ leader: createdLeader.toObject({ getters: true }) });
};

const signin = async (req, res, next) => {
  const { email, password } = req.body;
  let existingLeader;

  try {
    existingLeader = await Leader.findOne({ email: email });
  } catch (err) {
    const error = new HttpError(
      "Logging in failed. Please try again later.",
      500
    );
  }
  if (!existingLeader || existingLeader.password !== password) {
    const error = new HttpError(
      "Invalid credentials, could not log you in",
      401
    );
    return next(error);
  }
  //we also have to find your organization...should have stored it at registration...
  res.json({
    message: "Logged in successfully",
    user: existingLeader.toObject({ getters: true }),
  });
};
exports.signup = signup;
exports.signin = signin;
