const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/ruzhi")
let schema = mongoose.Schema

let user = new schema({
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    url: Array,
    menus: Array
})
const User = mongoose.model("user", user)
exports.User = User