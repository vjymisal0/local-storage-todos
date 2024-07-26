import "../assets/componentsstyle.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'

const TodoCard = (props) => {
    const { children, index, handleDeleteTodo, handleEditTodo } = props
    return (
        <li className="todoItem">

            {children}
            <div className="actionsContainer">
                <FontAwesomeIcon onClick={() => {
                    handleEditTodo(index)
                    // console.log('edit')
                }} icon={faPenToSquare} />
                <FontAwesomeIcon onClick={() => {
                    handleDeleteTodo(index)
                    // console.log('delete')
                }} icon={faTrash} />

            </div>

        </li>
    )
}

export default TodoCard
