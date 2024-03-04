const mongoose = require('mongoose');

// Connect to the Database
try {

    const startTime = new Date().getTime();
    mongoose.connect("mongodb+srv://rayyan9290:F5gVQR2tpVKNKsul@cluster0.utbmxod.mongodb.net/PayTm-Clone").then(
        () => {
            const endTime = new Date().getTime();
            console.log("Connected to MongoDB")
            console.log("It took " + (endTime - startTime).toString() + " ms to connect to the Database.")
        }
    )

} catch (err) {
    console.log(err)
}

// Create a User Schema
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minLenght: [6, 'Password must be at least 6 characters long'],


    },
    firstName: {
        type: String,
        required: [true, 'First Name is required'],
        trim: true,
        maxLength: 40
    },
    lastName: {
        type: String,
        required: [true, 'Last Name is required'],
        trim: true,
        maxLength: 40

    }
});


// Create an Account Schema
const AccountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, // Reference to User model
        refer: 'User',
        required: true
    },

    balance: {
        type: Number,
        required: true
    }
})


// Creating a User Model
const User = mongoose.model('User', UserSchema);


// Creating an Account Model
const Account = mongoose.model('Account', AccountSchema);



// Exporting a User Model
module.exports = { User, Account }