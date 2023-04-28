import React, { useEffect, useState } from "react";
import style from "../src/App.css";
// import { Layout } from './components/Layout/Layout'
// import { Routes, Route, } from "react-router-dom";

//импортирую страницы
import FormLogin from "./components/FormLogin/FormLogin";
import Header from './components/Header/Header'
import AddToDo from "./components/AddToDo/AddToDo";
import ToDoList from "./components/ToDoList/ToDoList";

function App() {
	//useState хранит в себе всю информацию, аналог базы данных
	//вся информация массива с обьектами доступна в переменной TODO
	//SETTODO функция которая будет менять работать с TODO с массивом обьектов
	//добавляю localStorage
	const [todo, setTodo] = useState(
		JSON.parse(localStorage.getItem("todo")) || []
	);

	useEffect(() => {
		localStorage.setItem("todo", JSON.stringify(todo));
	}, [todo]);

	return (
		<div className={style["App"]}>
			<FormLogin />
			<Header />
			<AddToDo todo={todo} setTodo={setTodo} />
			<ToDoList todo={todo} setTodo={setTodo} />

		</div>
	);
}


// <Routes>
// 				 <Route path="/" element={ <Layout/> }>  {/*создаю route в который кладу дочерние элементы */}
// 					<Route index element={<FormLogin />} />{/*использую ключ index что бы показать главную страницу */}
// 					<Route path="add" element={<AddToDo todo={todo} setTodo={setTodo} />}/>{/**/}
// 					<Route path="list" element={<ToDoList todo={todo} setTodo={setTodo} />}/>
// 				</Route>
// 			</Routes>

//передаю компоненту todolist PROPS пропсы для того что бы можно было работать с этим компонентом
//говорю что todo равно массиву обьектов todo и settodo равно фуекцик settodo

export default App;
