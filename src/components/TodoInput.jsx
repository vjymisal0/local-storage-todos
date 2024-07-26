import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import "../assets/componentsstyle.css"

const TodoInput = (props) => {
    const { handleAddTodos, todoValue, setTodoValue } = props
    // const [todoValue, setTodoValue] = useState('')
    return (
        <header>
            <TextField onChange={(e) => {
                setTodoValue(e.target.value)
            }}
                id="standard-basic" label="Enter todo task" variant="outlined"
                value={todoValue}
            />

            <Button id='btn' onClick={() => {
                handleAddTodos(todoValue)
                setTodoValue('')
            }} variant="outlined">Add Task</Button>
        </header >
    )
}

export default TodoInput