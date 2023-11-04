import { useSelector,useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

// "useSelector" is just a method,no need to store in variable first then invoce it,we use it directly. But it gives us an advantage to access of "state"

function Todos() {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()

  return (
    <>
      <div>Todos</div>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          <button
          onClick={() => dispatch(removeTodo(todo.id))}
          /* we cannot use like that,
           onclick={dispatch(removeTodo())}
           because it execute imediately . Thats why we use "Callbacks"
          */
          >X</button>
        </li>
      ))}
    </>
  )
}

export default Todos