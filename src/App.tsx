import Form from "./components/form";
import Header from "./components/header";
import TodoItem from "./components/todo";

export default function App() {
  return (
    <div className="flex flex-grow items-center justify-center bg-gray-900 h-dvh">
      <div className="max-w-full p-8 bg-gray-800 rounded-lg shadow-lg w-96 text-gray-200">
        <Header />

        <ul className="max-h-60 overflow-y-auto">
          {[...Array(100).keys()].map((id) => (
            <TodoItem
              key={id}
              todo={{
                id: id,
                title: "First Todo",
                is_done: false,
                created_at: new Date(),
              }}
            />
          ))}
        </ul>

        <Form />
      </div>
    </div>
  );
}
