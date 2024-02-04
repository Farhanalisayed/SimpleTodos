// Write your code here
import './index.css'

const TodoItem = props => {
  const {detailsOfEach, deleteUser} = props
  const {id, title} = detailsOfEach
  const onDelete = () => {
    deleteUser(id)
  }
  return (
    <li>
      <p>{title}</p>
      <button onClick={onDelete}>Delete</button>
    </li>
  )
}
export default TodoItem
