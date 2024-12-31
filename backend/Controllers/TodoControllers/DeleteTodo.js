
const Tododb = require('../../config/Todoconfig')

const DeleteTodo=async(req, res)=>{
    let id = req.params.id
    console.log(id)
    const DeleteTodo = await Tododb.findByIdAndDelete(id)
    if(DeleteTodo) return res.status(200).json({message: 'Task has been deleted'})
        return res.status(400).json({error: "could'nt delete task"})
    
}

module.exports = DeleteTodo