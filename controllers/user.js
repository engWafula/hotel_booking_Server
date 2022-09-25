// import User from "../models/user.js";



// export const deleteUser = async (req, res) => {
//   try {
//     await User.findByIdAndDelete(req.params.id);
//     res.status(200).json("Hotel Deleted Successfully");
//   } catch (error) {
//     next(error);
//   }
// };

// export const updateUser = async (req, res) => {
//   try {
//     const updatedUser = await Hotel.findByIdAndUpdate(
//       req.params.id,
//       {
//         $set: req.body,
//       },
//       { new: true }
//     );
//     res.status(200).json(updatedUser);
//   } catch (error) {
//     next(error);
//   }
// };

// export const getUser = async (req, res) => {
//   try {
//     const user = await Hotel.findById(req.params.id);
//     res.status(200).json(user);
//   } catch (error) {
//     next(error);
//   }
// };

// export const getUsers= async (req, res, next) => {
//   try {
//     const users = await User.find();
//     res.status(200).json(users);
//   } catch (error) {
//     next(error);
//   }
// };
