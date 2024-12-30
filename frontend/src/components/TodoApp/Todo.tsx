import { useContext, useState } from 'react'
import { UserContext } from '../../context/UserContext'
import holidayImg from '../../public/Images/summer-holidays.png'
import { CiCircleMore } from "react-icons/ci";
import AddTodo from './AddTodo';
import EditTodo from './EditTodo';
import { TodoContext } from '../../context/TodoContext';




function Todo() {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('TodoContext must be used within a TodoProvider');
  }
  const { User, Loading } = useContext(UserContext)
  const [showAddtodo, setshowAddtodo] = useState(false)
  const [showEdit, setEdit] = useState(false)
  const [isChecked, setIsChecked] = useState(false);
  const [activeDiv, setActiveDiv] = useState<number | null>(null)
  const { Todo } = context

  const HandleactiveDiv = (id: number) => {
    setActiveDiv(id === activeDiv ? null : id)
  }


  const HandleCheckbox: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setIsChecked(e.target.checked);
    console.log(isChecked)
  }

  const HandleShowComponent = () => {
    setshowAddtodo(true)
  }
  const HandleEditComponent = () => {
    setEdit(true)
  }


  let todoLenghth = Todo.length




  return (
    <>
      {
        !Loading ?
          <div className={showAddtodo ? " h-[100vh] p-4 pointer-events-none opacity-30 bg-gray-400" : "bg-blue-200 h-[100vh] p-4"}>
            <div className='flex  items-center justify-between sm:flex-col pt-4 bg-white w-11/12 rounded-md m-auto'>
              <div className='flex items-center gap-4'>
                <img className='w-20 ' src={holidayImg} alt="" />
                <div>
                  <h1 className='font-bold text-2xl'>Holiday Check List</h1>
                  <p className='font-bold'>Welcome <span className='capitalize'>{User}</span></p>
                  <p className='text-xs'>You have {todoLenghth} Tasks</p>
                </div>
              </div>
              <div className='flex gap-4 mr-10 pb-4'>
                <button onClick={HandleShowComponent} className='border-2 w-20 h-10 text-sm rounded-md bg-green-400 text-white  shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)]'>Add New</button>
                <button className='bg-red-400 w-20 border-2 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] h-10 rounded-md'>Logout</button>
              </div>
            </div>



            <div className='w-11/12 h-fit bg-white m-auto mt-4 relative  '>
              {
                Todo.map((todo) => {
                  return (
                    <>
                      <div key={todo._id} className='relative flex gap-4 justify-between items-center mb-4 rounded-md bg-white   pt-2 w-11/12 m-auto h-10 shadow-md '>
                        <div className='flex gap-2 items-center pl-2'>
                          <div className='flex gap-2 items-center pl-2'>
                            <input onChange={HandleCheckbox} type="checkbox" name="isComplete" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label className=" font-semibold " htmlFor="isComplete">{todo.title}</label>
                          </div>
                          <progress className='[&::-webkit-progress-bar]:rounded-md [&::-webkit-progress-value]:rounded-md [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:bg-green-400 [&::-moz-progress-bar]:bg-green-400' value={todo.progress} max={100} />
                        </div>

                        <CiCircleMore onClick={() => HandleactiveDiv(todo._id)} className='size-6 cursor-pointer mr-4' />
                        {
                          activeDiv === todo._id ?
                            <>
                              <div className=' z-50 w-24 p-4 text-center h-20 bg-blue-300 gap-2 rounded-md flex flex-col justify-center absolute right-4 bottom-[-70px]  '>
                                <p className=' bg-red-300 cursor-pointer '>Delete</p>
                                <p onClick={HandleEditComponent} className='bg-white cursor-pointer'>Edit</p>
                              </div>
                            </> : ""
                        }

                      </div>
                    </>
                  )
                })
              }
            </div>

          </div>
          : ""
      }
      <div className='ml-40'>

        {
          showAddtodo ? <AddTodo setshowAddtodo={setshowAddtodo} /> : ""
        }
        {
          showEdit ? <EditTodo setEdit={setEdit} /> : ""
        }
      </div>

    </>
  )
}

export default Todo