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
};

// Context provider props type
type ContextProviderProps = {
    children?: ReactNode;
};

// Create the Todo context with the correct type
export const TodoContext = createContext<TodoContextType | undefined>(undefined);

const TodoProvider = ({ children }: ContextProviderProps) => {
    const [Todo, setTodo] = useState<TodoType[]>([]);

    useEffect(() => {
        const fetchTodo = async () => {
            try {
                axios.defaults.baseURL = 'http://localhost:3000/todo';
                const response = await axios.get('/showtodo', {
                    headers: {
                        Authorization: `Bearer ${Cookies.get('Token')}`,
                    },
                });
                console.log(response.data.result);
                setTodo(response.data.result); 
            } catch (error) {
                console.error("Error fetching todos:", error);
            }
        };

        fetchTodo();
    }, []); 
    return (
        <TodoContext.Provider value={{ Todo, setTodo }}>
            {children}
        </TodoContext.Provider>
    );
};

export default TodoProvider;
