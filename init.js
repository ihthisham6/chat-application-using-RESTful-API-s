const mongoose = require("mongoose");
const Chat = require("./models/chat.js");





main()
.then(() => {
    console.log("connection successful");
})
.catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}


let allChats = [
    {
    from: "neha",
    to:"priya",
    msg:"send me your exam sheets",
    created_at: new Date(),
},
{
    from: "aman",
    to:"toshan",
    msg:"send me your notes",
    created_at: new Date(),
},
{
    from: "ihthisham",
    to:"prajwal",
    msg:"send me your scores",
    created_at: new Date(),
},
{
    from: "amit",
    to:"sumit",
    msg:"send me your exam details",
    created_at: new Date(),
},
{
    from: "deelan",
    to:"keerthan",
    msg:"love you 3000",
    created_at: new Date(),
},
{
    from: "shreenidhi",
    to:"aditya",
    msg:"hello world!",
    created_at: new Date(),
},
];


Chat.insertMany(allChats);

