import React from 'react';
import styled from 'styled-components';

const TodoTemplateBlock = styled.div`
    width:512px;
    height:768px;
    position:relative;
    background:#fff;
    border-radius:16px;
    top:100px;
    box-shadow:0,0,8px,0 rgba(0,0,0,0.05);
    margin: 0 auto;
    margin-bottom:32px;
    display: flex;
    flex-direction:column
`

const TodoTemplate = ({children}) => {
    return (
        <TodoTemplateBlock>{children}</TodoTemplateBlock>
    );
};


export default TodoTemplate;