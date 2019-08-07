import React from 'react';

const Todo = props => {

    // console.log('todoprops', props.item);
    // console.log('todoprops', props);

    return (
        <div
            className={`item${props.item.completed ? " completed" : ""}`}
            onClick={() => props.toggleItem(props.item.id)}
        >       
            <p>{props.item.task}</p>
        </div>
    )
}

export default Todo;