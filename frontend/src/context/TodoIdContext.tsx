
import { useState,  createContext } from "react";

type TodoIdContext ={
    todoId: number
    setToDoId:  React.Dispatch<React.SetStateAction<number>>
}

export const IdContext = createContext<TodoIdContext>({
    todoId: 0,
    setToDoId: ()=>{}
})


const TodoIdProvider=({children}:React.PropsWithChildren)=>{
    const[todoId, setToDoId] = useState<number>(0)

    return(
        <IdContext.Provider value={{todoId, setToDoId}}>
            {children}
        </IdContext.Provider>
    )
}

export default TodoIdProvider