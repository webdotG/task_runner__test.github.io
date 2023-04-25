import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import style from "../src/App.css";

//импортирую страницы
import Header from "./components/Header/Header";
import FormLogin from "./components/FormLogin/FormLogin";
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
			<a href="/">formLogin</a>
			<a href="/add">addTodo</a>
			<a href="/list">addTodoList</a>
			<Routes>
				<Route path="/" element={<FormLogin />} />
				<Route
					path="/add"
					element={<AddToDo todo={todo} setTodo={setTodo} />}
				/>
				<Route
					path="/list"
					element={<ToDoList todo={todo} setTodo={setTodo} />}
				/>
			</Routes>
		</div>
	);
}

// <FormLogin />
// <Header />
// <AddToDo todo={todo} setTodo={setTodo} />
// <ToDoList todo={todo} setTodo={setTodo} />

//передаю компоненту todolist PROPS пропсы для того что бы можно было работать с этим компонентом
//говорю что todo равно массиву обьектов todo и settodo равно фуекцик settodo

export default App;
