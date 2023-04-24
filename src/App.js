import React, {useState} from 'react';
import './App.css';
import Header from './components/Header/Header';
import AddToDo from './components/AddToDo/AddToDo';
import ToDoList from './components/ToDoList/ToDoList';


function App() {
//useState хранит в себе всю информацию, аналог базы данных
  //вся информация массива с обьектами доступна в переменной TODO
  //SETTODO функция которая будет менять работать с TODO с массивом обьектов
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: 'first task',
      status: true,

    },
    {
      id: 2,
      title: 'second task',
      status: true,

    },
    {
      id: 3,
      title: 'third task',
      status: false,

    },
    ]);
  
//todo.forEach((i) => console.log(i.id))
  
  return (
    <div className="App">
      <Header/>
      <AddToDo todo={todo} setTodo={setTodo}/>
      <ToDoList todo={todo} setTodo={setTodo} />
    </div>
 );
}


//передаю компоненту todolist PROPS пропсы для того что бы можно было работать с этим компонентом
//говорю что todo равно массиву обьектов todo и settodo равно фуекцик settodo


export default App;
