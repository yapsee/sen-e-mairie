const mongoose = require('mongoose');
const uniqueValidator = require("mongoose-unique-validator");
const bcrypt = require("bcrypt");
const { Schema, model, Types} = mongoose;
const SALT_WORK_FACTOR = 10;

const UserSchema = new Schema({
    lastname: { type: String },
    firstname: { type: String },
    address: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profil: { type: Types.ObjectId, ref: "Profil"}
});
UserSchema.plugin(uniqueValidator);
/* UserSchema.pre('save', function (next){
    const user = this;
    if(!user.isModified("password")) 
        return next();

    bcrypt.genSalt(SALT_WORK_FACTOR,function (error,salt){
        if(error) 
            return next(error);
        bcrypt.hash(user.password, salt, function (error, hash) {
            if(error) 
                return next(error);
            user.password = hash;
            next();
        })
    });
}); */

UserSchema.pre("save", async function (next){
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

UserSchema.statics.login = async function (email, password) {
    const user = await this.findOne({email});
    if (user) {
        const auth = await bcrypt.compare(password, user.password);
        return auth ? user.toObject() : null ;
    }
    return null;
}

const UserModel = model("User", UserSchema);

module.exports = UserModel;