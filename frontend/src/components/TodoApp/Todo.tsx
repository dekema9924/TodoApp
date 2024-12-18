import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import axios from 'axios'
import cookies from 'js-cookie';




function Todo() {
  const { User, setUser, setLoading } = useContext(UserContext)
  const token = cookies.get('Token');


  axios.get('/todo', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  .then((response) => {
    console.log(response)
    setLoading(false)
    setUser(response.data.data.username)
})


  return (
    <>
    {
      User
    }

    </>
  )
}

export default Todo