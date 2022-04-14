import HttpError from "../models/http-error";
import Organization from "../models/organization";
import Leader from "../models/leader";

const register = async (req, res, next) => {
  const { name, email, handle, adminId } = req.body;
  //check to see if we dont already have the handle in use...
  //might have to do a separate path for this check...
  let existingOrg;
  //check if email is already in use
  try {
    existingOrg = await Organization.findOne({ email: email });
  } catch (err) {
    const error = new HttpError(
      "Creating new organization failed. Try again later.",
      500
    );
  }
  if (existingOrg) {
    const error = new HttpError(
      "Creating organization failed. Email already in use by an organization.",
      422
    );
    return next(error);
  }
  //check if handle is already in use
  try {
    existingOrg = await Organization.findOne({ handle: handle });
  } catch (err) {
    const error = new HttpError(
      "Creating new organization failed. Try again later.",
      500
    );
  }
  if (existingOrg) {
    const error = new HttpError(
      "Creating organization failed. Gipp Handle already in use by an organization.",
      422
    );
    return next(error);
  }

  //find the admin creating this organization
  let admin;
  try {
    admin = await Leader.findById(adminId);
  } catch (err) {
    const error = new HttpError(
      "Creating new organization failed. Try again later.",
      500
    );
  }
  if (!admin) {
    const error = new HttpError(
      "Creating organization failed. Invalid credentials provided",
      422
    );
    return next(error);
  }
  const createdOrg = new Organization({
    name,
    email,
    handle,
    admins: [admin._id],
  });

  try {
    await createdOrg.save();
  } catch (err) {
    const error = new HttpError(
      "Creating new organization failed. Try again later.",
      500
    );
    return next(error);
  }
  res
    .status(201)
    .json({ organization: createdOrg.toObject({ getters: true }) });
};

exports.register = register;
