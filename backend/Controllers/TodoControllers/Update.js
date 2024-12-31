
const Tododb = require('../../config/Todoconfig')

const UpdateTodo=async(req, res)=>{
    try{
        const updateTodo = await Tododb.findByIdAndUpdate(req.params.id, req.body, {new: true})
       
        if(!updateTodo) return res.status(404).json({ error: 'User not found' });
        res.status(200).json({message: 'Todo Updated'})
    }catch(error){
        res.status(500).json({ message: 'Error updating Task' });

    }
 


 
    
}

module.exports = UpdateTodo