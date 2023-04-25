import React, {useEffect, useState} from 'react';
import Header from './components/Header/Header';
import AddToDo from './components/AddToDo/AddToDo';
import ToDoList from './components/ToDoList/ToDoList';
import style from '../src/App.css';
import {useForm} from 'react-hook-form';


function App() {

//создаю обьект используя хук useform для валидацию формы
  //метод register для регистрации полей формы
  //formstate обьект со свойствами я использую свойство errors для вывода ошибок
  //handleSubmit функция которая будет вызываться при нажатии на кнопку submit
  const {
    register,
    formState: {
      errors
    },
    handleSubmit,
    reset,                                  //метод для очистки формы после отправки
  } = useForm({                             //в хук передаю обьект с настройками проверки
      mode: 'onBlur'                      //mode-режим выбрал при изменении данных
  });                       

//кастомный способ обработки формы
  //дефолтный handlesubmit будет передавать данные полей формы в мою data
  //если в handlesubmit есть какие-то ошибки то кастомный onsubmit вызываться не будет
  //onsubmit будет срабатывать тольео если нет ошибок
  //для проверки создаю алерт что бы сотреть что вообще передаётся
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset();                                //очищаю форму после отправки
  }

//useState хранит в себе всю информацию, аналог базы данных
  //вся информация массива с обьектами доступна в переменной TODO
  //SETTODO функция которая будет менять работать с TODO с массивом обьектов
  //добавляю localStorage
  const [todo, setTodo] = useState(
    JSON.parse(localStorage.getItem('todo')) || []
  );
  useEffect( () => {
    localStorage.setItem('todo' , JSON.stringify(todo))
  } 
  ,[todo])
  
//todo.forEach((i) => console.log(i.id))

//сначла буду вызывать метод handlesubmit который идкт из коробки хука useform 
  //уже в нём буду использовать свой кастомный хэндлер onsubmit рписаный выше  

  return (
    <div className={style['App']}>

  <form onSubmit={handleSubmit(onSubmit)} className={['form-login']}>
    <div className={['form-login__name-wrapper']}> 
      <label class={['form-login__name-label']}>log in</label>
      <input                                             //'firstname'=name'firstname' уникальный ключ
        {...register('firstname', {                      //метод импортированный из коробки хука useform-вохвращает обьект и для работы использую деструктуризацию
          required: 'поле обязательно к заполнению',     //задаю правила для input вывожу сообщение если requirde не заполнен
          minLength: {
            value: 5,                                    //задаю минимальное еоличество символов 5
            message: 'миниимальное количество символов 5'//передаю сообщение об ошибке 
          }
        })}        
      />
      <div style={{height: 40}}>
        {errors?.firstname && <p>{errors?.firstname?.message || 'ошибка firstname'}</p>}
      </div>
    </div>
    



    <input type='submit'/>
  </form>




      <Header/>
      <AddToDo todo={todo} setTodo={setTodo}/>
      <ToDoList todo={todo} setTodo={setTodo} />
    </div>
 );
}


//передаю компоненту todolist PROPS пропсы для того что бы можно было работать с этим компонентом
//говорю что todo равно массиву обьектов todo и settodo равно фуекцик settodo


export default App;

