import Todo from "../types/todo";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  todo: Todo;
}

export default function TodoItem({ todo }: Props) {
  return (
    <div>
      <input
        className="hidden"
        type="checkbox"
        id={`todo-item-${todo.id}`}
        defaultChecked={todo.is_done}
      />
      <label
        className="flex items-center h-10 px-2 rounded cursor-pointer hover:bg-gray-900"
        htmlFor={`todo-item-${todo.id}`}
      >
        <span className="flex items-center justify-center w-5 h-5 text-transparent border-2 border-gray-500 rounded-full">
          <div className="w-4 h-4 border border-gray-700 rounded-full" />
        </span>
        <span className="ml-4 text-sm">{todo.title}</span>
      </label>
    </div>
  );
}
