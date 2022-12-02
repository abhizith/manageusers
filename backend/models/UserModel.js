import mongoose from "mongoose";
 
const validateEmail = function(email) {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email);
  };

const User = mongoose.Schema({
    firstname:{
        type: String,
        required: [true, "Please enter FirstName" ],
        maxLength: [100, "Maximum 100 Characters" ]
    },
    lastname:{
        type: String,
        required: [true, "Please enter LastName" ],
        maxLength: 100
    },
    email:{
        type: String,
        required: [true, "Please enter Email" ],
        validate: [validateEmail, "Please enter a valid email"],
    },
});
 
export default mongoose.model('Users', User);