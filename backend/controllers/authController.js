import User from "../models/User";

export const signup = async(req, res) =>{
    try{
        const {name, email, password} = req.body;

        //validations
        if(!name || !email || !password){
           return ('Input all fields');
        }

        //check for user
        const checkUser = await User.findOne({email});
        if (!checkUser){
            return('User not found');
        }

        //hashing and salting of passwords
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        //create new user
        const user = new User({
            name: user.name,
            email: user.email,
            password:hash
        })
        user.save();
        res.status(200).send({success:true, message: 'User registered Successfuly'});
    }catch(error){
        res.status(404).send({success:false, message: 'server error'});
        console.log(error);
    }
};
export const login = async(req, res) =>{};