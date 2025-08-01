import Header from './component/Header.jsx'
import TodoItem from './component/TodoItem.jsx'
import Button from './component/Button.jsx'
import "./Style.css"


const App = () => {
    return (
        <div className='todo-container'>
             <Header />
            <TodoItem text="eat" />
            <TodoItem text="code" />
            <TodoItem text="study" />
            <TodoItem text="play" />
            <TodoItem text="sleep" />
            <Button />
  

        </div>
    )
}

export default App;