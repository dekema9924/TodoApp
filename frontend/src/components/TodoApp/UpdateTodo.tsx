

import toast from 'react-hot-toast'
import axios from 'axios'
import Cookies from 'js-cookie'

interface props {
    todoId: number
    values: {
        title: string
        progress: number
        iscomplete: boolean
    }
}

async function Update({todoId, values}:props) {

 try{
    axios.defaults.baseURL = 'http://localhost:3000/todo'
    await axios.patch(`/update/${todoId}`,  values , {
        headers: {
            Authorization: `Bearer ${Cookies.get('Token')}`
        }
    })
    .then((response)=>{
        toast.success(response.data.message)
        
    })
 }catch(error){
    console.error('Error fetching todos:', error)
    toast.error('Error fetching todos')
 }
  
}

export default Update