import { useState, createContext, ReactNode, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";





export const UserContext = createContext<UsercontextType>({
    User: null,
    setUser: () => { },
    Loading: true,
    setLoading: () => { },
})

type ContextProviderProps = {
    children?: ReactNode
}

type UsercontextType = {
    User: string | null
    setUser: React.Dispatch<React.SetStateAction<string | null>>;
    Loading: boolean
    setLoading: React.Dispatch<React.SetStateAction<boolean>>

}

export const UserProvider = ({ children }: ContextProviderProps) => {
    const [User, setUser] = useState<string | null>(null);
    const [Loading, setLoading] = useState(true)
    const navigate = useNavigate()


    let token = Cookies.get('Token')


    useEffect(() => {
        if(token){
            axios.get('http://localhost:3000/todo', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then((result)=>{
                console.log(result)
                setUser(result.data.user.username)
                setLoading(false)
            })
            .catch((error)=>{
                console.log('error fetching user', error)
                Cookies.remove('Token')
            })}
    }, [Loading])

    return (
        <UserContext.Provider value={{ User, setUser, Loading, setLoading}}>
            {children}
        </UserContext.Provider>

    )


}

