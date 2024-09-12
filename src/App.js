import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos = [
  { text: 'Cortar Cebolla.', completed: true},
  { text: 'Colgar la ropa.', completed: false},
  { text: 'Lavar los platos.', completed: false},
  { text: 'Comprar pan de la panaderia.', completed: false},
  { text: 'Doblar la ropa.', completed: false}
];

function App() {
  return (
    <>
      <TodoCounter 
        completed={16} 
        total={255}
      />
      <TodoSearch />
      <TodoList>
        { defaultTodos.map(todo => (
          <TodoItem 
            key = { todo.text }
            text = { todo.text }
            completed = { todo.completed }
          />
        )) }
      </TodoList>
      <CreateTodoButton />  
    </>
  );
}

export default App;
