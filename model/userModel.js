const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
        family_name: { type: String },
        name: { type: String },
        given_name: { type: String },
        email: { type: String },
        locale: { type: String },
        picture: { type: String },
        sub: { type: String },
        email_verified: { type: Boolean, default: false }
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('User', userSchema)
