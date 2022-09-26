import  Users from "../models/users.js";



export const deleteUser = async (req, res) => {
  try {
    await Users.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel Deleted Successfully");
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (req, res) => {
  try {
    const updatedUser = await Users.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await Users.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

export const getUsers= async (req, res, next) => {
  try {
    const users = await Users.find();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};
