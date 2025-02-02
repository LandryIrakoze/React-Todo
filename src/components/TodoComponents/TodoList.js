// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo';

const TodoList = (props) => {

    // console.log('todolist props', props.items.list);
    // console.log('props', props);

    return (
        <>
        {props.items.list.map(item => (
            <Todo key={item.id} item={item} toggleItem={props.toggleItem}/>
        ))}
        <button onClick={props.clearItems}>Clear Completed</button>
        </>
    )
}

export default TodoList;

//add toggleitem to Todo