import React from 'react';
import './Todo.css';

// const Todo = props => <textarea>Test</textarea>

// const Todo = props => {
//     return <h1>{props.characterOnProps.characterName}</h1>;
//   };

// export default Todo

// const Character = props => {
//   // console.log("props = ", props)
//   let myStyle;
//   if (props.characterOnProps.completed === true) {
//     myStyle = {textDecoration: "line-through"}
//   }
//   else {
//     myStyle = {textDecoration: "none"}
//   }
//     // return <h1 onClick={props.makeChange}>{props.characterOnProps.myToDo}</h1>;
//     return (
//     <div onClick={() => props.makeChange(props.characterOnProps)}>
//       <h1 style={myStyle} >{props.characterOnProps.task}</h1>
//     </div>
//     )

//   };
  
//   export default Character;

// const Todo = props => {
//   return (
//     <h1 
//     onClick={() => props.changeColor(props.myPropsCharacter.id)}
//     className={`character-header ${props.myPropsCharacter.color}`}
//     >
//     {props.myPropsCharacter.characterName}
//     </h1>
//   )
// }

const Todo = props => {
  return(
    <h1 
      onClick={() => props.changeComplete(props.propsItem.id)}
      className={`myTask ${props.propsItem.completed}`}
    >
      {props.propsItem.task}
    </h1>
  )
}



export default Todo