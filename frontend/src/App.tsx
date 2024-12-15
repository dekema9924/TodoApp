import Login from "./components/Registration/Login"
import Signup from "./components/Registration/Signup"
import {Routes, Route} from 'react-router-dom'


function App() {

  return (
    <>
      <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </>
  )
}

export default App
