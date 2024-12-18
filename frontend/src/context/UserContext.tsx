import { useState, createContext, ReactNode } from "react";




export const UserContext = createContext<UsercontextType>({
    User: "",
    setUser: () => { },
    Loading: true,
    setLoading: () => { }
})

type ContextProviderProps = {
    children?: ReactNode
}

type UsercontextType = {
    User: string
    setUser: React.Dispatch<React.SetStateAction<string>>;
    Loading: boolean
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export const UserProvider = ({ children }: ContextProviderProps) => {
    const [User, setUser] = useState("");
    const [Loading, setLoading] = useState(true)


    return (
        <UserContext.Provider value={{ User, setUser, Loading, setLoading }}>
            {children}
        </UserContext.Provider>
    )


}

