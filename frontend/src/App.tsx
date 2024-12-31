import Login from "./components/Registration/Login"
import Signup from "./components/Registration/Signup"
import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import Todo from "./components/TodoApp/Todo";
import { UserProvider } from "./context/UserContext";
import UnauthorizedRoute, { AuthorizedRoute } from "./ProtectiveRoutes/AuthorizedRoutes";
import TodoProvider from "./context/TodoContext";
import TodoIdProvider from "./context/TodoIdContext";




function App() {

  return (
    <>
    <TodoIdProvider>
    <TodoProvider>
     <UserProvider>
        <Toaster />
        <Routes>
        <Route element={<AuthorizedRoute />}>
        <Route path="/todo" element={<Todo />} />
        </Route>

          <Route element={<UnauthorizedRoute />}>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Route>

          {/* Other public routes go below */}



        </Routes>
      </UserProvider>
     </TodoProvider>
    </TodoIdProvider>


    </>
  )
}

export default App
