const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'secret123';
const {asyncWrapper, asyncAuthWrapper} = require('../middleware/asyncjs')
const {createCustomError} = require('../errors/custom-error')


// POST register user - create account
const registerUser = asyncWrapper (async (req, res, next) => {
    const { firstname, lastname, email, password } = req.body
    if (!password || !email) {
        return next(createCustomError(`Email or password are not specified!`, 404));
    }

    const user = await User.findOne({ email: email })
    if (user) {
        return next(createCustomError(`User with this address email already exists!`, 404));

    }

    bcrypt.hash(password, 10)
        .then(async (hash) => {
            await User.create({
                firstname,
                lastname,
                email,
                password: hash,
            })
            .then((newUser) => {
                const maxAge = 3 * 60 * 60; // 3h in sec
                const token = jwt.sign({ id: newUser._id, email: newUser.email, group: newUser.group }, JWT_SECRET, { expiresIn: maxAge });

                res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 }); // maxAge 3h in milisec

                res.status(200).json({newUser, msg: 'Succesfully registered!'})
            })
            .catch((error) => {
                return next(createCustomError(`Erorr: ${error}!`, 500));
            })
        })
        .catch((error) => {
            return next(createCustomError(`Fatal error! User not created. Error: ${error}`, 400));
        })
}
)
// POST login user - log in to the account
const loginUser = asyncWrapper (async (req, res, next) => {
    const { email, password } = req.body;
    
    if (!email || !password) {
        return next(createCustomError(`Email or password are not specified!`, 404));
    }
    const user = await User.findOne({ email: email })
    if (!user) {
        return next(createCustomError(`User with specified email does not exist!`, 404));
        // return res.status(404).json({ msg: `User with specified email does not exist!` });
    }

    bcrypt.compare(password, user.password).then((result) => {
        if (result) {
            const maxAge = 3 * 60 * 60;
            const token = jwt.sign(
                { id: user._id, email: user.email, role: user.group },
                JWT_SECRET,
                {
                    expiresIn: maxAge
                }
            );

            res.cookie("jwt", token, {
                httpOnly: true,
                maxAge: maxAge * 1000,
            });

            res.status(200).json({result, msg: 'Succesfully log in!'})
        } else {
            return next(createCustomError(`Email or password are not invalid!`, 400));
        }
    })
    .catch((error) => {
        return next(createCustomError(`Error: ${error}!`, 500)); 
    });
})

// GET user - find user (admin group)
const getUser = asyncAuthWrapper(async (req, res, next) => {

    const token = req.cookies['jwt']
    console.log(token)
    console.log(res.cookie)
    const {id:userId} = req.params;
    const user = await User.findOne({_id: userId});
    console.log(req.params);
    if (!user) {
        return next(createCustomError(`User not found`, 404));
        // return res.status(404).json({msg: `User not found`})
    }
    res.status(200).json({user})
})

// GET userToken - check if user have cookie token

const getAuthToken = asyncWrapper(async (req, res, next) => {
    const token = req.cookies['jwt']
    token === undefined ? (res.json({userAuthorized: false, msg: 'not authorized'})):(res.json({ userAuthorized: true, msg: 'User already authorized', token: token }));
});

const logoutUser = asyncWrapper(async (req, res, next) => {
    const token = req.cookies['jwt'];
    console.log(token);
    if (token === undefined)
        return res.status(401).json({ msg: 'Invalid token!' });
    res.clearCookie('jwt');
    res.end();
});

// GET users - user list (admin group)
const getUsers = asyncWrapper( async (req,res, next) => {
    const users = await User.find({})
    res.status(200).json(users);
})

// PATCH user - update user
const updateUser = asyncWrapper(async (req, res, next) => {
    const { id: userId } = req.params
    const user = await User.findOneAndUpdate({ _id: userId }, req.body, {
        new: true,
        runValidators: true,
    })
    if (!user) {
        return next(createCustomError(`User with specified id not found: ${userId}`, 500));
        // return res.status(500).json({msg: `User with specified id not found: ${userId}`})
    }
    res.status(200).json({user})
})

// DELETE user - delete user account 
const deleteUser = asyncWrapper (async (req, res, next) => {
    const { id: userId } = req.params
    const user = await User.findOneAndDelete({ _id: userId });
    if (!user) {
        return next(createCustomError(`Specified user id: ${userId} not found`, 500));
        // return res.status(500).json({msg: `Specified user id: ${userId} not found`})
    }
    res.status(200).json({msg: `User ${userId} deleted!`})
})

module.exports = { registerUser, loginUser, getUser, getUsers, updateUser, deleteUser, getAuthToken, logoutUser};

