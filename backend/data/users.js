import bcrypt from "bcryptjs"

const users=[
    {
        name:"Admin User",
        email:"admin@example.com",
        password:bcrypt.hashSync("12345",10),
        isAdmin:true
    },
    {
        name:"Normal User",
        email:"normal@example.com",
        password:bcrypt.hashSync("12345",10),
    },
    {
        name:"Nishan Thapa",
        email:"thapanishan9@gmail.com",
        password:bcrypt.hashSync("12345",10),
        isAdmin:true
    }
]

export default users