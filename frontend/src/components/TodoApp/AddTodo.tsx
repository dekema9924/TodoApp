import axios from 'axios';
import  { useState, useContext } from 'react';
import Cookies from 'js-cookie';
import toast from 'react-hot-toast';
import { TodoContext } from '../../context/TodoContext';

interface AddTodoProps {
    setshowAddtodo: React.Dispatch<React.SetStateAction<boolean>>;
  }

function AddTodo({setshowAddtodo}:AddTodoProps,) {
    const context = useContext(TodoContext);
    if (!context) {
        throw new Error('TodoContext must be used within a TodoProvider');
      }
    const [value, setValue] = useState(50)
    const [Input, setInput] = useState("")
    const {Todo, setTodo} =  context


    const handleChange = (event: any) => {
        setValue(event.target.value);
    };
    const postData = {
        title: Input,
        progress: value
      };

    const SubmitForm =(e:any)=>{
        e.preventDefault()
        axios.post('http://localhost:3000/todo/addtodo', postData, {
            headers: {
                Authorization: `Bearer ${Cookies.get('Token')}` 
            }
        }).then((response)=>{
            setshowAddtodo(false)
            console.log(response.data)
            toast.success(response.data.message)
            setTodo([...Todo, response.data.task]); // Add new todo to the list

        })
    }

    return (
        <form onSubmit={SubmitForm} className='border-2 w-[610px] h-96 rounded-md p-4 bg-white absolute z-50 top-40 pt-10 ' action="">
            <div className='flex justify-between gap-4'>
                <h1 className='text-2xl font-semibold mb-4'>Create your task</h1>
                <p onClick={()=>setshowAddtodo(false)} className='cursor-pointer text-2xl mr-12 '>x</p>

            </div>
            <input onChange={(e:any)=>setInput(e.target.value)} className='border-2 w-11/12 h-9 rounded-md outline-none border-gray-400 pl-5' type="text" name="" id="" placeholder='Task...' />

            <div className='mt-4'>
                <label className='text-sm' htmlFor="rangeSlider">Set your Task Progress</label>
                <div className='flex items-center gap-2'>
                    <input className='w-11/12' type="range" name="rangeSlider" value={value} min={0} max={100} step={2} onChange={handleChange} />
                    <p>{value}</p>
                </div>
            </div>
            <button className=' w-11/12 h-9 mt-10 bg-green-300 cursor-pointer rounded-md'>Submit</button>
        </form>
    )
}

export default AddTodo