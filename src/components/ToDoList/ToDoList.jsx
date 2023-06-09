import React, {useEffect, useState} from "react";
import style from './ToDoList.module.css'
import { MdOutlineDelete } from "react-icons/md";
import { BiEditAlt } from "react-icons/bi";
import { FaRegSave } from "react-icons/fa";
import { HiOutlineLockClosed, HiOutlineLockOpen } from "react-icons/hi2";

//получаю todo и settodo переданные из app.js 
function ToDoList ({todo, setTodo}) {

//флаг для обозначения в каком состоянии мы сейчас находимся просмтора или редактирования задачи
  //false - просмотр задачи true - редактирование задачи
  //ксли здесь значение edit совпадает c id который получен после map то выводится div input условие прописано ниже
  const[edit,setEdit] = useState(null)

//для установки значения в input value нынешего значения закидываю в него нынешний title
  const[value,setValue] = useState('')

//для работы с фильтрами задач
  //переменная которую фильтруем по дефолту в ней лежат все todo функция которая будет фильтровать
  //массив по умолчанию имеет значение todo-список всех задач
  const[filtered, setFiltered] = useState(todo)

//добавляю хук useeffect для перерисовки страницы
  //только при добавлении новой задачи
useEffect( () => {setFiltered(todo)}, [todo])

//функция для фильтрации задач по статусу
  //если статус равен all то в setFiltered будет значение todo-список всех задач
  //если статус равен true или false то создаю новый массив который принимае изначальный todo
  //при помощи метода filter находить обьект в котором status равен status и все обьекты закидываю в newtodo
  const todoFilter = (status) => {
    if(status === 'all') {
      setFiltered(todo)
    } else { 
        let newTodo = [...todo].filter( item => item.status === status)
        setFiltered(newTodo)
    }    
  }

//функция для удаления todo
    //создаю переменную в которую положу новый массив в котором не будет выбранного нами элемента
    //передаю копию массива применяю мктод filter и говорю 
    //что перебераемый id не должен быть равен id полученый от кнопки удаления того обьекта который хочу удалить
    //в функцию setTodo передаю новый массив в котром отсутсвует удалённый обьект
    //тем самым я обновляю значение todo заменяя его на newTodo 
  function deleteTodo(id) {  
      let newTodo = [...todo].filter(item => item.id!== id);
      setTodo(newTodo);
  }

//функия для изменения статуса задачи-todo
    //мне надо найти id того элемента который я передал через кнопку закрытия-изменения статуса задачи
    //если условие верное и такой id есть то меняю значение status задачи на противоположное
    //если элемент был найден я выхожу из условия и возвращаю весь массив
    //после  изменений обновляю statetodo
  function statusTodo(id) {
      let newTodo = [...todo].filter(item => {
        if (item.id === id) {
          item.status = !item.status;
          console.log(`элемент найден задача закрыта/открыта ${item.id} ${item.status}`);
        }
        return item;
      })
      setTodo(newTodo);
   }

//функция для редактирования задачи-todo менять значение setedit на true для режима редактирования
  //здесь я беру значение edit и заношу в выше в edit
  //также при нажатии на редактировать закидываю нынещнее значение title 
  function editTodo(id, title){
     setEdit(id)
     setValue(title)
  }

//функция для сохранения изменения задачи-todo
  //передаю id найденный через item id которого редактирую 
  //в новый todo сохраняю все жлементы массива todo которые обошёл через map
  //нахожу в нём нужный нам элемент по id 
  //и меняю в нем значение title на value на текущий момент редактирования
  //возвращаю item что бы не бегать по всему массиву дальше
  //возвращаю новое значение title
  //выставляю setEdit в null для того что бы выйти из режима редактирования
  function saveTodo (id) {
    let newTodo =  [...todo].map(item => { 
      if (item.id === id) {
        item.title = value;
      }
      return item;
    })
    setTodo(newTodo); 
    setEdit(null);
  }

  return (
    
    <ul className={style['task-list']}>

      <nav className={style['status-filter']}>
        <button className={style['status-filter__button']} onClick={() => todoFilter('all')}>все дела</button>
        <button className={style['status-filter__button']} onClick={() => todoFilter(true)}>дела в работе</button>
        <button className={style['status-filter__button']} onClick={() => todoFilter(false)}>сделанные дела</button>
      </nav>

    {
      //начинаю работу с уже отфильтрованными задачами по статусу
      //при помощи MAP вывожу каждый обьект из массива todo в li
      //передаю уникальное значенеие key равное id обьекта 
      //добавляю проверку если edit то выводить input и button сохранить
      //input value при редактировании добавляю текущее значение и добавляю нынешнее значение title
      //также добавляю onchange на input и меняю значение за счет setvalue и передаю в input значение target value
      //если не edit то показывать title
      //добавляю ещё одну проверку для режима редактирования
      //если состояние edit то будет показываться кнопка сохранить
      //если не edit то показываются все остальные кнопки 
      //значение edit лежит здесь которое мы получили при клике на редактировать я заношу в setedit
      //при клике на кнопку сохранить вызываю функцию saveTodo и чтобы найти знать что я сохраняю  добавляю item.id
      //на кнопку вешаю обработчик который будет вызывать функцию удаления аргументом котрой будет id обьекта 
      //добавляю кнопку схоже с удалением задачи но передаю функцию закрытия/открытия задачи
      
      filtered.map( item => (
        <li className={style['task-list__item']}  key={item.id}>
            {
              edit === item.id 
                ?
                <div className={style['edit_task__wrapper']}>
                  <textarea className={style['edit_task__textarea']} value={value} onChange={(e) => setValue(e.target.value)} />
                </div>
                :
                <p className={
                  ! item.status
                  ? style['task-status--close']
                  : ''
                }>{item.title}</p>
            }
            {
              edit === item.id 
                ?
                <div className={style['task-list__button-wrapper']}>
                  <button className={style['task-list__button--save']} onClick={() => saveTodo(item.id)} ><FaRegSave className={style['save-icon']}/></button>
                </div>
                :
                <div className={style['task-list__button-wrapper']}>
                  <button className={style['task-list__button--edit']} onClick={ () =>editTodo(item.id, item.title)}><BiEditAlt className={style['edit-icon']} /></button>
                  <button className={style['task-list__button--status']} onClick={ () =>statusTodo(item.id)}>
                  {
                    item.status 
                    ? <HiOutlineLockOpen className={style['delete-icon']}/> 
                    : <HiOutlineLockClosed className={style['delete-icon']}/> 
                  }
                  </button> 
                  <button className={style['task-list__button--delete']} onClick={ () =>deleteTodo(item.id)}><MdOutlineDelete  className={style['delete-icon']}/></button>
                </div>
            }
        </li>    
      ))
    }
    </ul>
  );
}

export default ToDoList;