import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems,onDeleteClick }) => {
  return (
    <div>
      {todoItems.map((item, index) => (
        <TodoItem
          key={index}
          todoName={item.name}
          onDeleteClick={onDeleteClick} 
          todoDate={item.dueDate}
        />
      ))}
    </div>
  );
};

export default TodoItems;