import jwt from 'jsonwebtoken';
import bcrpyt from 'bcryptjs';
import User from '../models/UserSchema.js';
import Doctor from '../models/DoctorSchema.js';



// verify tokens
const generateToken = (user) => {
    return jwt.sign(
        {
        id:user._id, role: user.role 
        },
        process.env.JWT_SECRET,
        {
        expiresIn:'15d'
        }
    
    )
}


// register
export const register = async (req, res) => {

    const { email, password, name, role, photo, gender } = req.body;

    try {

        let user = null

        if (role === 'patient') {
            user = await User.findOne({ email })
        }

        else if (role === 'doctor') {
            user = await Doctor.findOne({ email })
        }

        //check if user exist 

        if (user) {
            return res.status(400).json({ message: "User already exist." })
        }

        //hash pass 

        const salt = await bcrpyt.genSalt(10)
        const hashPassword = await bcrpyt.hash(password, salt)

        if (role === 'patient') {
            user = new User({
                name,
                email,
                password: hashPassword,
                photo,
                gender,
                role
            });

        }


        if (role === 'doctor') {
            user = new Doctor({
                name,
                email,
                password: hashPassword,
                photo,
                gender,
                role
            });

        }

        await user.save();
        res.status(200).json({ success: true, message: "User Successfully Created " });


    } catch (err) {

        res.status(500).json({ success: false, message: "Internal server error, Try again" });

    }
};




export const login = async (req, res) => {
    const { email } = req.body;

    try {

        let user = null;

        const patient = await User.findOne({ email });
        const doctor = await Doctor.findOne({ email });

        if (patient) {
            user = patient;
        }

        if (doctor) {
            user = doctor;
        }

        // check if user exist  or not

        if(!user) {
            return res.status(404).json({ message: "User not found." })
        }

        // compare password 

        const isPasswordMatch = await bcrpyt.compare(req.body.password, user.password)

        if (!isPasswordMatch) {
            return res.status(400).json({status: false, message: "Invalid credentials" })
        }

        //create token

        const token = generateToken(user);

      const {password, role, appointments, ...rest } = user._doc;

    res.status(200).json({status: true, message: "Successfully login", token, data:{ ...rest }, role });

    } catch (err) {
        return res.status(500).json({status: false, message: "Failed to login" })
    }
};
