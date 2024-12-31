import React, { useContext } from 'react'
import { useState } from 'react'
import { IdContext } from '../../context/TodoIdContext';
import Update from './UpdateTodo';
import { TodoContext } from '../../context/TodoContext';

export default function EditTodo({ setEdit }: any) {

    const [value, setValue] = useState(50)
    const [Input, setInput] = useState("")
    const [complete, setIsComplete] = useState(false)
    const {todoId} = useContext(IdContext)
    const context = useContext(TodoContext);
    if (!context) {
      throw new Error('TodoContext must be used within a TodoProvider');
    }
    // const { Todo, setTodo } = context



    const handleChange = (event: any) => {
        setValue(event.target.value);
    };

    const HandleSubmit: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
        e.preventDefault()
        let values = {
            title: Input,
            progress: value,
            iscomplete: complete
        }

        //update
        await Update({todoId, values})
        setEdit(false)
    }
    return (
      
            <form className='border-2 w-[610px] h-96 rounded-md p-4 bg-white absolute z-50 top-40 pt-10 ' action="">
                <div className='flex justify-between gap-4'>
                    <h1 className='text-2xl font-semibold mb-4'>Edit Task</h1>
                    <p onClick={() => setEdit(false)} className='cursor-pointer text-2xl mr-12 '>x</p>

                </div>
                <input onChange={(e) => setInput(e.target.value)} className='border-2 w-11/12 h-9 rounded-md outline-none border-gray-400 pl-5' type="text" name="" id="" placeholder='Task...' />

                <div className='mt-4'>
                    <label className='text-sm' htmlFor="rangeSlider">Update your Task Progress</label>
                    <div className='flex items-center gap-2'>
                        <input className='w-11/12' type="range" name="rangeSlider" value={value} min={0} max={100} step={2} onChange={handleChange} />
                        <p>{value}</p>
                    </div>
                </div>
                <button onClick={HandleSubmit} className=' w-11/12 h-9 mt-10 bg-green-300 cursor-pointer rounded-md'>Update</button>
            </form>
   
    )
}

