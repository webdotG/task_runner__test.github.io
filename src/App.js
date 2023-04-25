import React, {useEffect, useState} from 'react';
import Header from './components/Header/Header';
import AddToDo from './components/AddToDo/AddToDo';
import ToDoList from './components/ToDoList/ToDoList';
import style from '../src/App.css';

function App() {
//useState хранит в себе всю информацию, аналог базы данных
  //вся информация массива с обьектами доступна в переменной TODO
  //SETTODO функция которая будет менять работать с TODO с массивом обьектов
  const [todo, setTodo] = useState(
    JSON.parse(localStorage.getItem('todo')) || []
  );
  useEffect( () => {
    localStorage.setItem('todo' , JSON.stringify(todo))
  } 
  ,[todo])
  
//todo.forEach((i) => console.log(i.id))
  
  return (
    <div className={style['App']}>
      <Header/>
      <AddToDo todo={todo} setTodo={setTodo}/>
      <ToDoList todo={todo} setTodo={setTodo} />
    </div>
 );
}


//передаю компоненту todolist PROPS пропсы для того что бы можно было работать с этим компонентом
//говорю что todo равно массиву обьектов todo и settodo равно фуекцик settodo


export default App;

