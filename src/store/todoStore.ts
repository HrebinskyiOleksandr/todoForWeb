import { create } from 'zustand';
import { Todo } from '../types/todo.types';

interface TodoState {
  todos: Todo[];
  lastId: number;
  addTodo: (title: string, description: string) => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  updateTodo: (id: number, title: string, description: string) => void;
}

export const useTodoStore = create<TodoState>((set) => ({
  todos: [],
  lastId: 0,

  addTodo: (title, description) => {
    set((state) => {
      const newId = state.lastId + 1;
      const newTodo: Todo = {
        id: newId,
        title: title.trim(),
        description: description.trim(),
        completed: false,
      };
      return {
        todos: [...state.todos, newTodo],
        lastId: newId,
      };
    });
  },

  toggleTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    })),

  deleteTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),

  updateTodo: (id, title, description) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id
          ? {
            ...todo,
            title: title.trim(),
            description: description.trim(),
          }
          : todo
      ),
    })),
}));
