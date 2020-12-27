import React from 'react';
import styled, {css} from 'styled-components';
import {MdDone, MdDelete} from 'react-icons/md';
import { useTodoDispatch } from '../TodoContext';

const CheckCircle = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 16px;
    border: 1px solid #ced4da;
    font-size:24px; /*아이콘 크기 */
    display: flex;
    align-items: center;
    justify-content: center; /*체크 원 가운데로 */
    margin-right: 20px;
    cursor: pointer;
    ${props => props.done && css`
        border: 1px solid #38d9a9;
        color: #38d9a9;
    `}
`;
const Text = styled.div`
    flex: 1;
    font-size: 21px;
    color: #495057;
    ${props => 
      props.done && 
      css`
        color: #ced4da;
      `}
`;
const Remove = styled.div`
    opacity: 0; /*불투명도 0 */
    display: flex;
    align-items: center;
    justify-content: center;
    color: #dee2e6;
    font-size: 24px;
    cursor: pointer;
    &:hover{
        color: #ff6b6b;
    }
`;

const TodoItemBlock = styled.div`
    display: flex;
    align-items: center; /*세로정렬? */
    padding-top: 12px;
    padding-bottom: 12px;
    &:hover { /* 위에 올렸을때 */
        ${Remove} {
            opacity: 1; /*불투명도 1 */
        }
    }
`;

function TodoItem({id, done, text}) {
    const dispatch = useTodoDispatch();
    const onToggle = () => dispatch({
        type: 'TOGGLE',
        id
    });
    const onRemove = () => dispatch({
        type: 'REMOVE',
        id
    });
    
    return (
        <TodoItemBlock>
            <CheckCircle done={done} onClick={onToggle}>
                {done && <MdDone />}
            </CheckCircle>
            <Text done={done}>{text}</Text>
            <Remove onClick={onRemove}>
                <MdDelete/>
            </Remove>
        </TodoItemBlock>
    );
}

export default TodoItem;