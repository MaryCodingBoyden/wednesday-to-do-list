import React from 'react'
import Todo from './Todo'

const List = (props) => (
  <div>
    <h2>{props.name}</h2>
    <li>
      { props.items.map ( item =>(
        <Todo 
        key={item.id}
        name={item.name}
        complete={item.complete}
        id={item.id}
        todoClick={props.todoClick}
        />
      ))}
      </li>
    </div>
)

export default List;