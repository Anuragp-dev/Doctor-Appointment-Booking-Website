import User from "../models/UserSchema.js";
import Booking from "../models/BookingSchema.js";
import Doctor from "../models/DoctorSchema.js";





//  
export const updateUser = async (req, res) => {
    const id = req.params.id

    try {
        const updateUser = await User.findByIdAndUpdate(id, { $set: req.body }, { new: true });

        res.status(200).json({ success: true, message: "Successfully Updated", data: updateUser });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to Updated" });
    }
};





export const deleteUser = async (req, res) => {
    const id = req.params.id

    try {
        await User.findByIdAndDelete(id);

        res.status(200).json({ success: true, message: "Successfully deleted" });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to delete" });
    }
};



export const getSingleUser = async (req, res) => {
    const id = req.params.id

    try {
        const user = await User.findById(id).select("-password");

        res.status(200).json({ success: true, message: "User found", data: user });
    } catch (err) {
        res.status(404).json({ success: false, message: "No user found" });
    }
};



export const getAllUser = async (req, res) => {

    try {
        const users = await User.find({}).select("-password");

        res.status(200).json({ success: true, message: "User found", data: users });
    } catch (err) {
        res.status(404).json({ success: false, message: "Not user found" });
    }
};




export const getUserProfile = async (req, res) => {

    const userId = req.userId

    try {

        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        const { password, ...rest } = user._doc

        res.status(200).json({ success: true, message: "Profile info is getting", data: { ...rest } });

    } catch (error) {
        return res.status(500).json({ success: false, message: "Something went wrong" });
    }
};






export const getMyAppointments = async (req, res) => {
    try {

        // step 1 : retrieve appointments from booking for specific user
        const bookings = await Booking.find({ user: req.userId });

        // step 2 : extract doctor ids from appointments booking
        const doctorIds = bookings.map(el => el.doctor.id)

        // step 2 : retrieve doctors using doctor ids
        const doctors = await Doctor.find({ _id: { $in: doctorIds } }).select('-password');

        res.status(200).json({ success: true, message: "Appointment are getting", data: doctors });

    } catch (error) {

        return res.status(500).json({ success: false, message: "Something went wrong" });
    }
}
