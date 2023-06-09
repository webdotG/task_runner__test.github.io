import React, {useState} from "react";
import { v1 as uuidv1 } from 'uuid';
import style from './AddToDo.module.css'

//test comment

function AddToDo ({todo, setTodo}) {      

//использую хук usestate для хранения текста из value input//при изменения значания value оно передайтся в setvalue оно сохраняется в value 
  //значение value вывожу в value input
  const[value, setValue] = useState('');

//функция для сохранения и добавления задачи
  function saveTodo() {
    if (value){
      //функцией settodo создаю новый массив со значениями -существующим todo
      //и добавляю новый обьект value котрого я получаю из инпута
      //и временно поставлю пакет npm uuid для уникальных id  
      setTodo(               
      [...todo, {
        id: uuidv1(),//костыль работает проверить на корректность ----todo.length + 1
        title: value,
        status: true,
      }]
      );
      setValue(''); //после всех манипуляций обнуляю value input на пустую строку
  } else { alert('дело должно быть написано'); }
}

//инпут для поля ввода задачи c value для значения-ввода задачи 
//если value будет пустым по умолчанию то я не смогу его отлавливать по этому мне надо его где-то хранить
//в значение value передаю value из хука usestate
//добавляю обработчик который при изменении value в поле ввода будет вызывать функцию setvalue и передаю в нее значение которое получаю из этого поля 
//кнопка при нажатии которой вызывается функция сохранения стэйта  
  return (
    <div className={style.task}>
      <input className={style.task__input} placeholder="новое дело" value={value} onChange={ (e) => setValue(e.target.value) }/>
      <button className={style.task__button} onClick={saveTodo}>добавить в список дел</button>
    </div>
  );
}

export default AddToDo;