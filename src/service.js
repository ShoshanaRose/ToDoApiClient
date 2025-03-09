import axios from 'axios';

// הגדרת כתובת ה-API כ-default
//axios.defaults.baseURL = "http://localhost:5017";//const apiUrl = "http://localhost:5017"
axios.defaults.baseURL = process.env.REACT_APP_API_URL; // השתמש במשתנה הסביבה
console.log("api: "+process.env.REACT_APP_API_URL)

// הגדרת interceptors
axios.interceptors.response.use(
  response => response, // מחזיר את התגובה אם אין שגיאה
  error => {
    console.error('Error response:', error); // רושם את השגיאה ללוג
    return Promise.reject(error); // מחזיר את השגיאה
  }
);

export default {
  getTasks: async () => {
    const result = await axios.get(`/items`)    
    return result.data;
  },

  addTask: async(todo)=>{
    console.log('addTask', todo)
    const res = await axios.post(`/item?todo=${todo}`)
    return res.data;
  },

  setCompleted: async(id, isComplete)=>{
    console.log('setCompleted', {id, isComplete})
    const res = await axios.put(`/item/${id}?isComplete=${isComplete}`)
    return res.data;
  },

  deleteTask:async(id)=>{
    console.log('deleteTask')
    const res = await axios.delete(`/item/${id}`)
    return res.data;
  }
};