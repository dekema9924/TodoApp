import toast from 'react-hot-toast'
import axios from 'axios'
import Cookies from 'js-cookie'

async function Delete(id:number) {

 try{
    axios.defaults.baseURL = 'http://localhost:3000/todo'
    await axios.delete(`/delete/${id}` , {
        headers: {
            Authorization: `Bearer ${Cookies.get('Token')}` 
        }
    }).then((response)=>{
        console.log(response.data.message)
        toast.success(response.data.message)
        
    })
 }catch(error){
    console.error('Error fetching todos:', error)
    toast.error('Error fetching todos')
 }
  
}

export default Delete