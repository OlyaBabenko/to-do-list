import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface ITodo {
   id: string;
   text: string;
   status: 'active' | 'deleted' | 'completed';
}

export interface TodosState {
   todos: ITodo[];
}

const initialState: TodosState = {
   todos: JSON.parse(localStorage.getItem('todos') as string) || [],
};

export const todosSlice = createSlice({
   name: 'todos',
   initialState,
   reducers: {
      createTodo: (state, action: PayloadAction<string>) => {
         state.todos.unshift({
            id: new Date().toISOString(),
            text: action.payload,
            status: 'active',
         });
         localStorage.setItem('todos', JSON.stringify(state.todos));
      },
      deleteTodo: (state, action: PayloadAction<ITodo>) => {
         const toggleTodo = state.todos.find((el) => el.id === action.payload.id);
         if (toggleTodo) toggleTodo.status = 'deleted';
         localStorage.setItem('todos', JSON.stringify(state.todos));
      },
      completeTodo: (state, action: PayloadAction<ITodo>) => {
         const toggleTodo = state.todos.find((el) => el.id === action.payload.id);
         if (toggleTodo) toggleTodo.status = 'completed';
         localStorage.setItem('todos', JSON.stringify(state.todos));
      },
      reopenTodo: (state, action: PayloadAction<ITodo>) => {
         const toggleTodo = state.todos.find((el) => el.id === action.payload.id);
         if (toggleTodo) toggleTodo.status = 'active';
         localStorage.setItem('todos', JSON.stringify(state.todos));
      },
   },
});

export const { createTodo, completeTodo, deleteTodo, reopenTodo } = todosSlice.actions;

export default todosSlice.reducer;
