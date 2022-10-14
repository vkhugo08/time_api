
const userControllers = require('./users.controller')

const getAll = (req, res) => {
    userControllers.getAllUsers()
        .then((response) =>{
            res.status(200).json({items: response.length, users: response})
        })
        .catch(err => {
            res.status(400).json(err)
        });
};

const getById = (req, res) => {
    const id = req.params.id;
    userControllers.getUserById()
        .then( response => {
            res.status(200).json({user: response})
        })
        .catch( err => {
            res.status(404).json({
                message: `this id ${id} doesn't exist`
            })
        });
};

const register = (req, res) => {
    const data = req.body;
    if(!data) {
        return res.status(400).json({message: 'missing data'});
    } else if(
        !data.name ||
        !data.email ||
        !data.password ||
        !data.brithday_date
    ){
        return res.status(400).json({message: 'All fields must be completed'})
    }else {
        userControllers.createUser(data)
            .then( response => {
                res.status(201).json({
                    message: `User created succesfully with id : ${response.id}`,user: response
                });
            })
            .catch ( err => {
                res.status(400).json({message: err.errors[0].message})
            })
    }
};

const remove = ( req, res) => {
    const id = req.params.id;
    userControllers.deleteUser()
        .then( response => {
            if(response){
                res.status(204).json()
            }else{
                res.status(400).json({message: ' invalid ID'})
            }
        });
};

const edit = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    if(!Object.keys(data).length){
        return res.status(400).json({message: 'Missing data'});
    } else {
        userControllers.editUser()
            .then( response => {
                res.status(200).json({
                    message: 'user edited succesfully',
                    user:response
                })
            })
            .catch( err => {
                res.status(400).json({message: err.erros[0].message})
            });
    }
}; 



module.exports = {
    getAll,
    getById,
    register,
    remove,
    edit
}