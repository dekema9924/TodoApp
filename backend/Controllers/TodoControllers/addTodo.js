const Tododb = require('../../config/Todoconfig')

const Addtodo=async (req, res)=>{
    const {title, progress, iscomplete} = req.body
    console.log(req.userId)
    const newTodo = await Tododb.create({
        title: title,
        progress: progress,
        iscomplete: iscomplete,
        user: req.userId
    })
    await newTodo.save()

    if(newTodo) return res.status(200).json({message: "Task Created", task: newTodo})
        res.status(400).json({error: 'Todo could not be created. '})
   
}

module.exports =Addtodo