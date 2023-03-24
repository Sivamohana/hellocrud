import axios from 'axios';

// const URL = 'http://localhost:8000';

export const addUser = async (data) =>{
    try
    {
    //    return await axios.post(`${URL}/add`, data);
       return await axios.post('/add',data);
    }
    catch(error)
    {
        console.log("Error while calling add user APi", error);
    }
}

export const getUsers = async () =>{
    try{
    //    return await axios.get(`${URL}/all`);
    return await axios.get('/all');
    }
    catch(error){
console.log("Error while calling getUsers API", error);
    }
}