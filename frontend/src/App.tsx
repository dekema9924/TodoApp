import Login from "./components/Registration/Login"
import Signup from "./components/Registration/Signup"
import {Routes, Route} from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import Todo from "./components/TodoApp/Todo";
import { UserProvider } from "./context/UserContext";



function App() {

  return (
    <>
    <UserProvider>
    <Toaster/>
      <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/todo" element={<Todo/>}/>
      </Routes>

    </UserProvider>
   
    </>
  )
}

export default App
