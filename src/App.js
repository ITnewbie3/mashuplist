import { createGlobalStyle } from 'styled-components';
import './App.css';
import TodoCreate from './components/TodoCreate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';
import { TodoProvider } from './TodoContext';

// 글로벌 스타일을 추가하고 싶을때
const GlobakStyle = createGlobalStyle`
  body{
    background:#e9ecef;

  }
`

function App() {
  return (
    <>
    <TodoProvider>
      <GlobakStyle></GlobakStyle>
      <TodoTemplate>
        <TodoHead/>
        <TodoList/>
        <TodoCreate/>
      </TodoTemplate>
      </TodoProvider>
    </>
    
  );
}

export default App;
