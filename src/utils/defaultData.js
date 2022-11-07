const Roles = require('../models/roles.model')
const Users = require('../models/users.model')

const generateData = async() => {
  await Roles.bulkCreate([
    {name: "guest", id: "fef3a08d-2cec-4728-9745-7cbd2b37e557"}, 
    {name: "host", id: "97006fe0-4a35-47f4-bfbf-fc962e5fe500"}, 
    {name: "admin", id: "5ee551ed-7bf4-44b0-aeb5-daaa824b9473"}
  ],
   {validate: true});
   await Users.create({
    id: "74cd6011-7e76-4d6d-b25b-1d6e4182ec2f",
    name: "Victor",
    email: "victor@academnlo.com",
    password: "$2b$10$TNGcRFonQH98rVqFaBVfpOEEv2Xcu5ej14tWqKim3z3L6Tr.ZIaqC",
    phone: "1234567890",
    birthdayDate: "2022-10-12",
    roleId: "5ee551ed-7bf4-44b0-aeb5-daaa824b9473",
  })
};
module.exports = { generateData }