import axios from 'axios'

const baseUrl = "https://fullstack-todo-app-backend-buhx.onrender.com"

const getAllToDo = (setToDo) => {
    axios
        .get(baseUrl)
        .then(({data}) => {
            console.log('data ---> ', data);
            setToDo(data)
        })
}

const addToDo = (text, setText, setToDo) =>{
    axios
        .post(`${baseUrl}/save`, {text})
        .then((data) => {
            console.log(data);
            setText("");
            getAllToDo(setToDo)
        });

}

const updateToDo = (toDoID, text, setToDo, setText, setIsUpdating) =>{
    axios
        .post(`${baseUrl}/update`, {_id: toDoID, text})
        .then((data) => {
            setText("");
            setIsUpdating(false);
            getAllToDo(setToDo)
        })
        .catch((err) => console.log(err));

}

const deleteToDo = (toDoID, setToDo,) =>{
    axios
        .post(`${baseUrl}/delete`, {_id: toDoID})
        .then((data) => {
            getAllToDo(setToDo)
        })
        .catch((err) => console.log(err));

}

export {getAllToDo, addToDo, updateToDo, deleteToDo}