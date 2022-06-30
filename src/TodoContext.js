import React, {createContext, useContext, useReducer, useRef} from 'react';
const initialTodos =[
    {
        id:1,
        text: '프로젝트 생성하기',
        done : false
    },
    {
        id:2,
        text: '컴포넌트 스타일링 하기',
        done : true
    },
    {
        id:3,
        text: 'Context 만들기',
        done : true
    },
    {
        id:4,
        text: '아무것도 안하기',
        done : true
    }
];
function todoReducer(state,action){
    switch(action.type){
        //action타입이 CREATE면 action객체의 todo를 state배열에 추가하기
        case 'CREATE':
            return state.concat(action.todo);
        //action타입이 TOGGLE이면 action객체의 id를 받아와서
        // state항목의 id와 일치하면 그 항목의 done을 반전
        case 'TOGGLE':
            return state.map(todo=>
                todo.id === action.id ?{...todo, done: !todo.done} : todo);
        //action 타입이 REMOVE이면 action 객체의 id를 받아와서
        // state항목의 id와 일치하지 않는 항목만 재배열로 반환
        case 'REMOVE':
            return state.filter(todo=> action.id !== todo.id);
        default:
            return state;
    }
}
//컨텍스트 생성]
const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext=createContext();
export function TodoProvider({children}){
    const [ state, dispatch ] = useReducer(todoReducer, initialTodos);
    const nextId = useRef(5);
    return (
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                <TodoNextIdContext.Provider value={nextId}>
                {children}
                </TodoNextIdContext.Provider>
                </TodoDispatchContext.Provider>    
        </TodoStateContext.Provider>

    )
}
// 커스텀 Hook
export function useTodoState() {
    return useContext(TodoStateContext);
}
export function useTodoDispatch() {
    return useContext(TodoDispatchContext);
} 
export function useTodoNextId() {
    return useContext(TodoNextIdContext);
}
// 함수를 실행시킬시 가서 값을 따로 받지않고 바로 함수를 실행시킴으로서 받아올 수 있다.
//사용방법
// import { useTodoState, useTodoDispatch} from '../TodoContext';
// function Sample(){
    // const state= useTodoState();
// }