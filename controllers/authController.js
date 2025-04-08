import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
    try {
        const {email, password} = req.body;

        const existingUser = await User.findOne({email});
        if(existingUser)
            return res.status(400).json({message: "User already exists"});

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({email, password: hashedPassword});
        await user.save();

        res.status(201).json({message: "User created successfully"});
    }
    catch(err) {
        res.status(500).json({message: "Server error"});
    }
};

export const login = async (req, res) => {
    try {
        const {email, password} = req.body;

        const user = await User.findOne({email});
        if(!user)
            return res.status(400).json({message: "Invlaid credentials"});

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch)
            return res.status(400).json({message: "Invalid credentials"});

        const token = jwt.sign(
            {userId: user._id},
            process.env.JWT_SECRET,
            {expiresIn: "1h"}
        );

        res.status(200).json({token});
    }
    catch(err) {
        res.status(500).json({message: "Server error"});
    }
};