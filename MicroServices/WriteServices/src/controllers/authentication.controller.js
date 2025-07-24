import * as serverLogin from "../services/authentication.service.js";

export const loginUser = async (req, res) => {
    try {
        const newEnquiry = req.body;
        const out = await serverLogin.login(newEnquiry);
        res.status(200).json({
            message: "Login successful",
            token: out.jwtToken,
            userId: out.userId
        });
    } catch (err) {
        console.error("Controller login error:", err.message);
        res.status(401).json({ message: err.message || "Internal server error" });
    }
};


