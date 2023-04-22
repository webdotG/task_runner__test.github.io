import React, {useState} from "react";
import uuid from 'uuid';


function AddToDo ({todo, setTodo}) {      

//использую хук usestate для хранения текста из value input
//при изменения значания value оно передайтся в setvalue оно сохраняется в value 
//значение value вывожу в value input
const[value, setValue] = useState('');
  console.log(value);

//функция для сохранения и добавления задачи
  function saveTodo() {
  //фунецией settodo создаю новый массив со значениями -существующим todo
  //и добавляю новый обьект value котрого я получаю из инпута
  //и временно поставлю пакет npm uuid для уникальных id  
    setTodo(               
      [...todo, {
        id: uuid.v4(),
        title: value,
        status:true,
      }]
    );
  }

//инпут для поля ввода задачи c value для значения-ввода задачи 
//если value будет пустым по умолчанию то я не смогу его отлавливать по этому мне надо его где-то хранить
//в значение value передаю value из хука usestate
//добавляю обработчик который при изменении value в поле ввода будет вызывать функцию setvalue и передаю в нее значение которое получаю из этого поля 
//кнопка при нажатии которой вызывается функция сохранения стэйта  
  return (
    <div>
      <input placeholder="новая задача" value={value} onChange={ (e) => setValue(e.target.value) }/>
      <button onClick={saveTodo}>опубликовать</button>
    </div>
  );
}

export default AddToDo;