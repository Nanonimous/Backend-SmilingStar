import { db1 } from '../config/db.js';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const SECRET_KEY = process.env.JWT_SECRET; // ✅ use a fallback if env is missing

export const login = async (newEnquiry) => {
    const { username, password } = newEnquiry;
    const result = await db1.query('SELECT * FROM admins WHERE username = $1', [username]);

    if (result.rows.length === 0) {
        throw new Error("Invalid credentials");
    }

    const user = result.rows[0];
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        throw new Error("Invalid credentials");
    }

    const token = jwt.sign({ userId: user.admin_id }, SECRET_KEY, { expiresIn: '1h' });
    console.log(token);
    return {
        jwtToken: token,
        userId: user.admin_id
    };
};
