
import React from 'react';
const TodoList = (props) => {

    return (
        <>
            <li>{props.text}   <button
                onClick={() => {
                    props.onSelect(props.id);

                }}>

                click</button>
            </li>

        </>
    );



}

export default TodoList;