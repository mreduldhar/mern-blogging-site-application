const jwt = require("jsonwebtoken");

exports.CreateJWT = (payload, secretKey, expiresIn) => {
    if(typeof payload !== "object" || !payload){
        throw new Error("Payload must be a non empty object")
    }
    if(typeof secretKey !== "string" || !secretKey){
        throw new Error("Secret key must be non empty")
    }
    try {
        const token = jwt.sign(payload, secretKey, {expiresIn});
        return token;
    } catch (error) {
        console.log("Failed to generate token", error);
        throw error
    }
}