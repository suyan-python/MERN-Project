const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) =>
{
    const token = req.header('Authorization');

    if (!token)
    {
        return res.status(401).json({ message: "No Token Stored" });
    }

    const jwtToken = token.replace("Bearer", "").trim();
    console.log('Token from authMiddleware', jwtToken);

    try
    {
        const isVerified = jwt.verify(jwtToken, 'Rate_My_Professor');
        console.log(isVerified);

        next();
    } catch (error)
    {
        return res.status(401).json({ message: "Unauthorized request", error });
    }
}
module.exports = authMiddleware;