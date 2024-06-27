const bodyParser = require('body-parser');
const libExpress = require('express');
const libMongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors')


const app = libExpress();
app.use(bodyParser.json());
app.use(cors());

const connection = libMongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("mongodb connected");
})

const mobileSchema = new libMongoose.Schema({
    name: { type: String, required: true },
    price: { type: String, required: true },
    os: { type: String, required: true },
    rating: { type: Number, required: true },
    storage: { type: String, required: true },
    color: { type: String, required: true },
    battery: { type: String, required: true },
    processor: { type: String, required: true },
    primary_camera: { type: String, required: true },
    front_camera: { type: String, required: true },
    Zoom: { type: String, required: true }
})



const Mobile = libMongoose.model("Mobile", mobileSchema);

const userSchema = new libMongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String,enum:["admin","user"], default:"user" },
})

const User = libMongoose.model("User",userSchema);




app.get('/mobile', async (req, res) => {
    const mobiles = await Mobile.find();
    if (mobiles) {
        res.status(200).json({ mobiles: mobiles });
    } else {
        res.status(400).json({ msg: "mobiles not found" });
    }
})

app.post('/register',async(req, res)=>{
    const {name, email, password}= req.body;
    try{
        const userExist = await User.findOne({email})
        if(!userExist){
            const user = new User({name, email, password});
            const newUser = await user.save();
            console.log("user Saved Successfully");
            res.status(200).json({msg:"user saved successfully"});
        }
        else{
            console.log("user already registered");
            res.status(400).json({msg:"user Already registered"});
        }
    }
    catch(e){
        console.log("error addingg User",e);
        res.status(400).json({msg:"error adding User",error:e});
    }


})

app.post('/add/mobile', async (req, res) => {
    const { name, price, os, rating, storage, color, battery, processor, primary_camera, front_camera, Zoom } = req.body;

    try {
        const mobile = new Mobile({ name, price, os, rating, storage, color, battery, processor, primary_camera, front_camera, Zoom })
        const newMobile = await mobile.save();
        console.log("mobile added successfully")
        res.status(200).json({ msg: "mobile added successfully", mobile: newMobile });
    }
    catch (e) {
        console.log("error adding mobile");
        res.status(400).json({ msg: "Error adding mobile" });
    }
})


app.put('/edit/mobile/:id', async (req, res) => {
    const id = req.params.id;
    const newMobile = req.body;

    console.log(id);
    try {
        const mobile = await Mobile.findByIdAndUpdate(id, newMobile);
        if (!mobile) {
            console.log("mobile not found");
            res.status(400).json({ msg: "mobile not found" });
        } else {
            console.log("mobile updated successfully");
            res.status(200).json({ msg: "mobile updated successfully", mobile: newMobile });
        }
    }
    catch (e) {
        console.log("error updating mobile");
        res.status(400).json({ msg: "Error updating mobile" });
    }
})

app.delete('/delete/:id', async (req, res) => {
    const id = req.params.id;
    try {

        const deletedMobile = await Mobile.findOneAndDelete({_id : id});
        if (!deletedMobile) {
            console.log("error Deleting Mobile ");
            res.status(400).json({ msg: "Error deleting mobile" });
        } else {
            console.log("mobile deleted successfully");
            res.status(200).json({ msg: "mobile deleted successfully" });
        }
    }catch(e){
        console.log("error",e);
        res.status(400).json({msg:'internal server Error'});
    }
})


app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    console.log(email);
    console.log(password);
    try {
        const user = await User.findOne({email});
        console.log(user);
        if(!user){
            console.log("user not found");
            res.status(400).json({msg:"user not found"});
        }
        if(password != user.password){
            console.log("incorrect password");
            res.status(400).json({msg:"incorrect passworrd"});
        }
        else{
            console.log("login successfully");
            res.status(200).json({msg:"user login successfully",user:user});
        }
    }
    catch (e) {
        console.log("internal server error while login");
        res.status(400).json({ msg: "internal server error while login" });
    }
})



app.listen(8000, () => {
    console.log("server is started at port 8000");
})