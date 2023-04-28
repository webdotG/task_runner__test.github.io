import { Link, Outlet } from 'react-router-dom';
//outlet что-то типо template говорит куда я хочу вставить тот или мной компонент

const Layout = () => {

  return (
    <>
      <header>
        <Link to="/">formLogin</Link>
        <Link to="/add">addTodo</Link>
        <Link to="/list">addTodoList</Link>
      </header>

      <Outlet />

      <footer>made by webDotG</footer>
    </> 
  )
}

export { Layout }