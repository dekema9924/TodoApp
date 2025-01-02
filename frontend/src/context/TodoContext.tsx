import { useState, createContext, ReactNode, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

// Define the type for a Todo
type TodoType = {
    title: string;
    progress: number;
    _id: number;
    isComplete: boolean;
};

// Define the type for the context
type TodoContextType = {
    Todo: TodoType[];
    setTodo: React.Dispatch<React.SetStateAction<TodoType[]>>; 
    Loading: boolean
    setLoading: React.Dispatch<React.SetStateAction<boolean>>; 
};

// Context provider props type
type ContextProviderProps = {
    children?: ReactNode;
};

// Create the Todo context with the correct type
export const TodoContext = createContext<TodoContextType | undefined>(undefined);

const TodoProvider = ({ children }: ContextProviderProps) => {
    const [Todo, setTodo] = useState<TodoType[]>([]);
    const[Loading, setLoading] = useState(true)

    return (
        <TodoContext.Provider value={{ Todo, setTodo, Loading, setLoading }}>
            {children}
        </TodoContext.Provider>
    );
};

export default TodoProvider;
