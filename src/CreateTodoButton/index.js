import './CreateTodoButton.css';

function CreateTodoButton() {
    return (
        <button 
            className="CreateTodoButton"
            onClick={
                (event) => { 
                    console.log("Apretaste el Botón, botonazo")
                    console.log(event)
                    console.log(event.target)
                }
            }
        >
            +
        </button>
    )
  }

  export { CreateTodoButton };