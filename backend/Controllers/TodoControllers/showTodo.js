const Tododb = require('../../config/Todoconfig')


const ShowTodo =async (req,res)=>{
    await Tododb.find({user: req.userId})
    .then((foundTask)=>{
        res.status(200).json({result: foundTask})
    })

}

module.exports = ShowTodo