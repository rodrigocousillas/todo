import React from 'react';
import '../TodosLoading/TodosLoading.css'

function EmptyTodos(){
  
    return (
      <div className='LoadingTodo-container'> 
        <p className='LoadingTodo-text'>Crea tu primer tarea</p>
      </div>  
    )
  }

export { EmptyTodos };