const uuid = require("uuid");
const Users = require("../models/user.model")
const { hashPassword } = require('../utils/crypt')


const getAllUsers = async () => {
    const data = await Users.findAll({
        attributes:{
            exclude: ['password', 'createAt', 'updateAt']
        }
    });
    return data
}

const getUserById = async (id) => {
    const data = await User.findOne({
        where: {
            id: id
        },
        attributes: {
            exclude: ['password', 'createAt', 'updateAt']
        },
    });
    return data
}

const createUser = async (data) => {
    const newUser = await User.create({
        id: uuid.v4(),
        name: data.name,
        email: data.email,
        password: hashPassword(data.password),
        phone: data.phone,
        birthdayDate: data.birthday_date,
        roleId: 'fef3a08d-2cec-4728-9745-7cbd2b37e557' //? guest
    });
    return newUser
};

const deleteUser = async (id) => {
    const data = await User.destroy({
       where: {
        id: id
       } 
    });
    return data
};

const editUser = async (userId, data, userRol) => {
    const { id, password, role_id, ...restOfProperties } = data
    if ("5ee551ed-7bf4-44b0-aeb5-daaa824b9473" === userRol) {
    const response = await User.update(
      { ...restOfProperties, role_id},
      {where: { id: userId } }
    );
    return response;
    }else {
      const response = await Users.update(restOfProperties, {
        where: { id: userId },
      });
      return response;
    }
  };
const getUserByEmail = async (email) => {
    const data = await User.findOne({
        where: {
            email: email
        },
        attributes: {
            exclude: ['createAt', 'updateAt']
        }
    });
    return data
}
    
module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    deleteUser,
    editUser,
    getUserByEmail
};