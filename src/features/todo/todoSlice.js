import { createSlice, nanoid} from "@reduxjs/toolkit";

const initialState = {
    todos:[{id:1,text:"hello World"}]
}

/* 
reducers have properties and functions
example:-   reducer{
    property:function
}      
In upper function , we always have to things: (state,action) => {}

Action gives the value/access of state
payload is object
  */

export const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo : (state,action) => {
            const todo = {
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        removeTodo : (state,action) => {
            state.todos = state.todos.filter((todo) => 
                todo.id !== action.payload
            )
        }
    }
})

/* 
    below code is very important ,cause we need to export a default reducer and export methods individually so that used as components 
*/
export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer
