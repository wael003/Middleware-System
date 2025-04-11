const generateToken = require('../utils/generateToken')
const users = [
  { username: 'admin', password: '1234', role: 'admin' },
  { username: 'user', password: '1234', role: 'user' }
];

exports.getUsers = (req , res)=>{
    res.json(users)

}

exports.LogInUser = (req  , res)=>{
    const {id,name} = req.body;
    const user = users.find((user) => user.id === id && user.name === name);
    if(user){
        const token = generateToken(user)
        res.json({token})
        }
        else{
            res.status(401).json({message : 'invalid id or name '})
            }

}
