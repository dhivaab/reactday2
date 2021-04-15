import React , { useState , useEffect } from 'react';

const UsingEffect1 = ()=>{
    const [todo, setTodo] = React.useState(null);
    const [id, setId] = React.useState(1);
    
    React.useEffect(() => {
      if (id == null || id === '') {
        return;
      }
      
      fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(results => results.json())
        .then(data => {
          setTodo(data);
        });
    }, [id]); // useEffect will trigger whenever id is different.
  
    return (
      <div>
        <input value={id} onChange={e => setId(e.target.value)}/>
        <br/>
        <pre>{JSON.stringify(todo, null, 2)}</pre>
      </div>
    );
  }
  
  export default UsingEffect1