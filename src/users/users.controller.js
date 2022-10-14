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
        birthdayDate: data.birthday_date

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

const editUser = async (userId, data) =>{
    const { id, password, ...restOfProperties } = data
    const response = await User.update
    (restOfProperties,{
        where: {id : userId}
    })
        return response
    };
const getUserByEmail = async (email) => {
    const data = await User.findOne({
        where: {
            email: email
        },
        attributes: {
            exclude: ['password', 'createAt', 'updateAt']
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