import Cookies from "js-cookie";
import axios from "axios";


    const fetchTodo = async(setTodo:any) => {
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

    export default fetchTodo;

  