import jwt from 'jsonwebtoken'

const userAuth = async (req, res, next) => {

    const { token } = req.headers;

   
    if (!token) {
        return res.json({ success: false, message: "Not Authorized. Login Again" })
    }

    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
     
        if (!req.body) {
            req.body = {}
        }
     
        if (tokenDecode.id) {
            req.body.userId = tokenDecode.id;
        } else {
            return res.json({ success: false, message: "Not Authorized. Login Again" })
        }

        next(); 

    } catch (err) {
        console.log(err.message);
        res.json({ success: false, message: err.message })
    }
}

export default userAuth;